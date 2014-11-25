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
		variables: function() {
			this.reminder = 'reminder';
		},
		
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
		'.social .facebook click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/fb';
		},
		'.social .vkontakte click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/vk';
		},
		'.social .ok click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/ok';
		},
		'.login_form .done click': function(el, ev) {
			ev.preventDefault();
			var data;

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

					user.options.user.attr(response.message.user);

					user.auth.attr('isAuth', true)

					can.route.attr({module: 'profile'});
				},
				error: function () {
					alert('Произошла ошибка. Пожалуйста, обратитесь к администратору');
				}
			});
		},
		
		'.reminder_form .done click': function(el, ev) {
			ev.preventDefault();
		},
		
		'.forgot_btn click': function(el, ev) {
			ev.preventDefault();
			
			this.element.find('.reg_box').addClass(this.reminder);
		},
		
		'.close click': function(el, ev) {
			this.element.find('.reg_box').removeClass(this.reminder);
		}
	}
);