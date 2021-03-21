import Item from '@/Resources/Components/Carousel/Item/index.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'Carousel',

	components: {
		'carousel-item': Item
	},

	data() {
		return {
			timing: 5,
			actual: 1
		};
	},

	mounted() {
		setInterval(() => {
			if (this.actual === this.slides.length) {
				this.actual = 1;
			} else {
				this.actual += 1;
			}
		}, this.timing * 1000);
	},

  computed: mapGetters({
    slides: 'CarouselModel/slides'
  })
};
