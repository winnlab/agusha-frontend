var config = {
	router: {
		base: '/',
		modulesContainer: '#modules',
		modules: [
			{
				name: 'main',
				path: {
					client: 'js/app/user/modules/main/',
					server: ''
				}
			},
			{
				name: 'registration',
				path: {
					client: 'js/app/user/modules/registration/',
					server: ':name'
				}
			},
			{
				name: 'login',
				path: {
					client: 'js/app/user/modules/login/',
					server: ':name'
				}
			},
			{
				name: 'products',
				path: {
					client: 'js/app/user/modules/products/',
					server: ':name'
				}
			},
			{
				name: 'product',
				path: {
					client: 'js/app/user/modules/product/',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'help',
				path: {
					client: 'js/app/user/modules/help/',
					server: ':name'
				}
			},
			{
				name: 'encyclopedia',
				path: {
					client: 'js/app/user/modules/encyclopedia/',
					server: ':name/:entity_id/:param2'
				}
			},
			{
				name: 'production',
				path: {
					client: 'js/app/user/modules/production/',
					server: ':name'
				}
			},
			{
				name: 'article',
				path: {
					client: 'js/app/user/modules/article/',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'poll',
				path: {
					client: 'js/app/user/modules/poll/',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'specialist',
				path: {
					client: 'js/app/user/modules/specialist/',
					server: ':name'
				}
			}
		],
		defaultModule: 'main'
	}
};

export default config;