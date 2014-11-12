import Controller from 'controller';
import select2 from 'select2';
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
			this.feed_container = this.element.find('.feed_container');
		},

		initPlugins: function() {
			this.select2();
		},

		select2: function() {
			var options = {
					width: 'off',
					minimumResultsForSearch: -1,
					formatResult: this.format
				},
				author_select = this.element.find('.feed_select'),
				order_select = this.element.find('.order_select');

			author_select.select2(options);
			order_select.select2(options);
		},

		format: function(state) {
			var	el = $(state.element),
				count = el.data('count'),
				html = 	'<div class="adorable_table main_select2_result">' +
							'<div class="adorable_cell">' +
								'<span>' + state.text + '</span>' +
								(typeof(count) != 'undefined' ? '<div class="count">' + count + '</div>' : '') +
							'</div>' +
						'</div>';

			return html;
		},

		after_init: function(data) {
			var auth = appState.attr('user').auth;

			this.isAuth(null, auth.attr('isAuth'));

			auth.delegate('isAuth', 'set', can.proxy(this.isAuth, this));

			this.articlesSource = data ? data.articles : app.articles;
			this.themeSubs = data ? data.themeSubs : app.themeSubs
			this.consultations = data ? data.consultations : app.consultations;
			this.feedSource = ([]).concat(this.themeSubs, this.consultations);

			var encyclopediaHtml,
				feedHtml,
				articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true),
				feed = encyclopediaHelpers.sortArticles(this.feedSource, null, true, true);

			this.data = new can.Map({
				articles: articles,
				feed: feed,
				sort: 'desc',
				filter: 0,
				feedFilter: 0,
				module: 'main',
				themeSubs: data ? data.themeSubs.length : app.themeSubs.length,
				authorSubs: 0,
				consultations: data ? data.consultations.length : app.consultations.length
			});

			var encyclopedia_mustache = $('#encyclopedia_mustache'),
				feed_mustache = $('#feed_mustache');

			if(!encyclopedia_mustache.length) {
				encyclopediaHtml = jadeTemplate.get('user/encyclopedia/encyclopedia_mustache');
				feedHtml = jadeTemplate.get('user/main/feed_mustache');
			} else {
				encyclopediaHtml = encyclopedia_mustache.html();
				feedHtml = feed_mustache.html();
			}

			can.view.mustache('encyclopedia_view', encyclopediaHtml);
			can.view.mustache('feed_view', feedHtml);

			this.items_container.html(can.view('encyclopedia_view', this.data, encyclopediaHelpers));
			this.feed_container.html(can.view('feed_view', this.data, encyclopediaHelpers));

			this.initPlugins();
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
			this.reRenderFeed();
		},

		reRenderArticles: function () {
			if (this.data) {
				var articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true);
				this.data.attr('articles', articles);
			}
		},

		reRenderFeed: function () {
			if (this.data) {
				var data = this.getFilteredData(),
					feed = encyclopediaHelpers.sortArticles(data, this.data.attr('sort'), true, true);
				this.data.attr('feed', feed);
			}
		},

		'.order_select change': function (el) {
			var val = el.val();
			this.data.attr('sort', val === 'date' ? 'asc' : 'desc');
			this.reRenderFeed();
		},

		'.feed_select change': function (el) {
			var val = +el.val();
			this.data.attr('feedFilter', val);
			this.reRenderFeed();
		},

		getFilteredData: function () {
			var val = this.data.attr('feedFilter');
			if (val === 0) {
				return this.feedSource;
			}
			if (val === 1) {
				return this.themeSubs;
			}
			if (val === 2) {
				return [];
			}
			if (val === 3) {
				return this.consultations;
			}
		}
    }
);
