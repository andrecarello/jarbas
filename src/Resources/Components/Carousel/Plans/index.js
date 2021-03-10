import { mapGetters } from 'vuex';

// -> theme
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

// -> components
import VueSlickCarousel from 'vue-slick-carousel';
import Item from '@/Resources/Components/Carousel/Plans/Item/index.vue';

// skeleton
import Skeleton from '@/Resources/Skeletons/Plans/index.vue';


export default {
	name: 'CarouselPlans',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Escolha seu plano:'
    },
    incentive: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

	components: {
		'vue-slick-carousel': VueSlickCarousel,
    'oston-item': Item,

    // skeleton
    'skeleton': Skeleton,
  },

	computed: mapGetters({
    plans: 'PlanModel/plans',
    loadingPlans: 'LoadingModel/loadingPlans'
  })
};
