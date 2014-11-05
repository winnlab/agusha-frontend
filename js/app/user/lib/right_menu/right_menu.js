import can from 'can/';
import appState from 'core/appState'

var RightMenu = can.Map.extend({
	init: function() {
		var user = appState.attr('user');
		this.data = user;

		this.initRight();
		this.initRightSmall();
	},
	initRight: function () {
		var html;

		html = jadeTemplate.get('user/helpers/menus/right_menu_mustache');

		can.view.mustache('RightMenu', html);

		$('#right_menu .subToppper').html(can.view('RightMenu', this.data));

	},
	initRightSmall: function() {
		var html_small,

		html_small = jadeTemplate.get('user/helpers/menus/right_menu_small_mustache');

		can.view.mustache('RightMenuSmall', html_small);

		$('#right_menu_small .topper .subTopper').html(can.view('RightMenuSmall', this.data))
	}
});

var InstanceMenu = new RightMenu();

export default InstanceMenu
