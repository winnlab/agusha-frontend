import Controller from 'controller';
import select2 from 'select2';
import appState from 'core/appState';
import LoginForm from 'js/app/user/modules/login/login'
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';
import 'carousel'

var ViewModel = can.Map.extend({
	define: {
		email: {
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
		variables: function() {
			this.classname = 'active';

			this.tab_selectors = this.element.find('.tab_selector');
			this.bannerWrap = this.element.find('.bannerWrap');
			this.userTitle = this.element.find('.userTitle');
			this.items_container = this.element.find('.items_container');
			this.feed_container = this.element.find('.feed_container');
			this.icons = this.element.find('.icon');

			this.carousel = this.element.find('#main_carousel');
		},

		plugins: function() {
			this.init_carousel();
		},

		init_carousel: function() {
			this.carousel.carousel();
		},

		initPlugins: function() {
			var self = this;
			this.select2();

			appState.delegate('subsChanged', 'set', function (el, newVal) {
				if (newVal) {
					self.updateSubscribe();
				}
			});
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

			this.articlesSource = data ? data.articles.documents : app.articles.documents;
			this.articlesNextId = data ? data.articles.nextAnchorId : app.articles.nextAnchorId;
			this.themeSubs = data ? data.themeSubs : app.themeSubs
			this.consultations = data ? data.consultations : app.consultations;
			this.feedSource = ([]).concat(this.themeSubs, this.consultations);

			if (this.articlesSource.length < 24 || self.articlesNextId == 1 || !self.articlesNextId) {
				this.noMoreArts = true;
				this.element.find('.loadMore').hide();
			}

			var encyclopediaHtml,
				feedHtml,
				loginHtml,
				articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true),
				feed = encyclopediaHelpers.sortArticles(this.feedSource, null, true, true);

			this.data = new can.Map({
				articles: articles,
				feed: feed,
				sort: 'desc',
				filter: 0,
				iconFilter: null,
				feedFilter: 0,
				module: 'main',
				themeSubs: data ? data.themeSubs.length : app.themeSubs.length,
				authorSubs: 0,
				consultations: data ? data.consultations.length : app.consultations.length,
				loginForm: new ViewModel()
			});

			var encyclopedia_mustache = $('#encyclopedia_mustache'),
				feed_mustache = $('#feed_mustache'),
				loginForm = $('.reg_box');

			if(!encyclopedia_mustache.length) {
				encyclopediaHtml = jadeTemplate.get('user/encyclopedia/encyclopedia_mustache');
				feedHtml = jadeTemplate.get('user/main/feed_mustache');
			} else {
				encyclopediaHtml = encyclopedia_mustache.html();
				feedHtml = feed_mustache.html();
			}


			loginHtml = loginForm.html();

			can.view.mustache('mainArticlesView', encyclopediaHtml);
			can.view.mustache('feedView', feedHtml);
			can.view.mustache('logIn', loginHtml);

			this.items_container.html(can.view('mainArticlesView', this.data, encyclopediaHelpers));
			this.feed_container.html(can.view('feedView', this.data, encyclopediaHelpers));
			loginForm.html(can.view('logIn', this.data.loginForm));

			this.initPlugins();
		},

		updateSubscribe: function () {
			var self = this;

			can.ajax({
				url: '/feed',
				method: 'GET'
			}).done(function (data) {
				self.themeSubs = data ? data.themeSubs : app.themeSubs
				self.consultations = data ? data.consultations : app.consultations;
				self.feedSource = ([]).concat(self.themeSubs, self.consultations);
				var data = self.getFilteredData(),
					feed = encyclopediaHelpers.sortArticles(data, self.data.attr('sort'), true, true);
				self.data.attr('feed', feed);
				appState.attr('subsChanged', false);
			}).fail(function () {
				console.error(arguments);
			});
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

		'.login_form .done click': function(el, ev) {
			var data;
			ev.preventDefault();

			data = this.data.loginForm;

			can.ajax({
				url: '/login?ajax=true',
				method: 'POST',
				data: data.serialize(),
				success: function(response) {
					var user = appState.attr('user');

					data.attr({
						email: null,
						password: null
					});

					if(!response.message || !response.message.user) {
						return alert('Произошла ошибка при авторизации');
					}

					user.options.user.attr(response.message.user);

					user.auth.attr('isAuth', true)

					can.route.attr({module: 'profile'});
				},
				error: function (xhr, type, resp) {

				}
			});
		},
		isAuth: function (el, isAuth) {
			var self = this;
			if (isAuth) {
				self.element.find('.mainModuleWrap').addClass('logedIn');
				self.bannerWrap.hide();
				self.element.find('.commonFeed').hide();
				self.userTitle.css('display', 'inline-block');
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

		'.icon click': function (el) {
			var oldFilter = this.data.attr('iconFilter'),
				newFilter = el.data('filter'),
				dataOrigin = this.getFilteredData(),
				filterIt = newFilter == oldFilter ? false : newFilter,
				data,
				feed;

			this.icons.removeClass('active');
			el.addClass('active');

			data = _.filter(dataOrigin, function (item) {
				if (!filterIt){
					return true;
				}
				switch (filterIt) {
					case 'watchers':
						return !!(item.watchers && item.watchers.length);
						break;
					case 'recommended':
						return !!item.recommended;
						break;
					case 'spec':
						return !!_.find(item.answer, function (answer) {
							return !!answer.specialist;
						});
						break;
				}
				return false;
			});
			this.data.attr('iconFilter', newFilter);
			feed = encyclopediaHelpers.sortArticles(data, this.data.attr('sort'), true, true);
			this.data.attr('feed', feed);
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
		},

		'.loadMore img click': function (el) {
			var self = this,
				articles = self.data.attr('articles');

			if (self.noMoreArts) {
				return;
			}

			can.ajax({
				url: '/articles',
				method: 'get',
				dataType: 'json',
				data: {
					lastId: self.articlesNextId
				}
			}).done(function (data) {
				var sorted = encyclopediaHelpers.sortArticles(data.documents, null, false, true);
				self.articlesNextId = data.nextAnchorId;

				can.batch.start();
				_.each(sorted, function (article) {
					articles.push(article);
				});
				can.batch.stop();

				if (data.documents.length < 24 || self.articlesNextId == 1 || !self.articlesNextId) {
					self.noMoreArts = true;
					el.parent().hide();
				}
			});
		},

		'a.carousel-control click': function(el, ev) {
			ev.preventDefault();
		}
    }
);
