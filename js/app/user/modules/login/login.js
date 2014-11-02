import Controller from 'controller'
import user from 'js/app/user/modules/user/user'

var ViewModel = can.Map.extend({
	define: {
		email: {
			value: null
		},
		password: {
			value: null
		}
	}
});

export default Controller.extend(
	{
        defaults: {
			
        }
    }, {
		after_init: function(data) {
			var registration = $('#login'), html;

			if(!registration.length) {
				html = jadeTemplate.get('user/login/content');
			} else {
				html = registration.html();
			}

			can.view.mustache('signin', html);

			this.data = new ViewModel();

			$('#login').html(can.view('signin', this.data));
		},
		'.login_form .done click': function(el, ev) {
			ev.preventDefault();
			var data;

			ev.preventDefault();

			data = this.data;

			can.ajax({
				url: '/login?ajax=true',
				method: 'POST',
				data: data.serialize(),
				success: function(response) {
					data.attr({
						email: null,
						password: null
					});

					user.attr('user', response.message.user);

					console.log(user.attr('user'));

					can.route.attr({module: 'profile'});
				},
				error: function () {
					alert('Произошла ошибка. Пожалуйста, обратитесь к администратору');
				}
			});
		}
	}
);