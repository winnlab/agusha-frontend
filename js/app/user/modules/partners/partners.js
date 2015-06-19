import Controller from 'controller'

import select2 from 'select2'
import _ from 'lodash'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {		
		select2: function() {
			var	selector = this.element.find('.sort_select');
			
			this.sort_select2 = selector.select2({
				width: 'off',
				formatSelection: this.format,
				formatResult: this.format,
				minimumResultsForSearch: -1
			});
		},
		
		format: function(state) {
			var	el = $(state.element),
				html = 	'<div class="adorable_table">' +
							'<div class="adorable_cell partners_select_text left">' +
								state.text +
							'</div>' +
						'</div>';
			
			return html;
		},
		
		after_init: function(data) {
			var that = this,
				partners = data ? data.partners : app.partners,
				html;
			
			var ViewModel = can.Map.extend({
				define: {
					all_partners: {
						value: partners
					},
					
					partners: {
						get: function(currentValue) {
							var options = {
									all_partners: this.attr('all_partners'),
									current_page: this.attr('current_page'),
									per_page: this.attr('per_page'),
									sort_by_alphabet: this.attr('sort_by_alphabet')
								},
								starting_index = (options.current_page - 1) * options.per_page,
								sorted = _.sortByOrder(options.all_partners, 'title', options.sort_by_alphabet),
								result = sorted.slice(starting_index, options.per_page);
							
							return result;
						}
					},
					
					sort_by_alphabet: {
						value: 1
					},
					
					pages_count: {
						get: function() {
							var options = {
								all_partners: this.attr('all_partners'),
								per_page: this.attr('per_page')
							};
							
							return Math.ceil(options.all_partners.length / options.per_page);
						}
					},
					
					current_page: {
						value: 1
					},
					
					per_page: {
						value: 30
					}
				}
			});
			
			this.data = new ViewModel();
			
			var partner_mustache = $('#partner_mustache');
			
			if(!partner_mustache.length) {
				html = jadeTemplate.get('user/partners/partner_mustache');
			} else {
				html = partner_mustache.html();
			}
			
			can.view.mustache('partner', html);
			
			$('#partners_container').html(can.view('partner', this.data));
			
			this.select2();
		},
		
		'.prev_page click': function(el) {
			var current_page = this.data.attr('current_page');
			
			if(current_page > 1) {
				this.data.attr('current_page', current_page - 1);
			}
		},
		
		'.next_page click': function(el) {
			var current_page = this.data.attr('current_page'),
				pages_count = this.data.attr('pages_count');
			
			if(current_page < pages_count) {
				this.data.attr('current_page', current_page + 1);
			}
		},
		
		'.sort_select change': function(el, ev) {
			var val = +ev.val;
			
			this.data.attr('sort_by_alphabet', val);
			
			this.sort_select2.select2("val", val);
		}
    }
);