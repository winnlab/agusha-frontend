'use strict';
import can from 'can/';
import helpers from 'helpers';
import appState from 'core/appState';
import Like from 'like';
import Watch from 'js/app/user/lib/watcher/';
import Router from 'router';
import config from 'rConfig';
import Commentaries from 'commentaries';
import 'jquery-validation';
import 'tooltipster';
import 'select2';
import 'carousel';
import 'custom-scrollbar';
import 'bx-slider';
import 'js/plugins/jquery.iframetracker/jquery.iframetracker';
import 'can/map/delegate/';
import 'can/map/define/';
import 'core/viewHelpers';
import 'lib/right_menu/';

var Core = can.Control.extend({
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

		VK.init({
			apiId: 4699559
		});
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
			$('#right_menu .moneybox .count').html(data.data.points);
			appState.attr('moneybox', false);
		});
	},

	'.logout click': function() {
		this.hide_right_menu();
		appState.attr('user').logout();
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

		can.route.attr({module: 'registration'}, true)
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

		var event = 'Close';

		if(this.left_resizable.hasClass('small')) {
			event = 'Open';
		}

		this.left_resizable.toggleClass('small');

		this.requestAnimFrame();

		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'LeftMenu', event);
	},

	'#left_menu .about click': function(el) {
		this.animate_left_inner_menu(true);

		this.requestAnimFrame();
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'AboutAgusha', 'Click');
	},

	'#left_menu .facebook click': function(el) {
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'Social', 'Facebook');
	},

	'#left_menu .vkontakte click': function(el) {
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'Social', 'Vkontakte');
	},

	'#left_menu .odnoklassniki click': function(el) {
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'Social', 'Odnoklassniki');
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

		if(phrase !== '') {
			if (typeof ga !== 'undefined') {
				ga('set', 'page', decodeURI(document.location.href));
				ga('send', 'event', 'Search', phrase);
			}

			router.new_module('search/' + phrase);
		}
	},

	'#left_menu.small .search_icon click': function(el) {
		this.left_resizable.toggleClass('small');
		this.right_menu.removeClass('active');
		this.requestAnimFrame();
	},

	initBindings: function () {
		appState.attr('user').user().bind('change', function () {

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

	'{window} custom_ready': function() {
		$('body').css({
			overflow: 'auto'
		});

		$('#preloader').fadeOut(300);
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
		ga('set', 'page', decodeURI(document.location.href));
		ga('send', 'event', 'ScrollToTop', 'Click');

		$('html, body').animate({
			scrollTop: 0
		}, 600);
	},

	'.triggerClosePopup click': function (el, ev) {
		var $mainPopupWrapper = $('.mainPopupWrapper');

		$mainPopupWrapper.fadeOut(function(){
			$mainPopupWrapper.find('h1').html('');
			$mainPopupWrapper.find('p').html('');
		});
	},
	
	'a._blank click': function(el, ev) {
		ev.preventDefault();
		
		var win = window.open(el.attr('href'), '_blank');
		win.focus();
	}
});

window.core = new Core(document.body);

window.router = new Router(document.body, config.router);

new Like(document.body);
new Commentaries(document.body);
new Watch(document.body);

export default window.core;