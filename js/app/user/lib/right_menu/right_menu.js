import can from 'can/';
import appState from 'core/appState';
import knob from 'knob';

var RightMenu = can.Control.extend({
	init: function(el) {
		this.data = appState.attr('user').user()

		this.data.attr('auth', appState.attr('user').auth);

		this.initRight();
		this.initRightSmall();
		this.bindFilling();
	},
	'.settings click': function(el, ev) {
		ev.stopPropagation();
		can.route.attr({module: 'profile'}, true);
	},
	bindFilling: function() {
		var user = appState.attr('user').options.user;

		this.setFilling(user, user.attr('profile.filling'));

		user.delegate('profile.filling', 'set', can.proxy(this.setFilling, this));
	},
	setFilling: function(el, filling) {
		$('input.knob').val(filling).trigger('change');
	},
	initRight: function () {
		var html;

		html = jadeTemplate.get('user/helpers/menus/right_menu_mustache');

		can.view.mustache('RightMenu', html);

		$('#right_menu').html(can.view('RightMenu', this.data));
		$("input.knob").knob({
			bgColor: '#2998cc'
		});
	},
	initRightSmall: function() {
		var html_small,

		html_small = jadeTemplate.get('user/helpers/menus/right_menu_small_mustache');

		can.view.mustache('RightMenuSmall', html_small);

		$('#right_menu_small').html(can.view('RightMenuSmall', this.data))
	}
});

var InstanceMenu = new RightMenu('#right_menu');

export default InstanceMenu
