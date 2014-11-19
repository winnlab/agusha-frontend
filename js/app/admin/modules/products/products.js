import 'can/'
import List from 'list'

import CertificateModel from 'js/app/admin/modules/certificates/certificateModel'
import ProductAgeModel from 'js/app/admin/modules/productAges/productAgeModel'
import ProductCategoryModel from 'js/app/admin/modules/productCategories/productCategoryModel'

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
    {
        init: function (el, options) {
            var self = this;

            List.prototype.init.apply(self, arguments);

            self.module.attr('ages', new can.List);
            self.module.attr('cats', new can.List);
            self.module.attr('certs', new can.List);

            ProductAgeModel.findAll({active: true}, function (docs) {
                $.each(docs, function(i, doc) {
                    self.module.attr('ages').push(doc);
                });
            });

            ProductCategoryModel.findAll({active: true}, function (docs) {
                $.each(docs, function(i, doc) {
                    self.module.attr('cats').push(doc);
                });
            });

            CertificateModel.findAll({}, function (docs) {
                $.each(docs, function(i, doc) {
                    self.module.attr('certs').push(doc);
                });
            });
        },

        initSetControl: function (area, doc, entity) {
            area.html('');

            var params = {
                    ages: this.module.attr('ages'),
                    cats: this.module.attr('cats'),
                    certs: this.module.attr('certs'),
                    doc,
                    entity
                };

            if (this.options.EditHandle) {
                this.options.EditHandle.destroy();
            }
            
            this.options.EditHandle = new this.options.Edit(area, params);
        }
    }
);