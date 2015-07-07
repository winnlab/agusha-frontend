import Controller from 'controller'
import 'carousel'

export default Controller.extend(
	{
		defaults: {
			
		}
	}, {
		variables: function() {
			this.carousel = this.element.find('#production_carousel');
			
			this.tab_selectors = this.element.find('.tab_selector');
			
			this.video = this.element.find('.video');
			this.player_bg = this.video.find('.player_bg');
			
			this.left_menu = $('#left_menu');
			
			this.active = 'active';
		},
		
		plugins: function() {
			this.init_carousel();
		},
		
		sizes: function() {
			var width = this.element.width(),
				classname = 'high_resolution',
				func = 'addClass';
			
			if(width < 900) {
				func = 'removeClass'
			}
			
			this.element[func](classname);
		},
		
		init_carousel: function() {
			this.carousel.carousel();
		},
		
		after_init: function(data) {
			
		},
		
		'.child click': function() {
			this.video.addClass(this.active);
		},
		
		'.video .close click': function() {
			this.video.removeClass(this.active);
		},
		
		'.tab click': 'changeTab',

		'.link-tab click': 'changeTab',

		changeTab: function(el, ev) {
			var tab = el.data('tab');
			
			this.tab_selectors.removeClass(this.active);
			this.tab_selectors.filter('.' + tab).addClass(this.active);
		},
		
		'{window} custom_resize': 'custom_resize',
		
		custom_resize: function() {
			if(!this.element.hasClass(this.active)){
				return;
			}
			
			this.player_bg.css({
				left: this.left_menu.width()
			});
		}
	}
);