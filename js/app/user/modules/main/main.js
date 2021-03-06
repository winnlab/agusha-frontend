import can from 'can/';
import Controller from 'controller';
import appState from 'core/appState';
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';
import pagination from 'lib/helpers/pagination';
import _ from 'lodash';
import 'select2';
import 'carousel';

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
			this.registration_block = this.element.find('.registration_block');

			this.carousel = this.element.find('#main_carousel');

			this.counter_block = this.element.find('.counter_block');
		},

		plugins: function() {
			this.init_carousel();
		},

		init_carousel: function() {
			this.carousel.carousel({
				interval: false
			});
			this.carousel.on('slide.bs.carousel', () => {
				this.registration_block.removeClass('animate').addClass('no-transition');
				setTimeout(() => {
					this.registration_block.removeClass('no-transition').addClass('animate');
				}, 4);
			});
		},

		initPlugins: function() {
			var self = this;
			this.select2();

			appState.delegate('subsChanged', 'set', function (el, newVal) {
				if (newVal) {
					self.updateSubscribe();
				}
			});

			appState.attr('user').user().bind('change', function (ev, attr, how, newVal, oldVal) {
				if (appState.attr('user') && appState.attr('user').user() && appState.attr('user').user()._id) {
					self.element.find('.carousel_container').hide();
					var username = appState.attr('user').user().attr('profile.first_name');
					self.element.find('.breadcrumbs span').html('/ ' + username)
					self.element.find('.username').html(username)
				} else {
					self.element.find('.carousel_container').show();
				}
			});

			can.bind.call(appState, "toggleWatch", can.proxy(this.toggleWatch, this))
		},

		toggleWatch: function (ev, id, doc) {

			var userId = appState.attr('user').user().attr('_id'),
				consIndex = _.findIndex(this.data.attr('feed'), { _id: id });

			if (consIndex === -1) {
				this.data.attr('feed').push(doc);
				this.feedSource.push(doc);
				return;
			} else {
				this.data.attr('feed').splice(consIndex, 1);
				this.feedSource.splice(_.findIndex(this.feedSource, { _id: id }), 1);
			}
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
			var self = this,
				auth = appState.attr('user').auth;

			this.isAuth(null, auth.attr('isAuth'));

			auth.delegate('isAuth', 'set', _.bind(this.isAuth, this));

			this.articlesSource = data ? data.articles.documents : app.articles.documents;
			this.articlesNextId = data ? data.articles.nextAnchorId : app.articles.nextAnchorId;
			this.themeSubs = data ? data.themeSubs : app.themeSubs
			this.consultations = data ? data.consultations : app.consultations;
			this.feedSource = ([]).concat(this.themeSubs, this.consultations);

			if (this.articlesSource.length < 24 || this.articlesNextId == 1 || !this.articlesNextId) {
				this.noMoreArts = true;
				this.element.find('.loadMore').hide();
			}

			var encyclopediaHtml,
				feedHtml,
				articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, true, true),
				feed = encyclopediaHelpers.sortArticles(this.feedSource, null, true, true);

			this.data = new can.Map({
				articles: articles,
				feed: feed,
				feedLength: this.feedSource.length,
				sort: 'desc',
				filter: 0,
				iconFilter: null,
				feedFilter: 0,
				module: 'main',
				themeSubs: data ? data.themeSubs.length : app.themeSubs.length,
				authorSubs: 0,
				consultations: data ? data.consultations.length : app.consultations.length
			});

			window.data = this.data

			var encyclopedia_mustache = $('#encyclopedia_mustache'),
				feed_mustache = $('#feed_mustache');

			if(!encyclopedia_mustache.length) {
				encyclopediaHtml = jadeTemplate.get('user/encyclopedia/encyclopedia_mustache');
			} else {
				encyclopediaHtml = encyclopedia_mustache.html();
			}
			if(!feed_mustache.length) {
				feedHtml = jadeTemplate.get('user/main/feed_mustache');
			} else {
				feedHtml = feed_mustache.html();
			}

			can.view.mustache('mainArticlesView', encyclopediaHtml);
			can.view.mustache('feedView', feedHtml);

			this.items_container.each(function () {
				$(this).html(can.view('mainArticlesView', self.data, encyclopediaHelpers));
			});

			this.feed_container.html(can.view('feedView', this.data, encyclopediaHelpers));
			this.initPlugins();
			// this.counter_mustache();
			this.icons = this.element.find('.icon');
		},

		// counter_mustache: function() {
			// if(!this.counter_block.length) {
				// return;
			// }

			// var	counter_mustache = $('#counter_mustache'),
				// html, ViewModel;

			// if(!counter_mustache.length) {
				// html = jadeTemplate.get('user/helpers/counter_mustache');
			// } else {
				// html = counter_mustache.html();
			// }

			// can.view.mustache('counter_mustache', html);

			// ViewModel = can.Map.extend({
				// define: {
					// duration: {
						// value: appState.attr('counter')
					// }
				// }
			// });

			// this.counter_block.html(can.view('counter_mustache', new ViewModel()));
		// },

		updateSubscribe: function () {
			var self = this;

			can.ajax({
				url: '/feed',
				method: 'GET'
			}).done(function (data) {
				self.themeSubs = data ? data.themeSubs : []
				self.consultations = data ? data.consultations : [];
				self.feedSource = ([]).concat(self.themeSubs, self.consultations);
				var data = self.getFilteredData(),
					feed = encyclopediaHelpers.sortArticles(data, self.data.attr('sort'), true, true);

				self.data.attr('feed', feed);
				self.data.attr('feedLength', self.feedSource.length);
				self.data.attr('themeSubs', self.themeSubs.length);
				self.data.attr('consultations', self.consultations.length);


				appState.attr('subsChanged', false);
			}).fail(function () {
				console.error(arguments);
			});
		},

		isAuth: function (el, isAuth) {
			pagination.off();
			var self = this;
			if (isAuth) {
				self.element.find('.mainModuleWrap').addClass('logedIn');
				self.bannerWrap.hide();
				self.element.find('.commonFeed').hide();
				self.element.find('.carousel_container').hide();
				self.userTitle.css('display', 'inline-block');
			} else {
				self.element.find('.mainModuleWrap').removeClass('logedIn');
				self.userTitle.hide();
				self.element.find('.commonFeed').show();
				self.element.find('.carousel_container').show();
				self.bannerWrap.show();
			}
			pagination.on(can.proxy(this.loadMore, this));
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
			if (this.data.attr('iconFilter') !== newFilter) {
				el.addClass('active');
			}

			data = _.filter(dataOrigin, function (item) {
				if (!filterIt){
					return true;
				}
				switch (filterIt) {
					case 'watchers':
						var userId = appState.attr('user').user().attr('_id');
						return !!(item.watchers && item.watchers.indexOf(userId) !== -1);
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

			if (val === 0) {
				this.data.attr('iconFilter', false);
			}

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

		loadMore: function () {
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
				_.each(data.documents, function (article) {
					self.articlesSource.push(article)
				});

				var sorted = encyclopediaHelpers.sortArticles(self.articlesSource, null, true, true);
				self.articlesNextId = data.nextAnchorId;

				can.batch.start();
				_.each(sorted, function (article, i) {
					if (!articles.attr(i)) {
						articles.push(article);
					}
				});
				can.batch.stop();

				if (data.documents.length < 24 || self.articlesNextId == 1 || !self.articlesNextId) {
					self.noMoreArts = true;
					$('.loadMore').hide();
				}
			});
		},

		'a.carousel-control click': function(el, ev) {
			ev.preventDefault();
		},

		'.carousel-control.left click': function() {
			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'MainCarousel', 'Left');
		},

		'.carousel-control.right click': function() {
			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'MainCarousel', 'Right');
		},

		'.registration_button click': function() {
			ga('set', 'page', decodeURI(document.location.href));
			ga('send', 'event', 'Registration', 'MainBanner');
		},

		destroy: function() {
			can.unbind.call(appState, "toggleWatch", can.proxy(this.toggleWatch, this));
			appState.attr('user').user().unbind('change');
			appState.undelegate('subsChanged', 'set');
			appState.attr('user').auth.undelegate('isAuth');
			pagination.off()

			can.Control.prototype.destroy.call(this);
		}
	}
);
