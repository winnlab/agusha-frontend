import Controller from 'controller';
import appState from 'core/appState';
import _ from 'lodash'; 
import 'tooltipster';
import 'jquery-validation';
import 'js/plugins/tooltipster/css/tooltipster.css!';
import 'js/plugins/tooltipster/css/themes/tooltipster-agusha.css!';
import 'js/plugins/tooltipster/css/themes/tooltipster-error.css!';

var ViewModel = can.Map.extend({
	define: {
		email: {
			value: null
		},
		password: {
			value: null
		},
		restoreEmail: {
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

									setTimeout(function() {
										that.tooltip
											.tooltipster('hide');
									}, 300);
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
		'.social .odnoklasniki click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/ok';
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
				data: form.serialize(),
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

							that.tooltip
								.tooltipster('show', function() {
									setTimeout(function() {
										that.tooltip
											.tooltipster('hide');
									}, 300);
								});
						
						return;
					}
					
					form.find('input').val('');
					
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

					that.tooltip.tooltipster('show', function() {
						setTimeout(function() {
							that.tooltip
								.tooltipster('hide');
						}, 2000);
					});
				}
			});
		},
		
		'.reminder_form .done click': function(el, ev) {
			ev.preventDefault();

			var form = this.element.find('.reminder_form'), that = this;

			if (!form.valid()) {
				this.tooltip
					.tooltipster('content', "Форма заполнена не верно");

				this.tooltip.tooltipster('show');
				return;
			} else {
				this.tooltip.tooltipster('hide');
			}

			can.ajax({
				url: '/login/restore?ajax=true',
				method: 'POST',
				data: {
					email: this.data.attr('restoreEmail')
				},
				success: function(response) {
					if(!response.message) {
						that.tooltip
							.tooltipster(
								'content',
								"Произошла ошибка. Обратитесь к администратору.");

						that.tooltip
							.tooltipster('show');
						
						return;
					}

					that.tooltip
						.tooltipster('hide');

					that.tooltip
						.tooltipster(
							'content',
							"Новый пароль отправлен Вам на почту");

					that.tooltip
						.tooltipster('show', function() {
							setTimeout(function() {
								that.tooltip
									.tooltipster('hide');
							}, 2000);
						});
				},
				error: function() {
					that.tooltip
						.tooltipster(
							'content',
							"Произошла ошибка. Обратитесь к администратору.");

					that.tooltip.tooltipster('show', function() {
						setTimeout(function() {
							that.tooltip
								.tooltipster('hide');
						}, 2000);
					})
				}
			});
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