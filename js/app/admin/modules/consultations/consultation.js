import 'can/'
import Edit from 'edit'

// import 'bootstrap-wysihtml5'
import 'summernote'

import appState from 'appState'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/consultations/views/',

        moduleName: 'consultation',

        successMsg: 'Статья успешно сохранена.',
        errorMsg: 'Ошибка сохранения статьи.',

        removeAnswerMsg: 'Удалить ответ?',

        form: '.setConsultation'
    }
}, {
	init: function () {
		_.extend(this.options, options);

        var options = this.options,
            data = {
                langs: appState.attr('langs')
            };

        this.ensureObject(options.doc, 'age');
        this.ensureObject(options.doc, 'answer', []);
        this.ensureObject(options.doc, 'theme');
        this.ensureObject(options.doc, 'type');
        
        data[options.moduleName] = options.doc;

        data['ages'] = options.ages;
        data['themes'] = options.themes;
        data['types'] = options.types;

        var observables = [
            {name: 'ageTitle', value: null},
            {name: 'ageFixture', value: null},
            {name: 'themeName', value: null},
            {name: 'addingComment', value: null}
        ];

        for (var i = 0, len = observables.length; i < len; i++) {
            this[observables[i].name] = can.compute(observables[i].value);
        }

        if (options.doc) {
            if (options.doc.age) {
                this.ageTitle(options.doc.age.title);
                this.ageTitle(
                    options.doc.age.icon
                        ? options.doc.age.icon.title
                        : undefined
                );
            }
            if (options.doc.theme) {
                this.themeName(options.doc.theme.name);
            }
        }

        for (var i = 0, len = observables.length; i < len; i++) {
            data[observables[i].name] = this[observables[i].name];
        }

        data['showComments'] = can.compute(false);

        if(!this.options.doc.attr('_id')) {
            this.options.doc.attr('active', true);
        }

        this.loadView(options.viewpath + options.viewName, data);
	},

    ensureObject: function(obj, key, value = {}) {
        if (!_.isObject(obj.attr(key))) {
            obj.attr(key, value);
        }
    },

    '.currentAgeSelect change': function (el) {
        var ages = el.find('option:selected').data('ages'),
            newTitle = ages.attr('title'),
            newFixture = ages.attr('icon.fixture');

        this.ageTitle(newTitle);
        this.ageFixture(newFixture);
    },

    '.currentThemeSelect change': function (el) {
        var newVal = el.find('option:selected').data('themes').attr('name');
        this.themeName(newVal);
    },

    '.removeAnswer click': function (el) {
        if (confirm(this.options.removeAnswerMsg)) {
            var item = $(el).parents('.answer').data('answer'),
                answ = this.options.doc.attr('answer'),
                index = answ.indexOf(item);

            if(index > -1) {
                answ.splice(index, 1);
            }
        }
    },

    '.addComment click': function (el) {
        this.addingComment(!this.addingComment());
    },

    '.confirmComment click': function (el) {
        var self = this,
            doc = self.options.doc;
        can.ajax({
            url: '/admin/user'
        }).done(function (response) {
            var wysiwyg = el.closest('.panel-body').find('textarea'),
                commentText = wysiwyg.code(),
                newComment = {
                    date: Date.now(),
                    text: commentText,
                    specialist: {
                        _id: response.data._id,
                        name: response.data.name
                    }
                };

            doc.attr('answer').push(newComment);

            self.addingComment(false);
            wysiwyg.code('');
            saSuccess('Комментарий добавлен! Нажмите "Сохранить", чтобы сохранить добавленный комментарий.');
        }).fail(function (response) {
            saError(response.err || response.responseText ? response.responseText.err : 'Произошла неизвестная ошибка.' );
        });
    }
});