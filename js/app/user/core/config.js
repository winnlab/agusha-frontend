var config = {
	router: {
		base: '/',
		modulesContainer: '#modules',
		modules: [
			{
				name: 'main',
				path: {
					client: 'modules/main/main',
					server: ''
				}
			},
			{
				name: 'registration',
				path: {
					client: 'modules/registration/registration',
					server: ':name'
				}
			},
			{
				name: 'profile',
				path: {
					client: 'modules/profile/profile',
					server: ':name'
				}
			},
			{
				name: 'login',
				path: {
					client: 'modules/login/login',
					server: ':name'
				}
			},
			{
				name: 'products',
				path: {
					client: 'modules/products/products',
					server: ':name'
				}
			},
			{
				name: 'product',
				path: {
					client: 'modules/product/product',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'help',
				path: {
					client: 'modules/help/help',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'encyclopedia',
				path: {
					client: 'modules/encyclopedia/encyclopedia',
					server: ':name/:entity_id/:param2'
				}
			},
			{
				name: 'production',
				path: {
					client: 'modules/production/production',
					server: ':name'
				}
			},
			{
				name: 'article',
				path: {
					client: 'modules/article/article',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'poll',
				path: {
					client: 'modules/poll/poll',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'specialist',
				path: {
					client: 'modules/specialist/specialist',
					server: ':name'
				}
			},
			{
				name: 'question',
				path: {
					client: 'modules/question/question',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'search',
				path: {
					client: 'modules/search/search',
					server: ':name/:entity_id'
				}
			},
			{
				name: 'moneybox',
				path: {
					client: 'modules/moneybox/moneybox',
					server: ':name'
				}
			},
			{
				name: 'registered',
				path: {
					client: 'modules/main/main',
					server: ':name'
				}
			},
			{
				name: 'messages',
				path: {
					client: 'modules/messages/messages',
					server: ':name'
				}
			},
			{
				name: 'subscriptions',
				path: {
					client: 'modules/subscriptions/subscriptions',
					server: ':name'
				}
			},
			{
				name: 'contacts',
				path: {
					client: 'modules/contacts/contacts',
					server: ':name'
				}
			},
			{
				name: 'download',
				path: {
					client: 'modules/download/download',
					server: ':name'
				}
			},
			{
				name: 'springregistration',
				path: {
					client: 'modules/springregistration/springregistration',
					server: ':name/:entity_id'
				}
			}
		],
		defaultModule: 'main'
	}
};

export default config;
