import Controller from 'controller'

import select2 from 'select2'

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
		
		after_init: function(data) {
			var that = this,
				html;
			
			this.first_call = true;
			
			var ViewModel = can.Map.extend({
				define: {
					age: {
						value: null
					},
					
					themes: {
						value: new can.List(),
						get: function(currentValue) {
							var options = {
								age: this.attr('age')
							};
							
							if(!that.first_call) {
								currentValue.replace(Theme.findAll(options));
							}
							
							return currentValue;
						}
					},
					
					theme: {
						value: null
					},
					
					articles: {
						value: new can.List(),
						get: function(currentValue) {
							var options = {
								age: this.attr('age'),
								theme: this.attr('theme')
							};
							
							if(!that.first_call) {
								currentValue.replace(Article.findAll(options));
							}
							
							return currentValue;
						}
					}
				}
			});
			
			this.data = new ViewModel();
			
			//
			
			var bookshelf_mustache = $('#bookshelf_mustache');
			
			if(!bookshelf_mustache.length) {
				html = jadeTemplate.get('user/encyclopedia/bookshelf_mustache');
			} else {
				html = bookshelf_mustache.html();
			}
			
			can.view.mustache('bookshelf', html);
			
			this.bookshelf.html(can.view('bookshelf', this.data));
			
			//
			
			var article_mustache = $('#article_mustache');
			
			if(!article_mustache.length) {
				html = jadeTemplate.get('user/encyclopedia/article_mustache');
			} else {
				html = article_mustache.html();
			}
			
			can.view.mustache('article', html);
			
			this.items_container.html(can.view('article', this.data));
			
			//
			
			this.first_call = false;
		},
		
		'.age_block click': function(el) {
			var val = el.data('value');
			
			this.age_blocks.removeClass(this.active);
			el.addClass(this.active);
			
			this.data.attr('age', val);
			
			this.theme_filter.addClass(this.active);
		},
		
		'.theme_filter .close click': function(el) {
			this.theme_filter.removeClass(this.active);
		}
	}
);