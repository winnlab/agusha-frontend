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

            page: 1,
            pages: 1,
            limit: 100
        }
	}, {
        init: function () {
            List.prototype.init.call(this);

            this.module.attr('currentPage', this.options.page);
            this.module.attr('pages', this.options.Model.pages);
        },

        populateModel: function () {
            var o = this.options;
            this.module.attr(o.moduleName, new o.Model.List({
                page: o.page,
                limit: o.limit
            }));
        }
	}
);