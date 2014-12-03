import 'can/';
import 'can/map/validations/validations';
import weights from 'lib/user/profileWeight'
import _ from 'lodash';
import ChildrenMap from 'lib/user/children';

var getCurrentUser, User, logout, UserMap,
	ChildrenList, defImages;

defImages = {
	orig: '/img/user/helpers/stub/orig.png',
	large: '/img/user/helpers/stub/large.png',
	medium: '/img/user/helpers/stub/medium.png',
	small: '/img/user/helpers/stub/small.png'
}

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

ChildrenList = can.List.extend({
	Map: ChildrenMap
},{

})

UserMap = can.Map.extend({
	attributes: {
		email: 'string'
	},
	init: function() {
	}
}, {
	define: {
		children: {
			value: new ChildrenList
		},
		errors: {
			value: new can.Map({
				email: null,
				spareEmail: null,
				firstName: null
			})
		},
		profile: {
			value: {
				filling: 0
			}
		},
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
			value: defImages
		},
		email: {
			set: function(value) {
				var regexp;
				regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

				if(value.match(regexp)) {
					this.attr('errors.email', null);

					return value;
				}


				this.attr('errors.email', "Введите корректный E-mail");
				return value;
			}
		},
		spareEmail: {
			set: function(value) {
				var regexp;
				regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

				if(value.match(regexp)) {
					this.attr('errors.spareEmail', null);

					return value;
				}

				this.attr('errors.spareEmail', "Введите корректный E-mail");
				return value;
			}
		}
	},
	removeImage: function() {
		var options, that = this, name = this.attr('image.large')
			.match(/[a-zA-Z\d]{0,}.[a-zA-Z\d]{1,4}$/i);

		if(!name) {
			return false;
		}

		options = {
			name: name[0],
			type: 'profile'
		};

		can.ajax({
			url: '/profile/upload?'+can.param(options),
			type: 'DELETE'
		}).success(function() {
			that.attr('image', defImages);

			callback();
		}).fail(function( ) {
			alert('fail');
		});
	},
	setImages: function(images) {
		var that = this;

		_.each(images, function (image, key, list) {
			that.attr('image.'+key, image);
		});
	}
});

User = can.Control.extend({
	defaults: {
		user: new UserMap({})
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

		user.delegate(
			'**',
			'set', 
			can.proxy(this.reCheckFilling, user)
		);

		// user.delegate(
		// 	'**',
		// 	'add', 
		// 	can.proxy(this.reCheckFilling, user)
		// );
	},
	reCheckFilling: function(ev, newVal, oldVal, prop) {
		var def = 0,
		that = this;

		_.forEach(weights, function(item, key, list) {
			var isField;

			isField = _.every(item.fields, function (field) {
				var field;

				try {
					field = that.attr(field);
				} catch(e) {

				}
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

				callback("User not exist"); // Це перекладається як "Користувач не існувати" :)
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
