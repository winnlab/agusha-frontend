import Controller from 'controller'

import appState from 'core/appState';

export default Controller.extend({}, {
	variables: function() {
		this.active = 'active';
		
		this.winner_items = this.element.find('.winner_item');
	},
	
	plugins: function() {
		
	},
	
	after_init: function() {
		this.winner_items.filter(':not(.active)').find('.winner_bottom').hide();
	},
	
	'.winner_item .winner_topper click': function(el) {
		var winner_item = el.closest('.winner_item'),
			winner_bottom = winner_item.find('.winner_bottom'),
			func = 'slideDown';
		
		if(winner_item.hasClass(this.active)) {
			func = 'slideUp';
		}
		
		winner_bottom.stop(true, false)[func](300);
		
		winner_item.toggleClass(this.active);
	}
});