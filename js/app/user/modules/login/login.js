import Controller from 'controller';
import appState from 'core/appState';
import _ from 'lodash';

import validator from 'jquery-validation';
import tooltip from 'tooltipster';

System.import('./js/plugins/tooltipster/css/tooltipster.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-agusha.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-error.css!');

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
			var registration = $('#login'), html, that = this,
				isOpenedError, auth;

			if(!registration.length) {
				html = jadeTemplate.get('user/login/content');
			} else {
				html = registration.html();
			}

			can.view.mustache('signin', html);

			this.data = new ViewModel();

            auth = appState.attr('user').auth;

            if(auth && auth.isAuth) {
                can.route.attr({module: 'profile'});
                return;
            }

			$('#login').html(can.view('signin', this.data));

			this.tooltip = this.element.find('.reg_box');
			this.tooltip.tooltipster({
				position: 'right',
                theme: 'tooltipster-error',
                trigger: 'hover'
			});

			jQuery.validator.setDefaults({
				errorPlacement: function() {},
				showErrors: function(errors, errorsArr) {
					var tooltiperror;

					if(errorsArr.length) {
						that.tooltip
							.tooltipster('content', errorsArr[0].message);

						if(!isOpenedError) {
							that.tooltip
								.tooltipster('show', function() {
									isOpenedError = true;
								});
						}
					} else {
						if(isOpenedError) {
							that.tooltip
								.tooltipster('hide', function() {
									isOpenedError = false;
								});
						}
					}

					this.defaultShowErrors();
				},
				highlight: function(element, errorClass, validClass) {
					$(element).addClass(errorClass).removeClass(validClass);
			    },
			    unhighlight: function(element, errorClass, validClass) {
			        $(element).removeClass(errorClass).addClass(validClass);
			    }
			});

			this.element.find('.login_form').validate({
				rules: {
					email: {
						email: true,
						required: true
					},
					password: {
						minlength: 6,
						required: true
					}
				},
				messages: {
					email: {
						email: "Почта введена неверно",
						required: "Почта должна быть"
					},
					password: {
						minlength: "Пароль должен быть не менее 6 символо",
						required: "Пароль должен быть"
					}
				}
			});

			this.element.find('.reminder_form').validate({
				rules: {
					email: {
						email: true,
						required: true
					}
				},
				messages: {
					email: {
						email: "Почта введена неверно",
						required: "Почта должна быть"
					}
				}
			});
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
			var data, form = el.parents('form'), that = this;
			ev.preventDefault();

			if (!form.valid()) {
				this.tooltip
					.tooltipster('content', "Форма заполнена не верно");

				this.tooltip.tooltipster('show');
				return;
			} else {
				this.tooltip.tooltipster('hide');
			}

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

						that.tooltip
							.tooltipster(
								'content',
								"Произошла ошибка. Обратитесь к администратору.");
						
						return;
					}

					user.options.user.attr(response.message.user);

					user.auth.attr('isAuth', true)

					can.route.attr({module: 'profile'});
				},
				error: function (resp) {
					var err = "Произошла неведомая ошибка";

					if(resp && resp.responseJSON) {
						if( resp.responseJSON.err) 
							err = resp.responseJSON.err.message;
					}

					that.tooltip
							.tooltipster(
								'content',
								err);
					that.tooltip.tooltipster('show')
				}
			});
		},
		
		'.reminder_form .done click': function(el, ev) {
			ev.preventDefault();
		},
		
		'.forgot_btn click': function(el, ev) {
			ev.preventDefault();
			
			this.element.find('.reg_box').toggleClass(this.reminder);
		},
		'.close click': function(el, ev) {
			this.element.find('.reg_box').removeClass(this.reminder);
		}
	}
);