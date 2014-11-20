import Controller from 'controller'

import encyclopediaHelpers from 'js/app/user/modules/encyclopedia/encyclopediaHelpers';

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.active = 'active';
			
			this.tab_blocks = this.element.find('.tab_block');
		},
		
		sizes: function() {
			this.reRenderArticles();
		},
		
		after_init: function(data) {
			this.articlesSource = data ? data.articles : app.articles;
			this.consultationsSource = data ? data.consultations : app.consultations;
			
			var articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, false),
				consultations = encyclopediaHelpers.sortArticles(this.consultationsSource, null, false),
				article_html,
				consultation_html;
			
			var ViewModel = can.Map.extend({
				articles: articles,
				consultations: consultations,
				filter: 0,
				module: 'search'
			});
			
			this.data = new ViewModel();
			
			var article_mustache = $('#article_mustache');
			
			if(!article_mustache.length) {
				article_html = jadeTemplate.get('user/search/article_mustache');
			} else {
				article_html = article_mustache.html();
			}
			
			can.view.mustache('article', article_html);
			
			var consultation_mustache = $('#consultation_mustache');
			
			if(!consultation_mustache.length) {
				consultation_html = jadeTemplate.get('user/search/consultation_mustache');
			} else {
				consultation_html = consultation_mustache.html();
			}
			
			can.view.mustache('consultation', consultation_html);
			
			this.tab_blocks.filter('.articles_block').find('.items_container').html(can.view('article', this.data, encyclopediaHelpers));
			this.tab_blocks.filter('.consultations_block').find('.items_container').html(can.view('consultation', this.data, encyclopediaHelpers));
			
			this.tab_blocks.filter(':not(.active)').find('.items_container').hide();
		},
		
		reRenderArticles: function () {
			if(this.data) {
				var articles = encyclopediaHelpers.sortArticles(this.articlesSource, null, false);
				this.data.attr('articles', articles);
				
				var consultations = encyclopediaHelpers.sortArticles(this.consultationsSource, null, false);
				this.data.attr('consultations', consultations);
			}
		},
		
		'.tab_block .title click': function(el) {
			var tab_block = el.parent(),
				items_container = el.next(),
				func = 'slideDown';
			
			if(tab_block.hasClass(this.active)) {
				func = 'slideUp';
			}
			
			items_container.stop(true, false)[func](300);
			
			tab_block.toggleClass(this.active);
		}
	}
);