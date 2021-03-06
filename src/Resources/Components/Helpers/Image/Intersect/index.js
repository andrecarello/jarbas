// -> import core
import Intersect from 'vue-intersect';

export default {
	name: 'IntersectImage',
	props: {
    source: {
      type: String,
      required: true,
      default: () => console.log('The image source is required.')
    },
    alt: {
      type: String,
      required: true,
      default: () => console.log('The alternative text is required.')
    }
  },
	components: {
		Intersect
	},
	data() {
		return {
			loaded: false,
			intersected: false
		};
	},
	methods: {
		onLoaded() {
			this.loaded = true;
		}
	}
};
