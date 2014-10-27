System.config({
	baseURL: '/',
	paths: {
		'jquery': 'js/plugins/jquery/dist/jquery.min.js',
		'can/*': 'js/plugins/CanJS/*.js',
		'underscore': 'js/plugins/underscore/underscore-min.js',
		'jade': 'js/plugins/jade/runtime.js',
		'select2': 'js/plugins/select2/select2.js',
		'vkontakte': 'js/plugins/social/vk.openapi.js',
		'odnoklasniki': 'js/plugins/social/ok.connect.js',
		'google': 'js/plugins/social/google.plusone.js',
		'googlemaps_api': 'js/plugins/google/googlemaps_api.js',
		'googlemaps_main': 'js/plugins/google/googlemaps_main.js',
		
		'router': 'js/app/user/router/router.js',
		'placeholder': 'js/app/user/router/placeholder.js',
		
		'core': 'js/app/user/core/core.js',
		'rConfig': 'js/app/user/core/config.js',
		'helpers': 'js/app/user/helpers.js',
		
		'controller': 'js/app/user/lib/controller/controller.js',
	},
	map: {
		'can/util/util': 'can/util/jquery/jquery',
		'jquery/jquery': 'jquery',
		'$': 'jquery'
	},
	meta: {
		'can/*': {
			deps: [
				'jquery',
				'can/route/pushstate/pushstate'
			]
		},
		'core': {
			deps: [
				'jquery',
				'can/',
				'router',
				'rConfig',
				'helpers',
				'controller'
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
		'products': {
			deps: [
				'select2'
			]
		},
		'encyclopedia': {
			deps: [
				'select2'
			]
		},
		'help': {
			deps: [
				'googlemaps_api',
				'googlemaps_main'
			]
		}
	}
});