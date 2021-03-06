'use strict';

import $ from 'jquery';
import can from 'can/';
import _ from 'lodash';
import Placeholder from 'placeholder';
import routerView from 'js/app/user/router/views/index.mustache!';
import 'can/route/pushstate/';

export default can.Control.extend({
		defaults: {

		}
	}, {
		init: function (el, options) {
			this.route = false;

			this.Placeholder = new Placeholder();

			var html = can.view(routerView, {
					modules: this.Placeholder.attr('modules')
				});

			$(options.modulesContainer).prepend(html);

			if (can.route.bindings.pushstate) {
				can.route.bindings.pushstate.root = options.base;
			} else {
				can.route.bindings.hashchange.root = options.base;
			}

			can.route.ready();
		},

		'.new_module click': function (el, ev) {
			ev.preventDefault();

			var options = this.options,
				href = el.attr('href').split(options.base).slice(1).join('/');

			this.new_module(href);
		},

		'new_module': function(href) {
			var routeObj = can.route.deparam(href);

			try {
				if (!_.isEmpty(routeObj)) {
					can.route.attr(routeObj, true);
				} else {
					throw new  Error("There is no such routing rule for '" + href + "', please check your configuration file");
				}
			} catch (e) {
				console.error(e);
			}
		},

		'/ route': 'routeChanged',
		':module route': 'routeChanged',
		':module/:id route': 'routeChanged',
		':module/:id/:param2 route': 'routeChanged',

		getModuleId: function (data) {
			if (data.module === 'registration') {
				return data.module;
			}
			return data.module + (data.id ? '-' + data.id : '') + (data.param2 ? '-' + data.param2 : '');
		},

		routeChanged: function (data) {
			var moduleName,
				id,
				module;

			if(!data.module) {
				data.module = this.options.defaultModule;
			}

			moduleName = data.module;

			id = this.getModuleId(data);

			if(this.route === id) {
				return;
			}

			this.route = id;

			module = _.find(this.options.modules, function (module) {
				return module.name === moduleName
			});

			try {
				if(module) {
					module.id = id;
					module.entity_id = data.id;
					module.param2 = data.param2;
					this.Placeholder.initModule(module);
				} else {
					throw new Error("There is no '" + moduleName + "' module, please check your configuration file");
				}
			} catch (e) {
				console.error(e);
			}
		}
	});
