// core
import { mapGetters } from 'vuex';

// components
import Container from '@/Resources/Components/Container/index.vue';

export default {
	name: 'OstonCheckoutError',

	components: {
		'oston-container': Container
	},

	methods: {
		logout: function() {
			_.controller('auth').logout();
			_.controller('checkout').reset();
		}
	},

	computed: mapGetters({
		error: 'CheckoutModel/error',
		step: 'CheckoutModel/step',
    plan: 'CheckoutModel/plan'
	})
};
