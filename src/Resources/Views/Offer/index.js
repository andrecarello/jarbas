// core
import { mapGetters } from 'vuex';

// components
import Price from '@/Resources/Views/Offer/Price/index.vue';
import Step from '@/Resources/Views/Offer/Step/index.vue';
import Modal from '@/Resources/Components/Modal/Coupon/index.vue';
import CarouselPlans from '@/Resources/Components/Carousel/Plans/index.vue';

// helpers
import { strOnlyNumber } from '@/Helpers/Misc';

// skeleton
import Skeleton from '@/Resources/Skeletons/Offer/index.vue';

export default {
	name: 'Offer',

	mounted() {
		window.scrollTo(0, 0);

    if (_.model('plan').plans.length < 1) {
      _.controller('plan').getAll();
    }
	},

	data() {
		return {
			// bools
			isCollapseOpen: false,
			isGetVoucher: false,

			// string
			voucher: '',

			// sizes
			height: 0,

			// loadings
			isLoadingVoucher: false
		};
	},

	components: {
		'oston-price': Price,
		'oston-step': Step,

		'oston-modal': Modal,
    'oston-carousel-plans': CarouselPlans,

    // skeleton
		'skeleton': Skeleton,
	},

	methods: {
		strOnlyNumber,

		toggle: function() {
			const collapse = this.$refs.collapse;

			this.isCollapseOpen = !this.isCollapseOpen;
			this.height = this.isCollapseOpen ? collapse.clientHeight + 'px' : '0px';
		},

    ga: function(tipo) {
      _.controller('ga').set('Oferta', {
        oferta: this.offer.title,
        id: this.offer.id,
        marca: this.offer.company_name,
        tipo: tipo
      }).post()
    },

		getVoucher: function() {
			this.isLoadingVoucher = true;
			_.controller('offer')
				.getCoupon()
				.then(({ data }) => {
					this.voucher = data.pivot.coupon_code;

          this.ga('Cupom')
				})
				.catch(({ response }) => console.log(response))
				.finally(() => {
					this.isGetVoucher = true;
					this.isLoadingVoucher = false;
				});
		},

    redirect: function(e) {
      const href = e.target.href;

      this.ga('Redirecionamento');
      window.open(href, '_blank');
    }
	},

	computed: mapGetters({
		offer: 'OfferModel/offer',
		loading: 'LoadingModel/loadingOffer',
    loggedIn: 'AuthModel/hash',
    theme: 'ThemeModel/theme'
	})
};
