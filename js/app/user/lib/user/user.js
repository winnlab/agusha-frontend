import 'can/';
import appState from 'core/appState';

var getCurrentUser, getUserImage, User,
	defaults;

defaults = {
	images: {
		orig: '/img/user/helpers/stub/orig.png',
		large: '/img/user/helpers/stub/large.png',
		medium: '/img/user/helpers/stub/medium.png',
		small: '/img/user/helpers/stub/small.png'
	}
};

getCurrentUser = function() {
	var obj = window.localStorage.getItem('isAuth');

	try {
		return JSON.parse(obj);
	} catch(err){
		return false;
	}
};

getUserImage = function(type) {
	var user = this.attr('user');

	if(!user.image || !user.image[type]) {
		return defaults.images[type];
	}

	return '/img/uploads/'+user.image[type];
};

User = can.Map.extend({
	init: function() {
		this.initUser();
	},
	user: null,
	getCurrentUser: getCurrentUser,
	getUserImage: getUserImage,
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

				obj = obj.attr();

				window.localStorage.setItem('isAuth', JSON.stringify(obj));

				return obj;
			}
		}
	}
});

export default User
