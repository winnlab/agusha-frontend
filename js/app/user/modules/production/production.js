import Controller from 'controller'
import 'carousel'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.carousel = this.element.find('#production_carousel');
		},
		
		plugins: function() {
			this.init_carousel();
		},
		
		sizes: function() {
			var width = this.element.width(),
				classname = 'high_resolution',
				func = 'addClass';
			
			if(width < 900) {
				func = 'removeClass'
			}
			
			this.element[func](classname);
		},
		
		init_carousel: function() {
			this.carousel.carousel();
		},
		
		after_init: function(data) {
			
		}	
	}
);