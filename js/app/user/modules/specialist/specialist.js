import Controller from 'controller'

import select2 from 'select2'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			
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
			
		}
    }
);