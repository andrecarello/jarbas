class ViewController {
	static load(file, config) {
		return () => import(/* webpackChunkName: "[request]" */ '@/Resources/Views/' + file + '/index.vue');
	}

	static component(file) {
		return () => import(/* webpackChunkName: "[request]" */ '@/Resources/Components/' + file + '/index.vue');
	}
}

export default ViewController;
