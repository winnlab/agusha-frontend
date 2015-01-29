(function () {
	// taking from HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
	var supportsUnknownElements = false;

	(function () {
		try {
			var a = document.createElement('a');
			a.innerHTML = '<xyz></xyz>';

			supportsUnknownElements = a.childNodes.length == 1 || (function () {
				// assign a false positive if unable to shiv
				(document.createElement)('a');
				var frag = document.createDocumentFragment();
				return (
					typeof frag.cloneNode == 'undefined' ||
						typeof frag.createDocumentFragment == 'undefined' ||
						typeof frag.createElement == 'undefined'
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
			'watch': 'js/app/user/lib/watcher/watcher.js',
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
					'odnoklasniki',
					'google'
				]
			},
			'custom-scrollbar': {
				deps: [
					'jquery',
					'js/plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css!'
				]
			},
			'select2': {
				format: 'global',
				deps: ['jquery']
			},
			'bx-slider': {
				deps: [
					'jquery',
					'js/plugins/bx-slider/jquery.bxslider.css!'
				]
			}
		},
		ext: {
			mustache: "home/ansyg/projects/AgushaSteal/public/js/plugins/CanJS/view/mustache/system",
			stache: "home/ansyg/projects/AgushaSteal/public/js/plugins/CanJS/view/stache/system"
		},
		bundle: [
			"modules/article/article",
			"modules/consultation/consultation",
			"modules/contacts/contacts",
			"modules/encyclopedia/encyclopedia",
			"modules/main/main",
			"modules/specialist/specialist"			
		]
	});

})();


System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};
