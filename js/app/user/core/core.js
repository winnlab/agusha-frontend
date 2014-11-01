import Router from 'router'
import config from 'rConfig'
import helpers from 'helpers'
import AppState from 'core/appState'

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

			this.start = null;
		},

		step: function(timestamp) {
			var that = this;

			if(this.start === null) {
				this.start = timestamp;
			}

			var progress = timestamp - this.start;

			this.window.resize();

			if(progress <= 300) {
				return window.requestAnimFrame(function(timestamp) {
					that.step(timestamp);
				});
			}

			this.start = null;
		},

		'#left_menu .close click': function(el) {
			var	that = this;

			this.left_resizable.toggleClass('small');
			window.requestAnimFrame(function(timestamp) {
				that.step(timestamp);
			});
		},

		'#left_menu .about click': function(el) {
			var	that = this;

			this.left_inner_menu.toggleClass('show');
			window.requestAnimFrame(function(timestamp) {
				that.step(timestamp);
			});
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

new Core(document.body);

window.router = new Router(document.body, config.router);
