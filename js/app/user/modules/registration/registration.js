import Controller from 'controller'

var ViewModel = can.Map.extend({
	define: {
		email: {
			value: null
		},
		firstname: {
			value: null
		},
		lastname: {
			value: null
		},
		password: {
			value: null
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
			var user,
				that = this;

			ev.preventDefault();
			hideError.call(that);

			user = this.data;

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
					showError.call(that);
					// alert('Произошла ошибка. Пожалуйста, обратитесь к администратору');
				}
			});
		}
    }
);