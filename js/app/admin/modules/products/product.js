import 'can/'
import Edit from 'edit'
import appState from 'appState'

import _ from 'lodash'
import 'summernote'
import 'upload'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/products/views/',

        moduleName: 'product',

        form: '.setProduct'
    }
}, {
    init: function () {
        _.extend(this.options, options);

        var self = this,
            options = this.options;

        self.module = new can.Map({
            langs: appState.attr('langs')
        });

        if(!options.doc.attr('_id')) {
            options.doc.attr('active', true);
        }

        self.ensureObject(options.doc, 'category', []);
        self.ensureObject(options.doc, 'certificate', []);
        
        self.module.attr(options.moduleName, options.doc);

        self.module.attr('ages', options.ages);
        self.module.attr('cats', options.cats);
        self.module.attr('certs', options.certs);

        self.loadView(options.viewpath + options.viewName, self.module);
    },

    '.age-select change': function (el) {
        var filtered = this.module.attr('ages').filter(function (item) {
            return item._id.toString() == el.val();
        });
        console.log(filtered.attr('0.level'))
        el.closest('.form-group').find('.age-level').val(filtered.attr('0.level'));
    },

    ensureObject: function(obj, key, value = {}) {
        if (!_.isObject(obj.attr(key))) {
            obj.attr(key, value);
        }
    }
});