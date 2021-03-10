// components
import Price from '../Price/index.vue';
import { strOnlyNumber, slugify } from '@/Helpers/Misc';

export default {
	name: 'CollectionsItem',
	props: {
		content: {
			type: Array | Object,
			required: true,
			default: () => console.log('Collections Item: The CONTENT is required')
		},
		theme: {
			type: String | Number,
			required: false,
			default: 'red'
		},
    collection: {
      type: String,
      required: false
    },
		logged: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	components: {
		'oston-collections-price': Price
	},

	methods: {
		strOnlyNumber,
		slugify,

		select: function(content, collection, theme) {
			_.controller('offer').getById(content.id);
			_.controller('theme').set(theme);

			_.controller('ga').set('Coleção', {
        oferta: content.title,
        id: content.id,
        cliente: content.company_name,
        coleção: collection
      }).post();
		}
	}
};
