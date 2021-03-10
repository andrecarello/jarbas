// core
import { mapGetters } from 'vuex';

// components
import Layout from '@/Resources/Layout/Category/index.vue';
import Card from '@/Resources/Components/Card/index.vue';

// skeleton
import Skeleton from '@/Resources/Skeletons/Category/index.vue';

// helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'OstonCollection',

	components: {
		'oston-layout': Layout,
    'oston-card-offer': Card,

		// skeleton
		skeleton: Skeleton
	},

  mounted() {
    window.scrollTo(0, 0);
  },

	methods: {
		slugify
	},

	computed: mapGetters({
		collection: 'CollectionModel/collection',
		loading: 'LoadingModel/loadingCollection',
    theme: 'ThemeModel/theme',
    loggedIn: 'AuthModel/hash'
	})
};
