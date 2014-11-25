import 'can/'
import 'can/map/backup/'
import _ from 'lodash'
import List from 'list'

import Article from 'js/app/admin/modules/articles/article'
import ArticleModel from 'js/app/admin/modules/articles/articleModel'

import 'css/admin/articles.css!'

import 'articlefilter'

import AgeModel from 'js/app/admin/modules/category/ageModel'
import ArticleTypeModel from 'js/app/admin/modules/articleTypes/articleTypeModel'
import ThemeModel from 'js/app/admin/modules/category/themeModel'

export default List.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/articles/views/',

        Edit: Article,

        moduleName: 'encyclopedia-article',
        Model: ArticleModel,

        deleteMsg: 'Вы действительно хотите удалить эту статью?',
        deletedMsg: 'Статья успешно удалена!',

        add: '.addArticle',
        edit: '.editArticle',
        remove: '.removeArticle',

        formWrap: '.articleForm',

        parentData: '.article'
    }
}, {
    init: function () {
        var self = this;

        List.prototype.init.call(self);

        self.module.attr('doFilter', new can.Map({exec: self.doFilter.bind(self)}));

        self.module.attr('filterTheme', null);

        self.module.attr('ages', new can.List);
        self.module.attr('themes', new can.List);
        self.module.attr('types', new can.List);

        AgeModel.findAll({active: true}, function (docs) {
            $.each(docs, function(i, doc) {
                self.module.attr('ages').push(doc);
            });
        });

        ThemeModel.findAll({active: true}, function (docs) {
            $.each(docs, function(i, doc) {
                self.module.attr('themes').push(doc);
            });
        });

        ArticleTypeModel.findAll({}, function (docs) {
            $.each(docs, function(i, doc) {
                self.module.attr('types').push(doc);
            });
        });

        can.mustache.registerHelper('sortArticles', function (collection, filterTheme, options) {
            if (typeof collection === 'function') {
                collection = collection();
            }

            if (typeof filterTheme === 'function') {
                filterTheme = filterTheme();
            }

            if (collection && collection.attr('length')) {

                if (filterTheme) {
                    var id = filterTheme.attr('_id').toString();

                    collection.sort(function (a, b) {
                        var aVal, bVal;

                        aVal = _.find(a.attr('theme'), function (item) {
                            return item.attr('_id').toString() == id;
                        });

                        bVal = _.find(b.attr('theme'), function (item) {
                            return item.attr('_id').toString() == id;
                        });
                        // console.log(aVal.attr('position'), bVal.attr('position'));
                        return aVal.attr('position') < bVal.attr('position');
                    });
                } else {
                    collection.sort(function (a, b) {
                        return a.attr('position') < b.attr('position');
                    });
                }

                return _.map(collection, function (member, index) {
                    return options.fn(options.scope
                        .add({'@index': index})
                        .add(member)
                    );
                }).join('');
            }
        });

        $(window).scroll(function () {
            if (!self.element.hasClass('hidden')) {
                var atBottom = $(window).scrollTop() >= ($(document).height() - $(window).height());

                if (atBottom) {
                    self.pagesScrolled++;
                    self.options.Model.findAll(false, self.processFindAll.bind(self));
                }
            }
        });
    },

    populateModel: function () {
        this.module.attr(this.options.moduleName, new this.options.Model.List({queryOptions: {sort: {position: -1}}}));
    },

    processFindAll: function (docs) {
        var module = this.module.attr(this.options.moduleName);
        docs.each(function (doc) {
            module.push(doc);
        });
    },

    initSetControl: function (area, doc, entity) {
        area.html('');

        var params = {
                ages: this.module.attr('ages'),
                themes: this.module.attr('themes'),
                types: this.module.attr('types'),
                doc,
                entity
            };

        if (this.options.EditHandle) {
            this.options.EditHandle.destroy();
        }
        
        this.options.EditHandle = new this.options.Edit(area, params);
    },

    doFilter: function (data) {
        var moduleList = this.module.attr(this.options.moduleName),
            filter = {};

        filter.queryOptions = {};
        filter.queryOptions.sort = {}

        if (data) {
            filter['age._id'] = data.attr('age');
            filter['theme._id'] = data.attr('theme');
            filter['type.name'] = data.attr('type');

            /*
                nestedAnchor object used by mongoose-pages as rules of finding nested anchor

                    (0) .wrap - name of property of document where array is
                    (1) .field - field which should be used as nested object identifier
                    (2) .value - value of (1) which should be used for identification
                    (3) .anchorField - value of which field should be used as anchorField

                Probably could get (0) and (3) by splitting first sort option in mongoose-pages, but whatever
             */
            filter.queryOptions.nestedAnchor = {};
            filter.queryOptions.nestedAnchor.wrap = 'theme';
            filter.queryOptions.nestedAnchor.field = '_id';
            filter.queryOptions.nestedAnchor.value = filter['theme._id'];
            filter.queryOptions.nestedAnchor.anchorField = 'position';
            
            filter.queryOptions.sort['theme.position'] = -1;

            this.module.attr('filterTheme', data.attr('theme'));
        } else {
            filter.queryOptions.sort['position'] = -1;
            this.module.attr('filterTheme', null);
        }

        this.module.attr(this.options.moduleName, new this.options.Model.List(filter));
    },

    '.changePosArticle click': function (el) {
        var posModule = new can.Map,
            self = this,
            currentPos, hasBigView, html;

        posModule.attr('article', self.getDocHandle(el));

        if (self.module.attr('filterTheme') != null) {
            var filtered = posModule.attr('article.theme').filter(function (item, index) {
                var result = self.module.attr('filterTheme') == item._id;
                if (result) {
                    posModule.attr('themeIndex', index);
                    posModule.attr('themeName', item.name);
                }
                return result;
            });

            if (filtered[0]) {
                currentPos = filtered[0].attr('position');
                hasBigView = filtered[0].attr('hasBigView');
            } else {
                currentPos = 0;
                hasBigView = false;
            }
        } else {
            currentPos = posModule.attr('article.position');
            hasBigView = posModule.attr('article.hasBigView');
        }

        posModule.attr('position', currentPos);
        posModule.attr('hasBigView', hasBigView);

        self.posModule = posModule;
        html = can.view(self.options.viewpath + 'popover.stache', self.posModule);

        self.element.append(html);
    },

    '.savePosition click': function (el) {
        var self = this,
            wrap = el.closest('.articlePopover'),
            index = this.posModule.attr('themeIndex'),
            newPos = this.posModule.attr('position'),
            hasBigView = this.posModule.attr('hasBigView');
        
        this.posModule.backup();

        if (index) {
            this.posModule.attr(`article.theme.${index}.position`, newPos);
            this.posModule.attr(`article.theme.${index}.hasBigView`, hasBigView);
        } else {
            this.posModule.attr('article.position', newPos);
            this.posModule.attr('article.hasBigView', hasBigView);
        }

        this.posModule.attr('article').save()
            .fail(function (response) {
                self.posModule.restore();
                self.processError(response.responseJSON || response.responseText)
            });

        wrap.remove();
    },

    '.cancelPosition click': function (el) {
        el.closest('.articlePopover').remove();
    }
});
