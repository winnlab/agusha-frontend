import 'can/map/delegate/'
import 'can/map/define/'
import Router from 'router'
import config from 'rConfig'
import helpers from 'helpers'
import appState from 'core/appState'
import Like from 'like'

var Core = can.Control.extend(
	{
		defaults: {

		}
	},

	{
		init: function() {
			this.body = $(document.body);
			this.window = $(window);

			this.left_resizable = $('.left_resizable');
			this.left_inner_menu = this.left_resizable.filter('.left_inner_menu');
			// this.id_left_inner_menu = this.left_inner_menu.filter('#left_inner_menu');

			// this.left_inner_menu_left = this.id_left_inner_menu.css('left');
			
			this.right_menu = this.element.find('.right_menu');
			this.id_right_menu = this.right_menu.filter('#right_menu');

			this.start = null;

			appState.attr('user').delegate('isAuth', 'set', function (el, newVal) {
				var regBlock = $('#register_corner');
				if (newVal) {
					regBlock.hide();
				} else {
					regBlock.show();
				}
			});
		},
		
		step: function(timestamp) {
			var that = this;
			
			if(this.start === null) {
				this.start = timestamp;
			}
			
			var progress = timestamp - this.start;
			
			this.window.resize();
			
			if(progress <= 300) {
				return this.requestAnimFrame();
			}
			
			this.start = null;
		},
		
		hide_left_inner_menu: function() {
			this.left_inner_menu.removeClass('show');
			
			this.requestAnimFrame();
		},
		
		hide_left_menu: function() {
			this.left_resizable.addClass('small');
			
			this.requestAnimFrame();
		},
		
		hide_right_menu: function() {
			this.right_menu.removeClass('active');
			
			this.requestAnimFrame();
		},
		
		requestAnimFrame: function() {
			var	that = this;
			window.requestAnimFrame(function(timestamp) {
				that.step(timestamp);
			});
		},

		'#left_menu .close click': function(el) {
			this.right_menu.removeClass('active');
			this.left_resizable.toggleClass('small');
			
			this.requestAnimFrame();
		},

		'#left_menu .about click': function(el) {
			this.left_inner_menu.toggleClass('show');
			
			this.requestAnimFrame();
		},
		
		'#right_menu_small, #right_menu .close click': function(el) {
			this.left_resizable.addClass('small');
			this.right_menu.toggleClass('active');
			
			this.requestAnimFrame();
		},

		'.search_form submit': function(el, ev) {
			ev.preventDefault();

			var search_input = el.find('.search_input'),
				phrase = $.trim(search_input.val());

			phrase = phrase.replace(/ +(?= )/g, '');
			phrase = phrase.replace(/ /g, '_');
			phrase = phrase.toLowerCase();

			if(phrase != '') {
				router.new_module('search/' + phrase);
			}
		}
	}
);

window.core = new Core(document.body);

window.router = new Router(document.body, config.router);

new Like(document.body);
