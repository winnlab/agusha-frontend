import 'can/'
import List from 'list'

import ProductCategoryModel from 'js/app/admin/modules/productCategories/productCategoryModel'
import ProductCategory from 'js/app/admin/modules/productCategories/productCategory'

export default List.extend(
    {
        defaults: {
            viewpath: '/js/app/admin/modules/productCategories/views/',
            viewName: 'index.stache',

            moduleName: 'productCategories',
            Model: ProductCategoryModel,

            Edit: ProductCategory,

            add: '.addProductCategory',
            edit: '.editProductCategory',
            remove: '.removeProductCategory',

            formWrap: '.productCategoryForm',

            parentData: '.productCategories'
        }
    },
    {
        '.activateProductCategory click': function (el) {
            this.getDocHandle(el).save();
        }
    }
);