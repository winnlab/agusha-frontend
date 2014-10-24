import Controller from 'controller'

export default Controller.extend(
	{
        defaults: {
			
        }
    }, {
    	'profile route': function() {
    		console.log('123');
    	},
		after_init: function(data) {
			
		}
    }
);