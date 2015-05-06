import Controller from 'controller';
import _ from 'lodash';
import appState from 'core/appState';

import 'tooltipster';
import 'jquery-validation';

// var ViewModel = can.Map.extend({
	// define: {
		// errors: {
			// value: new can.Map({
				// email: null,
				// firstname: null,
				// password: null
			// })
		// },
		// email: {
			// value: null,
		// },
		// firstName: {
			// value: null,
		// },
		// password: {
			// value: null
		// }
	// }
// });

var showSuccessmessgae = function () {
	var registration_inline = this.element.find('.registration_inline'),
		reg_box_inside = this.element.find('.reg_box_inside'),
		registered = reg_box_inside.filter('.registered'),
		not_registered = reg_box_inside.filter('.not_registered'),
		active = 'active',
		bounce = 'bounce';

	registration_inline.addClass('drop');

	setTimeout(function(){
		registration_inline.addClass(bounce);
	}, 1000);

	setTimeout(function(){
		registration_inline.removeClass(bounce);
	}, 1200);

	setTimeout(function(){
		not_registered.removeClass(active);
		registered.addClass(active);
	}, 1400);
}

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		after_init: function(data) {
			// var registration = $('#registration'), html,
			var	that = this, isOpenedError = false, auth, isAuth;

			// if(!registration.length) {
				// html = jadeTemplate.get('user/registration/content');
			// } else {
				// html = registration.html();
			// }

			// can.view.mustache('reg', html);

			// this.data = new ViewModel();

			auth = appState.attr('user').auth;

			if(auth && auth.isAuth) {
				can.route.attr({module: 'profile'});
				return;
			}

			// $('#registration').html(can.view('reg', this.data));

			this.tooltip = this.element.find('.reg_box');
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
										that.tooltip.tooltipster('hide');
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

		'.social .facebook click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/fb';
		},
		'.social .vkontakte click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/vk';
		},
		'.social .odnoklasniki click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/ok';
		},

		'.registration_form submit': function(el, ev) {
			ev.preventDefault();

			// var user,
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

			// user = this.data;

			can.ajax({
				url: '/registration?ajax=true',
				method: 'POST',
				data: el.serialize(),
				success: function(data) {
					// user.attr({
						// email: null,
						// firstName: null,
						// password: null
					// });

					showSuccessmessgae.call(that);

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
		}
	}
);
