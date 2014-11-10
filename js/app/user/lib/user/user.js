import 'can/';
import appState from 'core/appState';
import weights from 'lib/user/profileWeight'
import _ from 'lodash';

var getCurrentUser, User, logout, UserMap;

logout = function () {
	var that = this;

	can.ajax({
		url: '/profile/logout',
		success: function() {
			var user = that.options.user;

			localStorage.removeItem('isAuth');
			user.attr({});
			that.auth.attr('isAuth', false);

			can.route.attr({module: ''});
		}
	});
}

getCurrentUser = function() {
	var obj = window.localStorage.getItem('isAuth');

	try {
		return JSON.parse(obj);
	} catch(err){
		return false;
	}
};

UserMap = can.Map.extend({
	define: {
		fullName: {
			get: function() {
				var fname, lname;

				if(!this.attr('profile')) {
					return '';
				}

				fname = this.attr('profile.first_name') || '';
				lname = this.attr('profile.last_name') || '';

				return ''+fname + ' ' + lname;
			}
		},
		image: {
			value: {
				orig: '/img/user/helpers/stub/orig.png',
				large: '/img/user/helpers/stub/large.png',
				medium: '/img/user/helpers/stub/medium.png',
				small: '/img/user/helpers/stub/small.png'
			}
		}
	}
});

User = can.Control.extend({
	defaults: {
		user: new UserMap
	}
},{
	init: function () {
		this.initUser();
	},
	user: function() {
		return this.options.user;
	},
	initUser: function() {
		var that = this,
			user = this.options.user;

		this.checkAuth(function (err, newUser) {
			if(err) {
				user = null
				return;
			}

			user.attr(newUser);

			that.bindFilling();

			return user;
		});
	},
	auth: new can.Map,
	bindFilling: function() {
		var user = this.options.user;

		user.bind('change', this.reCheckFilling);
	},
	reCheckFilling: function(ev, attr, how, newVal, oldVal) {
		var def = 0,
		that = this;

		if(how != 'set') {
			return false;
		}

		_.forEach(weights, function(item, key, list) {
			var isField;

			isField = _.every(item.fields, function (field) {
				return that.attr(field);
			});

			if(isField) {
				def += item.weight
			}
		});

		this.attr('profile.filling', def)
	},
	isAuth: function() {
		var that = this,
			localuser = null,
			user = this.options.user;

		if(this.options.user.attr('_id')) {
			this.auth.attr('isAuth', true);
			return true;
		}

		localuser = this.getCurrentUser();

		if(!localuser) {
			this.auth.attr('isAuth', false);

			return false;
		}

		user.attr(localuser);

		this.auth.attr('isAuth', true);

		return true;
	},
	checkAuth: function(callback) {
		var that = this,
			user = this.options.user;

		can.ajax({
			url: '/user?ajax=true',
			sync: true,
			success: function(response) {
				if(response.data.user) {
					user.attr(response.data.user);
					that.auth.attr('isAuth', true)

					callback(null, response.data.user);
				}

				callback("User not exist");
			},
			error: function(resp) {
				callback(resp.err);
				that.auth.attr('isAuth', false);
			}
		});
	},
	getCurrentUser: getCurrentUser,
	logout: logout,
})

export default User
