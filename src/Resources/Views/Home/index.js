// core
import { mapGetters } from 'vuex';

// settings
import { REFERER } from '@/config/Settings';

// helpers
import { slugify } from '@/Helpers/Misc';

// components
import Container from '@/Resources/Components/Container/index.vue';
import CarouselPlans from '@/Resources/Components/Carousel/Plans/index.vue';
import TipDiscount from '@/Resources/Components/Tip/Discount/index.vue';

export default {
	name: 'Home',

	components: {
		'oston-container': Container,
		'oston-carousel-plans': CarouselPlans,
		'oston-tip-discount': TipDiscount
	},

	mounted() {
		_.controller('plan').getAll();
	},

	data() {
		return {
			promos: [
				{
					img: 'eletrolux',
					alt: 'Eletrolux com desconto de 15%, acesse clicando aqui',
					q: 'eletrolux'
				},
				{
					img: 'britania',
					alt: 'Linha Britania - 30% de desconto, acesse clicando aqui',
					q: 'britania'
				},
				{
					img: 'netshoes',
					alt: 'Todo site Netshoes - 15% de desconto, eu quero',
					q: 'netshoes'
				}
			],

			offers: [
				{
					id: '591',
					name: 'Cadeiras Gamers',
					img: 'mobly',
					alt: 'Cadeiras Gamers da Mobly 7%OFF - Aproveite'
				}
			]
		};
	},

	methods: {
		slugify,

		select: function(code) {
			this.plans.forEach((plan) => {
				if (plan.code === code) {
					_.controller('checkout').set({
						plan: plan,
						hasPlan: true
					});

					this.$router.push({ name: 'Checkout' });
				}
			});
		},

		selectOffer: function(id) {
			_.controller('offer').getById(id);
		},

		search: function(term) {
			_.controller('search').reset();
			_.controller('search').get(term);
		}
	},

	computed: mapGetters({
		plans: 'PlanModel/plans',
		loggedIn: 'AuthModel/hash'
	})
};
