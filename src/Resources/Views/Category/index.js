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
	name: 'OstonCategory',

	components: {
		'oston-layout': Layout,
		'oston-card-offer': Card,

		skeleton: Skeleton
	},

	mounted() {
		_.controller('category').getById(this.$route.params.id);
	},

	methods: {
		slugify
	},

	computed: mapGetters({
		category: 'CategoryModel/category',
		loading: 'LoadingModel/loadingCategory',
    theme: 'ThemeModel/theme'
	})
};
