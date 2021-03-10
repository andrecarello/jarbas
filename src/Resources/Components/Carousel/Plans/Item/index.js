// core
import { mapGetters } from 'vuex';
// components
import Apps from '@/Resources/Components/Carousel/Plans/Apps/index.vue';
import Price from '@/Resources/Components/Carousel/Plans/Price/index.vue';
import Benefits from '@/Resources/Components/Carousel/Plans/Benefits/index.vue';

// -> import helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'CarouselPlanItem',

	components: {
		'oston-apps': Apps,
		'oston-price': Price,
		'oston-benefits': Benefits
	},

	data() {
		return {
			show: false,
			benefitsIsOpen: false,
			loading: false
		};
	},

	props: {
		plan: {
			type: Object,
			required: true,
			default: () => console.log('CAROUSEL PLAN: The plan is required')
		},
		incentive: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	methods: {
		slugify,

		select: function(plan) {
			this.loading = true;
			this.ga();

			_.controller('checkout').set({
				plan: plan,
				hasPlan: true
			});

			setTimeout(() => this.$router.push({ name: 'Checkout' }), 1000);
      setTimeout(() => this.loading = false, 2000);
		},

		apps: function(str) {
			if (typeof str !== 'string') {
				console.log('Apps need to be a string');
				return false;
			}

			return str.toLowerCase().split(',');
		},

		total: function(data, append) {
			let sum = 0;

			data.forEach((item) => {
				sum += Number(item);
			});
			return sum + append;
		},

		ga: function() {
			_.controller('ga')
				.set('Oferta', {
					nome: this.offer.title,
					id: this.offer.id,
					cliente: this.offer.company_name,
					incentivo: this.incentive ? 'Sim' : 'Não',
					plano: this.plan.name + ' ' + (4 + Number(this.plan.data) + Number(this.plan.data_bonus)) + 'GB'
				})
				.post();
		}
	},

	computed: mapGetters({
		offer: 'OfferModel/offer'
	})
};
