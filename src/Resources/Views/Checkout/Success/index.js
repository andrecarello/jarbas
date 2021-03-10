// components
import Container from '@/Resources/Components/Container/index.vue';

export default {
	name: 'OstonCheckoutSuccess',

	data() {
		return {
			background: `url(${require('@/assets/images/backgrounds/success.png')})`
		};
	},

	components: {
		'oston-container': Container
	},

	methods: {
		logout: function() {
			_.controller('checkout').reset();
		}
	}
};
