import Controller from 'controller'
import appState from 'core/appState';
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';
import pagination from 'lib/helpers/pagination';
import select2 from 'select2';

export default Controller.extend({
	variables: function() {
		this.active = 'active';
		this.items_container = this.element.find('.items_container');
	},

	plugins: function() {
		this.select2();
	},

	select2: function() {
		var options = {
				width: 'off',
				minimumResultsForSearch: -1,
				formatResult: this.format
			},
			author_select = this.element.find('.author_select'),
			order_select = this.element.find('.order_select');

		author_select.select2(options);
		order_select.select2(options);
	},

	format: function(state) {
		var el = $(state.element),
			count = el.data('count'),
			html = '<div class="adorable_table news_select2_result">' +
						'<div class="adorable_cell">' +
							'<span>' + state.text + '</span>' +
							// (typeof(count) != 'undefined' ? '<div class="count">' + count + '</div>' : '') +
						'</div>' +
					'</div>';

		return html;
	},

	after_init: function(data) {
		this.articlesSource = data ? data.articles.documents : app.articles.documents;
		this.articlesNextId = data ? data.articles.nextAnchorId : app.articles.nextAnchorId;

		if (this.articlesSource.length < 24 || this.articlesNextId == 1 || !this.articlesNextId) {
			this.noMoreArts = true;
			this.element.find('.loadMore').hide()
		}

		var that = this,
			articles = encyclopediaHelpers.sortArticles(this.articlesSource, null),
			newsHtml;

		this.first_call = true;

		var ViewModel = can.Map.extend({
			articles: articles,
			filter: 0,
			sort: 'desc',
			module: 'news'
		});

		this.data = new ViewModel();

		var news_mustache = $('#news_mustache');

		if(!news_mustache.length) {
			newsHtml = jadeTemplate.get('user/news/news_mustache');
		} else {
			newsHtml = news_mustache.html();
		}

		can.view.mustache('news_view', newsHtml);

		this.items_container.html(can.view('news_view', this.data, encyclopediaHelpers));

		this.first_call = false;
		pagination.on(can.proxy(this.loadMore, this));
	},

	reRenderArticles: function () {
		if (this.data) {
			var articles = encyclopediaHelpers.sortArticles(this.getFilteredData(), this.data.attr('sort'));
			this.data.attr('articles', articles);
		}
	},

	getFilteredData: function () {
		var filter = this.data.attr('filter');

		switch (filter) {
			case 0:
				return this.articlesSource;
				break;
			case 'Статья от редакции': // Omited break
			case 'Статья от специалиста':
				return _.filter(this.articlesSource, function (article) {
					return article.type.name == filter;
				});
				break;
			case 'Тема недели':
				return _.filter(this.articlesSource, function (article) {
					return article.recommended;
				});
				break;
		}
	},

	'.order_select change': function (el) {
		var val = el.val();
		this.data.attr('sort', val === 'date' ? 'desc' : 'asc');
		this.reRenderArticles();
	},

	'.author_select change': function (el) {
		this.data.attr('filter', el.val());
		this.reRenderArticles();
	},

	// '.subscribeIt click': function () {
	// 	var self = this;
	// 	Sub.subscribe(this.data.attr('theme'), function () {
	// 		self.element.find('.subscribeIt').hide();
	// 		self.element.find('.unSubscribeIt').show();
	// 	});
	// },
	//
	// '.unSubscribeIt click': function () {
	// 	var self = this;
	// 	Sub.unsubscribe(this.data.attr('theme'), function () {
	// 		self.element.find('.unSubscribeIt').hide();
	// 		self.element.find('.subscribeIt').show();
	// 	});
	// },

	loadMore: function () {
		var self = this,
			articles = self.data.attr('articles');

		if (self.noMoreArts) {
			return;
		}

		can.ajax({
			url: '/news-list',
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

	destroy: function() {
		pagination.off()

		can.Control.prototype.destroy.call(this);
	}
});
