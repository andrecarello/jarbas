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

	{ path: '*', component: ViewController.load('404') }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
