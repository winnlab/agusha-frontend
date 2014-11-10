import can from 'can/';
import appState from 'core/appState'

var RightMenu = can.Control.extend({
	init: function(el) {
		this.data = {
			user: appState.attr('user').user(),
			auth: appState.attr('user').auth
		};

		this.initRight();
		this.initRightSmall();
	},
	'.settings click': function(el, ev) {
		ev.stopPropagation()
		can.route.attr({module: 'profile'})
	},
	initRight: function () {
		var html;

		html = jadeTemplate.get('user/helpers/menus/right_menu_mustache');

		can.view.mustache('RightMenu', html);

		$('#right_menu').html(can.view('RightMenu', this.data));
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
