import 'can/';
import appState from 'core/appState';

var getCurrentUser = function() {
	var obj = window.localStorage.getItem('isAuth');

	try {
		return JSON.parse(obj);
	} catch(err){
		return false;
	}
}

var User = can.Map.extend({
	init: function() {
		this.initUser();

		console.log('initUser',this.attr('user'));
	},
	user: null,
	getCurrentUser: getCurrentUser,
	checkAuth: function(callback) {
		var that = this;
		can.ajax({
			url: '/user?ajax=true',
			sync: true,
			success: function(data) {
				var user = data.data.user || null

				that.attr('user', user);

				callback(null, user);
			},
			error: function(resp) {
				callback(resp.err);
			}
		});
	},
	initUser: function() {
		var that = this;

		this.checkAuth(function (err, user) {
			if(err) {
				console.log('user Error: ', err);

				that.attr('user', null);
				return;
			}

			that.attr('user', user);

			return user;
		});
	},
	define: {
		isAuth: {
			get: function() {
				if(!this.attr('user')) {
					var localuser = getCurrentUser();
					if(!localuser) {
						return false;
					}

					this.attr('user', localuser)

					return true;
				}

				return true;
			}
		},
		user: {
			set: function(obj) {
				if(!obj) {
					return null;
				}

				window.localStorage.setItem('isAuth', JSON.stringify(obj));

				return obj;
			},
			get: function (obj) {
				var luser = getCurrentUser();

				if(luser) {
					return luser;
				}

				return obj;
			}
		}
	}
});

export default User
