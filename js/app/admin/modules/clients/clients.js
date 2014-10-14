import 'can/'
import List from 'list'
import _ from 'lodash'
import appState from 'appState'
import 'pagination'

import ClientModel from 'js/app/admin/modules/clients/clientModel'
import Client from 'js/app/admin/modules/clients/client'

export default List.extend(
	{
		defaults: {
            viewpath: '/js/app/admin/modules/clients/views/',
            viewName: 'index.stache',

            moduleName: 'clients',
            Model: ClientModel,

            Edit: Client,

            successMsg: 'Сущность успешно сохранена.',
            errorMsg: 'Ошибка сохранения сущности.',

            add: '.addClient',
            edit: '.editClient',
            remove: '.removeClient',

            formWrap: '.сlientForm',

            parentData: '.client',

            limit: 100
        }
	}, {
        init: function () {
            var self = this;

            List.prototype.init.call(self);

            self.module.attr('currentPage', 1);

            self.module.attr('count', self.options.Model.pages);
            self.module.attr('limit', self.options.limit);

            self.module.bind('currentPage', function (ev, newVal, oldVal) {
                self.populateModel(newVal);
            });
        },

        defineModule: function () {
            var MyMap = can.Map.extend({
                define: {
                    currentPage: {
                        set: function (val) {
                            if (isNaN(+val)) {
                                this.attr('currentPage', 1);
                                return 1;
                            }

                            return val;
                        }
                    }
                }
            });
            this.module = new MyMap({
                display: 'list'
            });
        },

        populateModel: function (page = 1) {
            var o = this.options;

            this.module.attr(o.moduleName, new o.Model.List({
                page: page,
                limit: o.limit
            }));
        }
	}
);