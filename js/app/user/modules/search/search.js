import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.classname = 'active';
			
			this.tab_blocks = this.element.find('.tab_block');
		},
		
		after_init: function(data) {
			this.tab_blocks.filter(':not(.active)').find('.items_container').hide();
		},
		
		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				items_container = el.next(),
				func = 'slideDown';
			
			if(tab_block.hasClass(this.classname)) {
				func = 'slideUp';
			}
			
			items_container.stop(true, false)[func](300);
			
			tab_block.toggleClass(this.classname);
		}
	}
);