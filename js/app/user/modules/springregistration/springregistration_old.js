import Controller from 'controller'

import appState from 'core/appState';
import 'tooltipster';
import 'jquery-validation';
import 'swal'

export default Controller.extend({}, {
	variables: function() {
		this.tooltip = this.element.find('.form_container');
		
		this.counter_block = this.element.find('.counter_block');
		
		this.success_invite = this.element.find('.success_invite');
		
		this.active = 'active';
	},
	
	plugins: function() {
		var that = this,
			isOpenedError = false;
		
		this.tooltip.tooltipster({
			position: 'right',
			theme: 'tooltipster-error',
			trigger: 'custom'
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
									that.tooltip.tooltipster('disable');
								}, 5000);
							});
					}
				} else {
					if(isOpenedError) {
						that.tooltip
							.tooltipster('hide', function() {
								isOpenedError = false;

								setTimeout(function() {
									that.tooltip.tooltipster('hide');
								}, 5000);
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
		
		this.element.find('.registration_form').validate({
			rules: {
				firstName: {
					minlength: 3,
					required: true
				},
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
				firstName: {
					minlength: "Имя должно быть человеческим",
					required: "Имя должно быть"
				},
				email: {
					email: "Почта введена неверно",
					required: "Почта должна быть"
				},
				password: {
					minlength: "Пароль должен быть не менее 6 символов",
					required: "Пароль должен быть"
				}
			}
		});
		
		this.element.find('.invite_form').validate({
			rules: {
				firstName: {
					minlength: 3,
					required: true
				},
				email: {
					email: true,
					required: true
				}
			},
			messages: {
				firstName: {
					minlength: "Имя должно быть человеческим",
					required: "Имя должно быть"
				},
				email: {
					email: "Почта введена неверно",
					required: "Почта должна быть"
				}
			}
		});
	},
	
	after_init: function() {
		this.counter_mustache();
		
		if(this.options.entity_id) {
			swal('Вы успешно зарегистрировались', 'Мы отправили письмо-подтверждение на ваш e-mail', 'success');
		}
	},
	
	counter_mustache: function() {
		var	counter_mustache = $('#counter_mustache'),
			html, ViewModel, i, counter_block;
		
		if(!counter_mustache.length) {
			html = jadeTemplate.get('user/helpers/counter_mustache');
		} else {
			html = counter_mustache.html();
		}
		
		can.view.mustache('counter_mustache', html);
		
		ViewModel = can.Map.extend({
			define: {
				duration: {
					value: appState.attr('counter')
				}
			}
		});
		
		this.data = new ViewModel();
		
		for(i = this.counter_block.length; i--;) {
			counter_block = $(this.counter_block[i]);
			counter_block.html(can.view('counter_mustache', this.data));
		}
		
	},
	
	'.registration_form submit': function(el, ev) {
		ev.preventDefault();
		
		var	that = this;
		
		if(!el.valid()) {
			this.tooltip
				.tooltipster('content', "Форма заполнена неверно");
			
			this.tooltip.tooltipster('show');
			return;
		} else {
			this.tooltip.tooltipster('hide');
		}

		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'SpringRegistrationSubmit', 'Submit');
		
		can.ajax({
			url: '/registration?ajax=true',
			method: 'POST',
			data: el.serialize(),
			success: function(data) {
				el.find('input').val('');
				can.route.attr({module: 'springregistration', id: 'success'}, true);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				var error = jqXHR.responseJSON.err || errorThrown;
				
				swal({
					title: '',
					text: error,
					type: 'error',
					showCancelButton: true,
					cancelButtonText: "Войти"
				},
				function(isConfirm){
					if(!isConfirm) {
						can.route.attr({module: 'login'}, true);
					}
				});
			}
		});
	},
	
	'.invite_form submit': function(el, ev) {
		ev.preventDefault();
		
		var	that = this;
		
		if(!el.valid()) {
			return;
		}
		
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'SpringRegistrationInvite', 'Submit');
		
		can.ajax({
			url: '/registration/spring_invite',
			method: 'POST',
			data: el.serialize(),
			success: function(data) {
				if(data.err) {
					swal('', data.err, "error");
					return;
				}
				
				that.success_invite.addClass(that.active);
				el.find('input').val('');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				var error = jqXHR.responseJSON.err || errorThrown;
				swal('', error, 'error');
			}
		});
	},
	
	'.success_invite .close click': function() {
		this.success_invite.removeClass(this.active);
	}
});