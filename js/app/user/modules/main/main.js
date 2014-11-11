import Controller from 'controller';
import appState from 'core/appState';
import LoginForm from 'js/app/user/modules/login/login'
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';

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
			this.items_container = this.element.find('.items_container');
		},

		after_init: function(data) {
			var auth = appState.attr('user').auth;

			this.isAuth(null, auth.attr('isAuth'));

			auth.delegate('isAuth', 'set', can.proxy(this.isAuth, this));

			this.articlesSource = data ? data.articles : app.articles;

			var encyclopediaHtml,
				articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true);

			this.data = new can.Map({
				articles: articles,
				filter: 0
			});

			var encyclopedia_mustache = $('#encyclopedia_mustache');

			if(!encyclopedia_mustache.length) {
				encyclopediaHtml = jadeTemplate.get('user/encyclopedia/encyclopedia_mustache');
			} else {
				encyclopediaHtml = encyclopedia_mustache.html();
			}

			can.view.mustache('encyclopedia_view', encyclopediaHtml);

			this.items_container.html(can.view('encyclopedia_view', this.data, encyclopediaHelpers));
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
				self.element.find('.mainModuleWrap').addClass('logedIn');
				self.bannerWrap.hide();
				self.element.find('.commonFeed').hide();
				self.userTitle.show();
			} else {
				self.element.find('.mainModuleWrap').removeClass('logedIn');
				self.userTitle.hide();
				self.element.find('.commonFeed').show();
				self.bannerWrap.show();
			}
		},

		'.tab click': function(el) {
			var tab = el.data('tab');

			this.tab_selectors.removeClass(this.classname);
			this.tab_selectors.filter('.' + tab).addClass(this.classname);
		},

		'{window} resize': function () {
			this.reRenderArticles();
		},

		reRenderArticles: function () {
			if (this.data) {
				var articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true);
				this.data.attr('articles', articles);
			}
		}
    }
);
