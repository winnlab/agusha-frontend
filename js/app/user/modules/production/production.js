import Controller from 'controller'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			
		},
		
		sizes: function() {
			console.log(1)
			var width = this.element.width(),
				classname = 'high_resolution',
				func = 'addClass';
			
			if(width < 900) {
				func = 'removeClass'
			}
			
			this.element[func](classname);
		},
		
		after_init: function(data) {
			
		}	
	}
);