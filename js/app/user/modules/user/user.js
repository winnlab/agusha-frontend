import 'can/'

var user = can.Map.extend({
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

					return false;
				}

				return true;
			}
		},
		user: {
			set: function(obj) {
				window.localStorage.setItem('isAuth', true);

				return obj;
			}
		}
	}
});

export default new user()
