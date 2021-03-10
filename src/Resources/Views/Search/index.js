// core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// components
import Layout from '@/Resources/Layout/Category/index.vue';
import Card from '@/Resources/Components/Card/index.vue';

// skeleton
import Skeleton from '@/Resources/Skeletons/Category/index.vue';

// helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'OstonSearch',

	data() {

    const $form = {
      term: ''
    }

		return {
			page: 1,
			loadingMore: false,
      form: $form
		};
	},

  mounted() {
    window.scrollTo(0, 0);
  },

	components: {
		'oston-layout': Layout,
		'oston-card-offer': Card,

		skeleton: Skeleton
	},

	methods: {
		slugify,

		more: function() {
			this.page = this.page + 1;
			this.loadingMore = true;
			_.controller('search').get(this.term, this.page, () => {
				this.loadingMore = false;
			});
		},

    search: function() {
      _.controller('search').get(this.form.term, 1);
    }
	},

	computed: mapGetters({
		offers: 'SearchModel/offers',
    lastPage: 'SearchModel/lastPage',
		term: 'SearchModel/term',
		loading: 'LoadingModel/loadingSearch',
    loggedIn: 'AuthModel/hash',
    theme: 'ThemeModel/theme'
	})
};
