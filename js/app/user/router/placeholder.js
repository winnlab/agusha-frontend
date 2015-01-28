'use strict';

import can from 'can/';
import _ from 'lodash';

export default can.Map.extend({
	footer: $('#footer'),

	modules: [],

	initModule: function (module) {
		var self = this, msg;

		if (!self.checkModule(module.id)) {
			System['import'](module.path.client).then(function (Module) {
				if(Module) {
					self.addModule(module);
					self.activateModule(module.id);
					new Module['default']('#' + module.id, module);
					self.moduleActivated(module.id);
				} else {
					msg = module.path.client
						? 'Please check the constructor of ' + module.path.client + '.js'
						: 'Please check the existance of "' + module.name + '" module';

					throw new Error(msg);
				}
			})['catch']((e) => {
				var msg = 'Error caught while executing the ' + module.name
						+ ' module from "' + module.path.client + '": ';
				console.groupCollapsed(msg);
				console.error(msg);
				console.info(e);
				console.info(e.stack);
				console.groupEnd(msg);
			});
		}
	},

	checkModule: function (id) {
		var module = _.find(this.modules, function(module){
				return module.id === id;
			}),
			exists = !_.isEmpty(module);

		if(exists) {
			this.activateModule(id);

			$(window).trigger('custom_resize');

			this.moduleActivated(id);
		}

		return exists;
	},

	moduleActivated: function(id) {
		var classname = 'active',
			moduleTabs = $('.module_tab');

		moduleTabs.removeClass(classname);
		moduleTabs.filter('.module_tab_' + id).addClass(classname);

		window.core.animate_left_inner_menu();

		if (id === 'encyclopedia') {
			window.core.hide_left_menu();
			window.core.hide_right_menu();
		}

		if(id === 'login' || id === 'registration') {
			this.footer.hide();
		} else {
			this.footer.show();
		}

		this.scrollToTop();
	},

	scrollToTop: function () {
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	},

	addModule: function (module) {
		this.modules.push({
			id: module.id,
			name: module.name,
			active: false
		});
	},

	activateModule: function (id) {
		can.batch.start();
		_.map(this.modules, function (module) {
			module.attr('active', module.id === id);
		});
		can.batch.stop();
	}
});
