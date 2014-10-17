import can from 'can/'
import _ from 'underscore'

export default can.Map.extend({
	modules: [],

	initModule: function (module) {
		var self = this;
		if (!self.checkModule(module.id)) {
			System.import(module.path.client).then((Module) => {
				if (Module) {
						self.addModule(module);
						self.activateModule(module.id);
						new Module.default('#' + module.id, module);
				} else {
					msg = module.path.client
						? 'Please check the constructor of ' + module.path.client + '.js'
						: 'Please check the existance of "' + module.name + '" module';
					
					throw new Error(msg);
				}
			}).catch((e) => {
				var msg = 'Error caught while executing the ' + module.name
						+ ' module from "' + module.path.client + '": ';
				console.log(' --- ');
				console.error(msg);
				console.info(e);
				console.info(e.stack);
				console.log(' --- ');
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
			$(window).resize();
		}
		
		return exists;
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