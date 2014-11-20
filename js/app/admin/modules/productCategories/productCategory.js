import 'can/'
import Edit from 'edit'

export default Edit.extend({
    defaults: {
        viewpath: '/js/app/admin/modules/productCategories/views/',

        moduleName: 'productCategory',

        form: '.setProductCategory'
    }
}, {
    init: function () {
        Edit.prototype.init.call(this);

        if(!this.options.doc.attr('_id')) {
            this.options.doc.attr('active', true);
        }
    }
});