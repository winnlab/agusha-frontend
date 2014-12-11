import 'can/map/delegate/'
import 'can/map/define/'
import 'core/viewHelpers'
import Router from 'router'
import config from 'rConfig'
import helpers from 'helpers'
import appState from 'core/appState'
import RightMenu from 'lib/right_menu/'

// console.log(RightMenu.init())

import Like from 'like'
import Watch from 'watch'
import Commentaries from 'commentaries'

var Core = can.Control.extend(
	{
		defaults: {

		}
	},

	{
		init: function() {
			this.window = $(window);
			this.left_resizable = $('.left_resizable');
			
			this.left_menu_line = this.left_resizable.find('.left_menu_line');
			
			this.left_inner_menu = this.left_resizable.filter('.left_inner_menu');
			
			this.right_menu = this.element.find('.right_menu');

			this.start = null;
			this.initBindings();
			this.resize();
			
			appState.delegate('moneybox', 'set', can.proxy(this.moneyboxed, this));
		},
		
		moneyboxed: function (ev, newVal) {
			if (!newVal) {
				return;
			}
			
			can.ajax({
				url: '/moneybox-points-only',
				dataType: 'json',
				method: 'get'
			}).done(function (data) {
				$('#right_menu_small .points_number').html(data.data.points);
				appState.attr('moneybox', false);
			});
		},
		
		'.logout click': function() {
			this.hide_right_menu()
			appState.attr('user').logout()
		},
		
		'#right_menu_small .subTopper .top click': function() {
			var user = appState.attr('user'),
				isAuth = user.auth.attr('isAuth');
			
			if(isAuth) {
				this.left_resizable.addClass('small');
				this.right_menu.toggleClass('active');
				this.animate_left_inner_menu();
				this.requestAnimFrame();
				
				return;
			}
			
			can.route.attr({module: 'registration'})
		},

		step: function(timestamp) {
			var that = this;
			
			if(this.start === null) {
				this.start = timestamp;
			}
			
			var progress = timestamp - this.start;
			
			this.window.trigger('custom_resize');

			if(progress <= 300) {
				return this.requestAnimFrame();
			}

			this.start = null;
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
			this.animate_left_inner_menu(true);

			this.requestAnimFrame();
		},

		'#right_menu .close click' : function(el) {
			var user = appState.attr('user'),
				isAuth = user.auth.isAuth;

			this.left_resizable.addClass('small');
			this.right_menu.toggleClass('active');
			this.requestAnimFrame();
		},

		animate_left_inner_menu: function(toggle) {
			toggle = toggle || false;

			var func = 'removeClass',
				filter_func = 'removeClass',
				classname = 'show';

			if(toggle) {
				func = 'toggleClass';
			}

			this.left_inner_menu[func](classname);

			if(!this.left_inner_menu.hasClass(classname)) {
				filter_func = 'addClass'
			}

			this.element.find('.module.encyclopedia .filter')[filter_func](classname);

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
		},

		'#left_menu.small .search_icon click': function(el) {
			this.left_resizable.toggleClass('small');
			this.right_menu.removeClass('active');
			this.requestAnimFrame();
		},

		initBindings: function () {
			appState.attr('user').user().bind('change', function (ev, attr, how, newVal, oldVal) {

				if (appState.attr('user') && appState.attr('user').user() && appState.attr('user').user()._id) {
					$(document).find('.comment_box').css('display', 'block');
					$(document).find('.pollContentWrapper').css('display', 'block');
					$(document).find('.login_box').css('display', 'none');
				} else {
					$(document).find('.comment_box').css('display', 'none');
					$(document).find('.pollContentWrapper').css('display', 'none');
					$(document).find('.login_box').css('display', 'block');
				}
			});

			appState.bind('unreadConversationsAmount', function (varName, newValue, oldValue) {
				$('.unreadConversationsAmount').html(newValue);
				$('#right_menu_small .message .adorable_cell').html(newValue);
			});
		},
		
		'{window} resize': 'resize',
		
		resize: function() {
			var	height = this.window.height(),
				func = 'show';
			
			if(height < 690) {
				func = 'hide';
			}
			
			this.left_menu_line[func]();
		},

		'.scrollToTop click': function (el, ev) {
			$('html, body').animate({
				scrollTop: 0
			}, 600);
		}
	}
);

window.core = new Core(document.body);

window.router = new Router(document.body, config.router);

new Like(document.body);
new Commentaries(document.body);
new Watch(document.body);
