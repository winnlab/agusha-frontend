import Controller from 'controller'
import appState from 'core/appState';

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
					var user = appState.attr('user');

					data.attr({
						email: null,
						password: null
					});

					if(!response.message || !response.message.user) {
						return alert('Произошла ошибка при авторизации');
					}

					user.attr('user', response.message.user);

					can.route.attr({module: 'profile'});
				},
				error: function () {
					alert('Произошла ошибка. Пожалуйста, обратитесь к администратору');
				}
			});
		}
	}
);