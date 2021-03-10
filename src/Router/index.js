import Vue from 'vue';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';
import { PROJECT_NAME, GTAG_ID } from '@/config/Settings';

// -> import views
import ViewController from '@/Controllers/ViewController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ViewController.load('Home'),
		meta: {
			title: PROJECT_NAME + ' - Home',
			KeepAlive: true,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	{
		path: '/ofertas',
		name: 'Collections',
		component: ViewController.load('Collections'),
		meta: {
			title: PROJECT_NAME + ' - Ofertas',
			KeepAlive: true,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	{
		path: '/oferta/:id/:slug?',
		name: 'Offer',
		component: ViewController.load('Offer'),
		meta: {
			title: PROJECT_NAME + ' - Oferta',
			KeepAlive: true,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	{
		path: '/categoria/:id/:slug?',
		name: 'Category',
		component: ViewController.load('Category'),
		meta: {
			title: PROJECT_NAME + ' - Categoria',
			KeepAlive: false,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	{
		path: '/colecao/:id/:slug?',
		name: 'Collection',
		component: ViewController.load('Collection'),
		meta: {
			title: PROJECT_NAME + ' - Coleção',
			KeepAlive: true,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	{
		path: '/pesquisa',
		name: 'Search',
		component: ViewController.load('Search'),
		meta: {
			title: PROJECT_NAME + ' - Pesquisa',
			KeepAlive: true,
			requiresAuth: false,
			requiresPlan: false
		}
	},

	// checkout
	{
		name: 'Checkout',
		path: '/checkout',
		component: ViewController.load('Checkout'),
		redirect: '/checkout/telefone',
		children: [
			{
				name: 'CheckoutMsisdn',
				path: 'telefone',
				component: ViewController.load('Checkout/Form/Msisdn'),
				meta: {
					title: PROJECT_NAME + ' - Checkout Telefone',
					KeepAlive: false,
					requiresAuth: true,
					requiresPlan: true
				}
			},
			{
				name: 'CheckoutPin',
				path: 'codigo',
				component: ViewController.load('Checkout/Form/Pin'),
				meta: {
					title: PROJECT_NAME + ' - Checkout Pin',
					KeepAlive: false,
					requiresAuth: true,
					requiresPlan: true
				}
			},
			{
				name: 'CheckoutPayment',
				path: 'pagamento',
				component: ViewController.load('Checkout/Form/Payment'),
				meta: {
					title: PROJECT_NAME + ' - Checkout Pagamento',
					KeepAlive: false,
					requiresAuth: true,
					requiresPlan: true
				}
			},

			{
				name: 'CheckoutSuccess',
				path: 'sucesso',
				component: ViewController.load('Checkout/Success'),
				meta: {
					title: PROJECT_NAME + ' - Sucesso',
					KeepAlive: false,
					requiresAuth: true,
					requiresPlan: true
				}
			},

			{
				name: 'CheckoutError',
				path: 'erro',
				component: ViewController.load('Checkout/Error'),
				meta: {
					title: PROJECT_NAME + ' - Erro',
					KeepAlive: false,
					requiresAuth: false,
					requiresPlan: true
				}
			}
		]
	},

	{ path: '*', component: ViewController.load('404') }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

// ?utm_source=banner&utm_medium=wap&utm_campaign=migracaowap
// source
// medium
// campaign

Vue.use(
	VueGtag,
	{
		config: { id: GTAG_ID },
		appName: PROJECT_NAME,
		disableScriptLoad: true,

		pageTrackerTemplate(to) {
			const $track = {
				page_title: to.meta.title,
				page_path: to.path,
				page_location: window.location.href
			};

			console.log($track, GTAG_ID);
			return $track;
		}
	},
	router
);

router.beforeEach((to, from, next) => {
	const $hasPlan = _.model('checkout').hasPlan;

	if (to.matched.some((record) => record.meta.requiresPlan)) {
		if (!$hasPlan) {
			next({ name: 'Collections', query: from.query });
		} else {
			next();
		}
	} else {
		next();
	}
});

router.afterEach((to, from) => {
  console.dir(to);
  console.dir(from);

  to.fullPath = to.fullPath + '?teste=123'
	// const $qs = from.query;
	// let $result = '?';

	// console.log($qs);

	// Object.keys($qs).map((q) => {
	// 	$result += q + '=' + $qs[q] + '&';
	// });
	// $result = $result.slice(0, -1);

	// to.query = $result;
});

export default router;
