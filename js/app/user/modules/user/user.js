import 'can/';
import appState from 'core/appState';

var User = can.Map.extend({
	user: null,
	checkAuth: function(callback) {
		var that = this;
		can.ajax({
			url: '/registartion?ajax=true',
			success: function(data) {
				that.attr('user', data.data.user)
				callback(null, data.data);
			},
			error: function(resp) {
				callback(resp.err);
			}
		});
	},
	define: {
		isAuth: {
			get: function() {
				if(!this.attr('user')) {
					if(!window.localStorage.getItem('isAuth')) {
						return false;
					}

					this.attr('user', window.localStorage.getItem('isAuth'))

					return true;
				}

				return true;
			}
		},
		user: {
			set: function(obj) {
				window.localStorage.setItem('isAuth', JSON.stringify(obj));

				return obj;
			},
			get: function (obj) {
				var luser = window.localStorage.getItem('isAuth');
				luser = JSON.parse(luser);

				if(luser) {
					return luser;
				}

				return obj;
			}
		}
	}
});

var user = new User();

appState.attr('user', user);

export default user
