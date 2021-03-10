// core
import { mapGetters } from 'vuex';

// components
import CarouselItem from './Item/index.vue';

export default {
	name: 'CollectionsCarouselItem',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Coleção'
		},
		content: {
			type: Array | Object,
			required: true,
			default: () => console.log('Collections Carousel: The CONTENT is required')
		},
		link: {
			type: Object,
			required: true
		},
		theme: {
			type: String | Number,
			required: false,
			default: 'red'
		}
	},

	components: {
		'oston-collections-item': CarouselItem
	},

	methods: {
    select: function(id) {
      _.controller('collection').getById(id);
      _.controller('theme').set(this.theme);
    },
	},

	computed: mapGetters({
		loggedIn: 'AuthModel/hash'
	})
};
