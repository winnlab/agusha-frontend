import Controller from 'controller';
import select2 from 'select2';
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';
import appState from 'core/appState';
import 'custom-scrollbar';

var Theme = can.Model.extend({
	findAll: 'POST /themes/findAll',
	parseModels: function(data) {
		return data.data.themes;
	}
}, {});

var Article = can.Model.extend({
	findAll: 'POST /articles/findAll',
	parseModels: function(data) {
		return data.data.articles;
	}
}, {});

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.active = 'active';

			this.age_blocks = this.element.find('.age_block');

			this.theme_filter = this.element.find('.theme_filter');
			this.bookshelf = this.theme_filter.find('.bookshelf');

			this.filter = this.element.find('.filter'),

			this.items_container = this.element.find('.items_container');
		},

		plugins: function() {
			this.setFilterHeight();
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
			var	el = $(state.element),
				count = el.data('count'),
				html = 	'<div class="adorable_table encyclopedia_select2_result">' +
							'<div class="adorable_cell">' +
								'<span>' + state.text + '</span>' +
								(typeof(count) != 'undefined' ? '<div class="count">' + count + '</div>' : '') +
							'</div>' +
						'</div>';

			return html;
		},

		setFilterHeight: function () {
			var viewportHeight = appState.attr('viewport').getViewportHeight(),
				ageFilter = this.element.find('.age_filter'),
				ageFilterHeight = ageFilter.height();

			if (viewportHeight >= ageFilterHeight) {
				this.filter.height(this.filterHeight = viewportHeight);
			} else {
				this.filter.height(this.filterHeight = ageFilterHeight);
			}

		},

		'{window} resize': function () {
			this.setFilterHeight();
			this.setScroll();
		},

		after_init: function(data) {
			var that = this,
				encyclopediaHtml,
				html;

			this.first_call = true;

			var ViewModel = can.Map.extend({
				define: {
					age: {
						value: function () {
							var age = can.route.attr('id');
							return age ? age : null
						}
					},
					theme: {
						value: function () {
							var age = can.route.attr('param2');
							return age ? age : null
						}
					},
					themes: {
						value: data ? new can.List(data.themes) : new can.List(app.themes),
						get: function(currentValue) {
							var options = {
								age: this.attr('age')
							};
							if(!that.first_call) {
								currentValue.replace(Theme.findAll(options));
							}
							return currentValue;
						}
					}
				},
				articles: data ? data.articles : app.articles,
				sort: 'asc',
				filter: 0
			});

			this.data = new ViewModel();

			var bookshelf_mustache = $('#bookshelf_mustache'),
				encyclopedia_mustache = $('#encyclopedia_mustache');

			if(!bookshelf_mustache.length) {
				html = jadeTemplate.get('user/encyclopedia/bookshelf_mustache');
				encyclopediaHtml = jadeTemplate.get('user/encyclopedia/bookshelf_mustache');
			} else {
				html = bookshelf_mustache.html();
				encyclopediaHtml = encyclopedia_mustache.html();
			}

			can.view.mustache('bookshelf', html);
			can.view.mustache('encyclopedia_view', encyclopediaHtml);

			this.bookshelf.html(can.view('bookshelf', this.data, encyclopediaHelpers));
			this.items_container.html(can.view('encyclopedia_view', this.data, encyclopediaHelpers));

			this.first_call = false;
		},

		'.age_block click': function(el) {
			var val = el.data('value').toString();

			this.age_blocks.removeClass(this.active);
			el.addClass(this.active);

			this.data.attr('age', val);

			this.theme_filter.addClass(this.active);

			this.setScroll();

		},

		setScroll: function () {
			var bookshelfHeight = this.filterHeight - 160 - 130;

			$('.bookshelfWrap', this.element).height(bookshelfHeight).mCustomScrollbar({
                scrollInertia: 0
            });
		},

		'.book click': function (el) {
			this.element.find('.book').removeClass(this.active);
			el.addClass(this.active);
			this.data.attr('theme', el.data('theme'));
		},

		'.theme_filter .close click': function(el) {
			this.theme_filter.removeClass(this.active);
		},

		'.order_select change': function (el) {
			var val = el.val();
			this.data.attr('sort', val === 'date' ? 'asc' : 'desc');
		},

		'.author_select change': function (el) {
			this.data.attr('filter', el.val());
		},

		'.filter_button click': function() {
			var age = this.data.attr('age') || null,
				theme = this.data.attr('theme') || null;

			router.new_module('encyclopedia' + (age ? '/' + age : '') + (theme ? '/' + theme : ''));
		}
	}
);
