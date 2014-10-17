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

        this.ageValue = can.compute(null);
        this.themeName = can.compute(null);

        if (options.doc) {
            if (options.doc.age) {
                this.ageValue(options.doc.age.value);
            }
            if (options.doc.theme) {
                this.themeName(options.doc.theme.name);
            }
        }

        data['ageValue'] = this.ageValue;
        data['themeName'] = this.themeName;
        data['showComments'] = can.compute(false);

        if(!this.options.doc.attr('_id')) {
            this.options.doc.attr('active', true);
        }

        this.loadView(options.viewpath + options.viewName, data);
	},

    ensureObject: function(obj, key, value = {}) {
        var exists = _.isObject(obj.attr(key));
        if (!exists) {
            obj.attr(key, value);
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

    '.removeAnswer click': function (el) {
        if (confirm(this.options.removeAnswerMsg)) {
            var item = $(el).parents('.answer').data('answer'),
                answ = this.options.doc.attr('answer'),
                index = answ.indexOf(item);

            if(index > -1) {
                answ.splice(index, 1);
            }
        }
    }
});