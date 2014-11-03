import Controller from 'controller';
import User from 'modules/user/user';
import appState from 'core/appState';

export default Controller.extend(
	{
        defaults: {
			// user: appState.attr('user.user')
        }
    }, {
		after_init: function(data) {
			// alert(JSON.stringify(this.user));
            console.log(appState.attr('user'));
        }
    }
);