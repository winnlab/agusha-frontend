import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.classname = 'active';
			this.base_url = window.location.protocol + '//' + window.location.host;
			
			this.tab_selectors = this.element.find('.tab_selector');
			
			this.tab_blocks = this.element.find('.tab_block');
		},
		
		plugins: function() {
			
		},
		
		after_init: function(data) {
			this.tab_blocks.filter(':not(.active)').find('.text').hide();
		},
		
		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				text = el.next(),
				func = 'slideDown';
			
			if(tab_block.hasClass(this.classname)) {
				func = 'slideUp';
			}
			
			text.stop(true, false)[func](300);
			
			tab_block.toggleClass(this.classname);
		},
		
		'.tab click': function(el) {
			var tab = el.data('tab');
			
			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		}
	}
);