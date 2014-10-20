import 'can/'
import Edit from 'edit'
import 'js/app/admin/components/upload/'
import appState from 'appState'
import _ from 'lodash'

import 'summernote'

import GalleryModel from 'js/app/admin/modules/articles/galleryModel'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/articles/views/',

        moduleName: 'article',

        successMsg: 'Статья успешно сохранена.',
        errorMsg: 'Ошибка сохранения статьи.',

        removeAnswerMsg: 'Удалить ответ?',

        form: '.setArticle'
    }
}, {

	init: function(element, options) {
		_.extend(this.options, options);

		var self = this,
			options = this.options,
			data = {
				langs: appState.attr('langs')
			};

		self.ensureObject(options.doc, 'age');
		self.ensureObject(options.doc, 'desc');
		self.ensureObject(options.doc, 'theme');
		self.ensureObject(options.doc, 'type');
		
		data[options.moduleName] = options.doc;

		data['ages'] = options.ages;
		data['themes'] = options.themes;
		data['types'] = options.types;

		self.ageValue = can.compute(null);
		self.themeName = can.compute(null);

		self.gallery = new can.List;

		GalleryModel.findAll({article: options.doc._id}, function (docs) {
            $.each(docs, function(i, doc) {
                self.gallery.push(doc);
            });
        });

		if (options.doc) {
			if (options.doc.age) {
				self.ageValue(options.doc.age.value);
			}
			if (options.doc.theme) {
				self.themeName(options.doc.theme.name);
			}
		}

		data['ageValue'] = self.ageValue;
		data['themeName'] = self.themeName;

		self.newGalleryName = self.compute('');
		self.addingGallery = self.compute(false);
		data['newGalleryName'] = self.newGalleryName;
		data['addingGallery'] = self.addingGallery;

		// if(!options.doc.attr('_id')) {
		// 	options.doc.attr('active', true);
		// }

		self.loadView(options.viewpath + options.viewName, data);
	},

	ensureObject: function(obj, key) {
		var exists = _.isObject(obj.attr(key));
		if (!exists) {
			obj.attr(key, {});
		}
	},

	'.currentAgeSelect change': function (el) {
		var newVal = el.find('option:selected').data('ages').attr('value');
		this.ageValue(newVal);
	},

	'.currentThemeSelect change': function (el) {
		var newVal = el.find('option:selected').data('themes').attr('name');
		this.themeName(newVal);
	},

	'.addAnswer click': function (el) {
		var answers = this.options.doc.attr('answer');
		if(!answers) {
			this.options.doc.attr('answer', new can.List);
			answers = this.options.doc.attr('answer');
		}
		answers.push({text: '', score: 0});
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

	'.addGallery click': function () {

	},

	'.confirmGallery click': function () {

	},

	'.removeGallery click': function (el) {

	}

});