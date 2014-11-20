import Controller from 'controller'
import moment from 'moment';
import 'js/plugins/moment/locale/ru';

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.classname = 'active';
			this.base_url = window.location.protocol + '//' + window.location.host;

			this.tab_selectors = this.element.find('.tab_selector');

			this.tab_blocks = this.element.find('.tab_block');
		},

		plugins: function() {

		},

		successRequest: function (data) {
			moment.locale('ru');

			window['moment'] = moment;

			if (data && data.data && data.data.user) {
				data.data.user.lvl = function () {
					var self = data.data.user;
					switch (false) {
						case !(self.points < 200):
							return 'Новичек';
						case !(self.points < 400):
							return 'Ученик';
						case !(self.points < 600):
							return 'Знаток';
						case !(self.points < 800):
							return 'Эксперт';
						default:
							return 'Профи';
					}
				}
			}
			Controller.prototype.successRequest.call(this, data);
		},

		after_init: function(data) {
			this.tab_blocks.filter(':not(.active)').find('.text').hide();
		},

		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				text = el.next(),
				func = 'slideDown';

			if(tab_block.hasClass(this.classname)) {
				func = 'slideUp';
			}

			text.stop(true, false)[func](300);

			tab_block.toggleClass(this.classname);
		},

		'.tab click': function(el) {
			var tab = el.data('tab');

			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		}
	}
);
