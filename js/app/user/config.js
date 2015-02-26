(function () {
	'use strict';
	// taking from HTML5 Shiv v3.6.2 |
	// @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
	var supportsUnknownElements = false;

	(function () {
		try {
			var a = document.createElement('a');
			a.innerHTML = '<xyz></xyz>';

			supportsUnknownElements = a.childNodes.length === 1 || (function () {
				// assign a false positive if unable to shiv
				(document.createElement)('a');
				var frag = document.createDocumentFragment();
				return (
					typeof frag.cloneNode === 'undefined' ||
						typeof frag.createDocumentFragment === 'undefined' ||
						typeof frag.createElement === 'undefined'
					);
			}());
		} catch (e) {
			// assign a false positive if detection fails => unable to shiv
			supportsUnknownElements = true;
		}
	}());


	System.config({
		baseURL: '/',
		map: {
			'can/util/util': 'can/util/jquery/jquery',
			'jquery/jquery': 'jquery'
		},
		paths: {
			'css/*': 'css/user/*.js',
			'can/*': 'js/plugins/CanJS/*.js',
			'jquery': 'js/plugins/jquery/dist/jquery.js',
			'knob': 'js/plugins/jquery-knob/dist/jquery.knob.min.js',
			'jquery-validation': 'js/plugins/jquery-validation/dist/jquery.validate.min.js',
			'tooltipster': 'js/plugins/tooltipster/js/jquery.tooltipster.min.js',
			'bx-slider': 'js/plugins/bx-slider/jquery.bxslider.min.js',
			'validate': 'js/plugins/validate/jquery.validate.js',

			'jade': 'js/plugins/jade/runtime.js',
			'select2': 'js/plugins/select2/select2.js',
			'vkontakte': 'js/plugins/social/vk.openapi.js',
			'vk_share': 'js/plugins/social/vk.share.js',
			'odnoklasniki': 'js/plugins/social/ok.connect.js',
			'google': 'js/plugins/social/google.plusone.js',
			'googlemaps_api': 'js/plugins/google/googlemaps_api.js',
			'googlemaps_main': 'js/plugins/google/googlemaps_main.js',
			'moment': 'js/plugins/moment/moment.js',

			'router': 'js/app/user/router/router.js',
			'placeholder': 'js/app/user/router/placeholder.js',

			'core': 'js/app/user/core/core.js',
			'core/*': 'js/app/user/core/*.js',
			'lib/*': 'js/app/user/lib/*.js',
			'modules/*': 'js/app/user/modules/*.js',

			'rConfig': 'js/app/user/core/config.js',
			'helpers': 'js/app/user/helpers.js',

			'carousel': 'js/plugins/bootstrap/js/carousel.js',

			'controller': 'js/app/user/lib/controller/controller.js',
			'module/*': 'js/app/user/modules/*.js',
			'baseModel': 'js/app/admin/lib/model/baseModel.js',
			'like': 'js/app/user/lib/like/like.js',
			'commentaries': 'js/app/user/lib/commentaries/commentaries.js',
			'ratings': 'js/app/user/lib/commentaries/ratings.js',

			'lodash': 'js/plugins/lodash/dist/lodash.js',
			'cropper': 'js/plugins/cropper/dist/cropper.js',

			'custom-scrollbar': 'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',

			'vk-openapi': 'js/app/user/lib/vkOpenApi.js'
		},
		meta: {
			'jquery': {
				exports: "$",
				deps: supportsUnknownElements ? undefined : ["can/lib/html5shiv.js"]
			},
			'can/*': {
				deps: [
					'jquery',
					'can/route/pushstate/pushstate'
				]
			},
			'helpers': {
				deps: [
					'jade',
					'vkontakte',
					'vk_share',
					'odnoklasniki',
					'google'
				]
			},
			'custom-scrollbar': {
				deps: [
					'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css!'
				]
			},
			'select2': {
				format: 'global',
				deps: ['jquery']
			},
			'carousel': {
				format: 'global',
				deps: ['jquery']
			},
			'cropper': {
				format: 'global',
				deps: ['js/plugins/cropper/dist/cropper.css!']
			},
			'tooltipster': {
				format: 'global',
				deps: [
					'jquery',
					'js/plugins/tooltipster/css/tooltipster.css!',
					'js/plugins/tooltipster/css/themes/tooltipster-agusha.css!',
					'js/plugins/tooltipster/css/themes/tooltipster-error.css!'
				]
			},
			'bx-slider': {
				deps: [
					'js/plugins/bx-slider/jquery.bxslider.css!'
				]
			}
		},
		ext: {
			mustache: "js/plugins/CanJS/view/mustache/system",
			stache: "js/plugins/CanJS/view/stache/system"
		},
		bundle: [
			"modules/article/article",
			"modules/consultation/consultation",
			"modules/contacts/contacts",
			"modules/encyclopedia/encyclopedia",
			"modules/help/help",
			"modules/login/login",
			"modules/main/main",
			"modules/messages/messages",
			"modules/moneybox/moneybox",
			"modules/poll/poll",
			"modules/product/product",
			"modules/production/production",
			"modules/products/products",

			"modules/profile/profile",

			"modules/question/question",
			"modules/registration/registration",
			"modules/search/search",
			"modules/specialist/specialist",
			"modules/subscriptions/subscriptions"
		]
	});

})();


System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
