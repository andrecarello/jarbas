window._ = require('lodash');

// core
import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';
import VueGtm from "vue-gtm";
import { _CONTROLLER } from '@/bootstrap';

// global imports
import VueFormulate from '@braid/vue-formulate';
import { pt } from '@braid/vue-formulate-i18n';
import VueClipboard from 'vue-clipboard2';
import FeatherIcons from '@/Resources/Components/Icon/index.vue';

// oston global imports
import InterseptedImage from '@/Resources/Components/Helpers/InterseptedImage/index.vue';
import Image from '@/Resources/Components/Helpers/Image/index.vue';

// settings
import Settings, { ANONYMOUS, INTERACTIONS, ANALYTICS } from '@/config/Settings';

// vue config
Vue.config.productionTip = false;

// controllers
_.controller = _CONTROLLER;
_.controllers = [];

const files = require.context('@/Controllers/', true, /\.js$/i);
files.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
});

if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}
if (ANALYTICS) {
	Settings.analytics();
}

// uses
Vue.use(VueFormulate, { plugins: [ pt ] });
Vue.use(VueClipboard);

// components
Vue.component('feather', FeatherIcons);
Vue.component('oston-image', Image);
Vue.component('oston-intersepted-image', InterseptedImage);

// vue instance
new Vue({
	router: Router,
	store: Store,
	render: (h) => h(App)
}).$mount('#app');
