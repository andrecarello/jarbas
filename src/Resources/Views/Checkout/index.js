// core
import {mapGetters} from 'vuex';

// helpers
import { Masks as mask } from '@/Helpers/Mask';

export default {
	name: 'OstonCheckoutView',

	methods: {
		count: function(value, max) {
			return mask.unset(value).length < max;
		},
	},

  computed: mapGetters({
    plan: 'CheckoutModel/plan'
  })
};
