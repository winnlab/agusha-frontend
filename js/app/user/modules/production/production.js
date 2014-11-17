import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			
		},
		
		sizes: function() {
			var width = this.element.width(),
				classname = 'high_resolution',
				func = 'addClass';
			console.log(width)
			if(width < 900) {
				func = 'removeClass'
			}
			
			this.element[func](classname);
		},
		
		after_init: function(data) {
			
		}	
	}
);