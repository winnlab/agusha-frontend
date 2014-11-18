import 'can/'
import List from 'list'

import ProductAgeModel from 'js/app/admin/modules/productAges/productAgeModel'
import ProductAge from 'js/app/admin/modules/productAges/productAge'

export default List.extend(
    {
        defaults: {
            viewpath: '/js/app/admin/modules/productAges/views/',
            viewName: 'index.stache',

            moduleName: 'productAges',
            Model: ProductAgeModel,

            Edit: ProductAge,

            add: '.addProductAge',
            edit: '.editProductAge',
            remove: '.removeProductAge',

            formWrap: '.productAgeForm',

            parentData: '.productAge'
        }
    },
    {
        '.activateproductAge click': function (el) {
            this.getDocHandle(el).save();
        }
    }
);