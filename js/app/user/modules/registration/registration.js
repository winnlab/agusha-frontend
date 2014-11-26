import Controller from 'controller';
import _ from 'lodash';
import tooltip from 'tooltipster';

System.import('./js/plugins/tooltipster/css/tooltipster.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-agusha.css!');
System.import('./js/plugins/tooltipster/css/themes/tooltipster-error.css!');


var isError = function(map) {
	var errors = map.attr('errors');

	return _.every(errors.attr(), function(item, key, list) {
		if(item == null) {
			return false;
		}

		return true;
	});
}

var ViewModel = can.Map.extend({
	define: {
		errors: {
			value: new can.Map({
				email: null,
				firstname: null,
				password: null
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
		firstName: {
			value: null,
			set: function(value) {
				var length = 3;

				if(!value) {
					return;
				}

				if(value.length >= 3) {
					this.attr('errors.firstname', null);

					return value;
				}

				this.attr('errors.firstName', "Имя должно быть человеческое");
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

var showError = function () {
	var message = this.element.find('.message');

	message.css('display', 'block');
}

var hideError = function () {
	var message = this.element.find('.message');

	message.css('display', 'none');
}

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
			var registration = $('#registration'), html;

			if(!registration.length) {
				html = jadeTemplate.get('user/registration/content');
			} else {
				html = registration.html();
			}

			can.view.mustache('reg', html);

			this.data = new ViewModel();

			$('#registration').html(can.view('reg', this.data));

			this.tooltip = this.element.find('.reg_box');

			// this.bindError();
		},

		'.social .facebook click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/fb';
		},
		'.social .vkontakte click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/vk';
		},
		'.social .ok click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/registration/ok';
		},
		
		'.registration_form .done click': function(el, ev) {
			var user, that = this, isErr;

			ev.preventDefault();
			hideError.call(that);

			user = this.data;

			// isErr = isError(user);

			// if(isErr) {
			// 	showError.call(that);
			// 	return;
			// }

			can.ajax({
				url: '/registration?ajax=true',
				method: 'POST',
				data: user.serialize(),
				success: function(data) {
					user.attr({
						email: null,
						firstname: null,
						lastname: null,
						password: null
					});

					showSuccessmessgae.call(that);
				},
				error: function () {
					// showError.call(that);
				}
			});
		},
		bindError: function() {
			var errors = this.data.attr('errors'), el,
				that = this;

			// errors.delegate('*', 'set', function(options, val, oldVal, prop) {
			// 	if(val == null) {
			// 		$(that.tooltip).tooltipster('destroy');
			// 		return;
			// 	}
				
			// 	that.tooltip.tooltipster({
			// 		position: 'right',
	  //               theme: 'tooltipster-error',
	  //               trigger: 'hover'
			// 	});

			// 	that.tooltip.tooltipster('content', val);
			// 	that.tooltip.tooltipster('show');

			// });
		}
    }
);