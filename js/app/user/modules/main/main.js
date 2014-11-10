import Controller from 'controller';
import appState from 'core/appState';
import LoginForm from 'js/app/user/modules/login/login'

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.classname = 'active';

			this.tab_selectors = this.element.find('.tab_selector');
			this.bannerWrap = this.element.find('.bannerWrap');
			this.userTitle = this.element.find('.userTitle');
		},

		after_init: function(data) {
			var auth = appState.attr('user').auth;

			this.isAuth(null, auth.attr('isAuth'));

			auth.delegate('isAuth', 'set', can.proxy(this.isAuth, this));
		},

		'.social .facebook click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/fb';
		},
		'.social .vkontakte click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/vk';
		},
		'.social .ok click': function(el, ev) {
			ev.preventDefault();
			window.location.href = '/login/ok';
		},
		isAuth: function (el, isAuth) {
			var self = this;

			if (isAuth) {
				self.element.addClass('logedIn');
				self.bannerWrap.hide();
				self.userTitle.show();
			} else {
				self.element.removeClass('logedIn');
				self.userTitle.hide();
				self.bannerWrap.show();
			}
		},

		'.tab click': function(el) {
			var tab = el.data('tab');

			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		}
    }
);
