import 'can/'
import 'can/view/'
import 'can/view/mustache/'
import Edit from 'edit'
import 'js/app/admin/components/upload/'
import appState from 'appState'
import _ from 'lodash'

import 'slider'
import 'summernote'
import 'sortable'

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
			gallery = new can.Map;
		
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

		var ageValue = [],
			themeValue = [];

		self.module.attr(options.moduleName + '.age').each(function (item) {
			ageValue.push(item._id);
		});

		self.module.attr(options.moduleName + '.theme').each(function (item) {
			themeValue.push(item._id);
		});

		self.module.attr('ageValue', ageValue);
		self.module.attr('themeValue', themeValue);

		if (options.doc) {
			if (options.doc._id) {
				gallery = new GalleryModel.List({article_id: options.doc._id});
			}
		}

		self.module.attr('gallery', gallery);
		self.module.attr('module', {gallery: self.module.attr('gallery')});

		self.module.attr('newGalleryName', '');
		self.module.attr('addingGallery', false);

		self.loadView(options.viewpath + options.viewName, self.module);
	},

	ensureObject: function(obj, key) {
		if (!_.isObject(obj.attr(key))) {
			obj.attr(key, {});
		}
	},

	'.currentAgeSelect change': function (el) {

		var ages = this.module.attr(this.options.moduleName + '.age'),
			newAgeValue = [];

		if (ages instanceof can.List) {
			ages.replace([]);
		} else {
			ages = new can.List;
			this.module.attr(this.options.moduleName + '.age', ages);
		}

		el.find('option:selected').each(function () {
			var data = $(this).data('ages');
			ages.push({
				_id: data.attr('_id'),
				title: data.attr('title')
			});
			newAgeValue.push(data._id);
		});

		this.module.attr('ageValue', []);
		this.module.attr('ageValue', newAgeValue);
	},

	'.currentThemeSelect change': function (el) {
		var themes = this.module.attr(this.options.moduleName + '.theme');

		if (themes instanceof can.List) {
			themes.replace([]);
		} else {
			themes = new can.List;
			this.module.attr(this.options.moduleName + '.theme', themes);
		}

		el.find('option:selected').each(function () {
			var data = $(this).data('themes');
			themes.push({
				_id: data.attr('_id'),
				name: data.attr('name')
			});
		});
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