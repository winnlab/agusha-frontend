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
		'.registration_form .done click': function(el, ev) {
			var user;

			ev.preventDefault();

			user = this.data;

			can.ajax({
				url: '/registration?ajax=true',
				method: 'POST',
				data: user.serialize(),
				success: function(data) {
					alert('Спасибо за регистрацию');

					user.attr({
						email: null,
						firstname: null,
						lastname: null,
						password: null
					});
				},
				error: function () {
					alert('Произошла ошибка. Пожалуйста, обратитесь к администратору');
				}
			});
		}
    }
);