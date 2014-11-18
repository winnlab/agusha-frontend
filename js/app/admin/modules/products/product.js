import 'can/'
import Edit from 'edit'

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
        Edit.prototype.init.call(this);

        if(!this.options.doc.attr('_id')) {
            this.options.doc.attr('active', true);
        }
    }
});