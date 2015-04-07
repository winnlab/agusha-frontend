import Controller from 'controller'

export default Controller.extend({}, {
	'.registration_form submit': function(el, ev) {
		ev.preventDefault();
	},
	
	'.invite_form submit': function(el, ev) {
		ev.preventDefault();
	}
});