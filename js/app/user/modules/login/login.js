import Controller from 'controller';
import appState from 'core/appState';
import _ from 'lodash';
import tooltip from 'tooltipster';

System.import('./js/plugins/tooltipster/css/tooltipster.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-agusha.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-error.css!');

var isError = function(map) {
	var errors = map.attr('errors');

	return _.every(errors.attr(), function(item, key, list) {
		if(item == null) {
			return item;
		}

		return true;
	});
}

var ViewModel = can.Map.extend({
	define: {
		errors: {
			value: new can.Map({
				email: false,
				password: false
			})
		},
		email: {
			value: null,
			set: function(value) {
				var regexp;
				regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

				if(!value) {
					return;
				}

				if(value.match(regexp)) {
					this.attr('errors.email', null);

					return value;
				}


				this.attr('errors.email', "Введите корректный E-mail");
				return value;
			}
		},
		password: {
			value: null,
			set: function(value) {
				var length = 6;

				if(!value) {
					return;
				}

				if(value.length >= length) {
					this.attr('errors.password', null);

					return value;
				}

				this.attr('errors.password', "Пароль должен быть не менее 6 символов");
				return value;
			}
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

			this.tooltip =  this.element.find('.reg_box');
			// this.bindError();
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
		},
		bindError: function() {
			var errors = this.data.attr('errors'), el,
				that = this;

			errors.delegate('*', 'set', function(options, val, oldVal, prop) {
				if(val == null) {
					$(that.tooltip).tooltipster('destroy');
					return;
				}

				console.log(val);
				
				that.tooltip.tooltipster({
					position: 'right',
	                theme: 'tooltipster-error',
	                trigger: 'hover'
				});

				that.tooltip.tooltipster('content', val);
				that.tooltip.tooltipster('show');

			});
		}
	}
);