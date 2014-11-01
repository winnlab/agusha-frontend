import Controller from 'controller'
import select2 from 'select2'
import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';
// import User from 'modules/user/';

var ViewModel = can.Map.extend({
	sort: 'asc',
	filter: ''
});

export default Controller.extend(
	{
		defaults: {

		}
	}, {
		variables: function() {
			this.formWrap = this.element.find('.column.double');
			this.icons = this.element.find('.icon');
			this.itemsContainer = this.element.find('.items_container');
		},

		plugins: function() {
			this.select2();
		},

		select2: function() {
			var	specialist_age_select = this.element.find('.specialist_age_select'),
				specialist_theme_select = this.element.find('.specialist_theme_select'),
				specialist_question_select = this.element.find('.specialist_question_select'),
				specialist_sort_select = this.element.find('.specialist_sort_select'),
				options = {
					width: '100%',
					minimumResultsForSearch: -1,
					formatResult: this.format
				};

			specialist_age_select.select2(options);
			specialist_theme_select.select2(options);

			options.width = 'off';

			specialist_question_select.select2(options);
			specialist_sort_select.select2(options);
		},

		format: function(state) {
			// var	el = $(state.element);

			var html = 	'<div class="adorable_table specialist_select2_result">' +
							'<div class="adorable_cell">' +
								state.text +
							'</div>' +
						'</div>';

			return html;
		},

		after_init: function(data) {
			var that = this,
				specHtml,
				html;

			this.data = new ViewModel({
				articles: data ? data.articles : app.consultations,
				themes: data ? data.themes : app.themes
			});

			var consultation_mustache = $('#consultation_mustache'),
				specialist_mustache = $('#specialist_mustache');

			if(!consultation_mustache.length) {
				html = jadeTemplate.get('user/encyclopedia/consultation_mustache');
				specHtml = jadeTemplate.get('user/encyclopedia/specialist_mustache');
			} else {
				html = consultation_mustache.html();
				specHtml = specialist_mustache.html();
			}

			can.view.mustache('consultation_view', html);
			can.view.mustache('specialist_view', specHtml);

			this.formWrap.html(can.view('consultation_view', this.data));
			this.itemsContainer.html(can.view('specialist_view', this.data, {
				getClassName: function (index) {
					return (index - 6) % 5 == 0 ? 'double' : '';
				},
				sortBy: encyclopediaHelpers.sortBy,
				filterIt: function (entity, filter) {
					if (filter() == 'recommended') {
						return  !entity.attr('recommended') ? 'display: none' : '';
					}
					return '';
				}
			}));
		},

		'.icon.lamp click': function (el) {
			this.icons.removeClass('active');
			el.addClass('active');
			var recommended = this.data.attr('filter');
			this.data.attr('filter', recommended == 'recommended' ? '' : 'recommended');
		},

		'.specialist_sort_select change': function (el)  {
			this.data.attr('sort', el.val() === 1 ? 'asc' : 'desc');
		}
    }
);
