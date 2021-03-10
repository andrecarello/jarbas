// core
import { mapGetters } from 'vuex';

import Apps from '@/Resources/Views/Checkout/Form/Payment/Apps/index.vue'

export default {
  name: "OstonCheckoutPaymentPlan",

  components: {
    'oston-checkout-payment-apps': Apps
  },

  computed: mapGetters({
    plan: 'CheckoutModel/plan'
  })
}
