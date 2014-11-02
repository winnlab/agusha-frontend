import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.classname = 'active';
			
			this.tab_selectors = this.element.find('.tab_selector');
		},
		
		after_init: function(data) {
			
		},
		
		'.tab click': function(el) {
			var tab = el.data('tab');
			
			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		}
    }
);