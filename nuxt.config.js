export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/scss/argon.scss'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'@/plugins/globalComponents.js',
		'@/plugins/mixinCommonMethods.js',
		{ src: '~/plugins/vuex-persist', ssr: false }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		// '@nuxtjs/eslint-module'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://www.npmjs.com/package/vue-scrollto
		'vue-scrollto/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://auth.nuxtjs.org
		'@nuxtjs/auth'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: 'http://letstakeout.test'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	},
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: {
						url: '/api/auth/login',
						method: 'post',
						propertyName: 'access_token'
					},
					logout: {
						url: '/api/auth/logout',
						method: 'post'
					},
					user: {
						url: '/api/auth/user',
						method: 'get',
						propertyName: ''
					}
				},
				tokenRequired: true,
				tokenType: 'Bearer'
			}
		}
	}
};
