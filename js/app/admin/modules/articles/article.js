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
			options = this.options;
		
		self.module = new can.Map({
			langs: appState.attr('langs')
		});

		self.ensureObject(options.doc, 'age');
		self.ensureObject(options.doc, 'desc');
		self.ensureObject(options.doc, 'theme');
		self.ensureObject(options.doc, 'type');
		
		self.module.attr(options.moduleName, options.doc);

		self.module.attr('ages', options.ages);
		self.module.attr('themes', options.themes);
		self.module.attr('types', options.types);

		self.module.attr('ageValue', false);
		self.module.attr('themeName', false);

		self.module.attr('gallery', new GalleryModel.List({article_id: options.doc._id}));

		if (options.doc) {
			if (options.doc.age) {
				self.module.attr('ageValue' ,options.doc.age.value);
			}
			if (options.doc.theme) {
				self.module.attr('themeName', options.doc.theme.name);
			}
		}

		self.module.attr('newGalleryName', '');
		self.module.attr('addingGallery', false);

		self.loadView(options.viewpath + options.viewName, self.module);
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
		this.module.attr('addingGallery', !this.module.attr('addingGallery'));
	},

	'.confirmGallery click': function () {
		var self = this,
			options = self.options;

		var doc = new GalleryModel({
			article_id: options.doc._id,
		    name: self.module.attr('newGalleryName'),
		    images: []
		});

		doc.save()
		    .done(function (response) {
		    	doc.attr('_id', response._id);

		        self.module.attr('gallery').push(doc);

		        swal('Галерея создана!', '', 'success');

		        self.resetObservables();
		    })
		    .fail(function (response) {
		    	var data = response.responseJSON.err;
		    	self.processError(data.err);
		    });
	},

	'.removeGallery click': function (el) {
		swal({
		    title: "Удалить галерею?",
		    text: "",
		    type: "warning",
		    showCancelButton: true,
		    confirmButtonColor: "#DD6B55",
		    confirmButtonText: "Продолжай!",
		    cancelButtonText: "Нет!",
		    closeOnConfirm: false,
		    closeOnCancel: true
		}, function (isConfirm) {
		    if (isConfirm) {
		        $(el).parents('.gallery').data('gallery').destroy();
		        swal("Галерея удалена!", "", "success");
		    }
		});
	},

	resetObservables: function () {
		this.module.attr('addingGallery', false);
		this.module.attr('newGalleryName', '');
	},

	'.galleryName change': function (el) {
		$(el).parents('.gallery').data('gallery').save();
	}

});