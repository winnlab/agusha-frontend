import Controller from 'controller';
import Sub from 'lib/subscribe/';

// import googlemaps_api from 'googlemaps_api'
// import googlemaps_main from 'googlemaps_main'

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.classname = 'active';

			this.tab_selectors = this.element.find('.tab_selector');

			this.tab_blocks = this.element.find('.tab_block');
		},

		plugins: function() {

		},

		after_init: function(data) {

		},

		'.tab click': function(el) {
			var tab = el.data('tab');

			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		},

		'.close click': function (el) {
			var theme_id = el.data('theme_id');
			Sub.unsubscribe(theme_id, function () {
				el.parents('.tab_block').remove();
			});
		}

	}
);
