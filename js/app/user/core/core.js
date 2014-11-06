import 'can/map/delegate/'
import 'can/map/define/'
import Router from 'router'
import config from 'rConfig'
import helpers from 'helpers'
import appState from 'core/appState'
import RightMenu from 'lib/right_menu/'

// console.log(RightMenu.init())

import Like from 'like'
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
			this.left_inner_menu = this.left_resizable.filter('.left_inner_menu');

			this.right_menu = this.element.find('.right_menu');

			this.start = null;

			//this.profile_circle(0.75);

			// this.profile_circle(0.75);
			this.initBindings();
			// this.profile_circle(0.75);

			// #register_corner is no more
			// appState.attr('user').delegate('isAuth', 'set', function (el, newVal) {
				// var regBlock = $('#register_corner');
				// if (newVal) {
					// regBlock.hide();
				// } else {
					// regBlock.show();
				// }
			// });
		},

		// profile_circle: function(percentage) {
		// 	var degreeInRad = Math.PI / 180;
		// 	var degrees = 360 * percentage;

		// 	var canvas = document.getElementById('profile_circle');
		// 	var context = canvas.getContext('2d');
		// 	var x = canvas.width / 2;
		// 	var y = canvas.height / 2;
		// 	var radius = 57;
		// 	var startRadian = 1.5 * Math.PI;
		// 	var endRadian = (degrees - 90 + 1) * degreeInRad;
		// 	var counterClockwise = false;

		// 	context.beginPath();
		// 	context.arc(x, y, radius, startRadian, endRadian, counterClockwise);
		// 	context.lineWidth = 14;
		// 	context.lineCap = 'round';

		// 	// line color
		// 	context.strokeStyle = '#2483b3';
		// 	context.stroke();
		// },

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

		// '#right_menu_small, #right_menu .close click': function(el) {
		// 	this.left_resizable.addClass('small');
		// 	this.right_menu.toggleClass('active');

		// 	this.requestAnimFrame();
		// },

		'#right_menu_small click': function(el) {
			var user = appState.attr('user'),
				isAuth = user.isAuth();

			if (!isAuth) {
				return;
			}

			this.left_resizable.addClass('small');
			this.right_menu.toggleClass('active');
			this.requestAnimFrame();
		},

		'#right_menu .close click' : function(el) {
			var user = appState.attr('user'),
				isAuth = user.isAuth();

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
		},

		initBindings: function () {

			appState.attr('user').delegate('user', 'set', function (ev, newVal) {
				if (newVal && newVal._id) {
					$(document).find('.comment_box').css('display', 'block');
					$(document).find('.login_box').css('display', 'none');
				} else {
					$(document).find('.comment_box').css('display', 'none');
					$(document).find('.login_box').css('display', 'block');
				}
			});
		}
	}
);

window.core = new Core(document.body);

window.router = new Router(document.body, config.router);

new Like(document.body);
new Commentaries(document.body);
