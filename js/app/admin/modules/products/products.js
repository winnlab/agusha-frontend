import 'can/'
import List from 'list'

import ProductModel from 'js/app/admin/modules/products/productModel'
import Product from 'js/app/admin/modules/products/product'

export default List.extend(
    {
        defaults: {
            viewpath: '/js/app/admin/modules/products/views/',
            viewName: 'index.stache',

            moduleName: 'products',
            Model: ProductModel,

            Edit: Product,

            add: '.addProduct',
            edit: '.editProduct',
            remove: '.removeProduct',

            formWrap: '.productForm',

            parentData: '.products'
        }
    },
    {}
);