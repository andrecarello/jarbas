export default {
	name: 'OstonLayoutCheckout',

  props: {
    title: String,
    step: Number | String
  },

	methods: {
		reset: function() {
			_.controller('checkout').reset();
		}
	}
};
