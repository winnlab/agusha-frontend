import Controller from 'controller'

import appState from 'core/appState';
import 'tooltipster';
import 'jquery-validation';

export default Controller.extend({}, {
	variables: function() {
		this.tooltip = this.element.find('.form_container');
		
		this.counter_block = this.element.find('.counter_block');
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
	},
	
	after_init: function() {
		this.counter_mustache();
	},
	
	counter_mustache: function() {
		var	counter_mustache = $('#counter_mustache'),
			html, ViewModel;
		
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
		
		this.counter_block.html(can.view('counter_mustache', this.data));
	},
	
	'.registration_form submit': function(el, ev) {
		ev.preventDefault();
		
		var	that = this;
		
		if (!el.valid()) {
			this.tooltip
				.tooltipster('content', "Форма заполнена неверно");

			this.tooltip.tooltipster('show');
			return;
		} else {
			this.tooltip.tooltipster('hide');
		}

		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'Registration', 'Usual');
		
		can.ajax({
			url: '/registration?ajax=true',
			method: 'POST',
			data: el.serialize(),
			success: function(data) {
				can.route.attr({module: 'registration', id: 'success'}, true);
			},
			error: function(resp) {
				that.tooltip.tooltipster('content', resp.responseJSON.err);
				that.tooltip.tooltipster('show', function() {
					setTimeout(function() {
						that.tooltip.tooltipster('hide');
					}, 5000);
				});
			}
		});
	},
	
	'.invite_form submit': function(el, ev) {
		ev.preventDefault();
	}
});