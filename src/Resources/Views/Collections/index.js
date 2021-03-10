// vuex
import { mapGetters } from 'vuex';

// components
import Menu from '@/Resources/Components/Menu/index.vue';
import Tip from '@/Resources/Components/Tip/index.vue';
import Carousel from '@/Resources/Components/Carousel/Collections/index.vue';
import ModalLogin from '@/Resources/Components/Modal/Login/index.vue';

// skeleton
import Skeleton from '@/Resources/Skeletons/Collections/index.vue';

// helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'Collections',
	components: {
    'oston-menu': Menu,
    'oston-tip': Tip,
    'oston-collections-carousel': Carousel,
    'oston-modal-login': ModalLogin,

    // skeleton
    'skeleton': Skeleton
	},

  methods: {
    slugify,

    toggleModalLogin: function() {
      this.loginIsOpen = true;
    }
  },

  data() {
    return {
      loginIsOpen: false
    }
  },

	mounted() {
    _.controller('category').getAll();
    _.controller('collection').getAll();
	},

	computed: mapGetters({
    categories: 'CategoryModel/categories',
    collections: 'CollectionModel/collections',
    loading: 'LoadingModel/loadingCollections',
    loggedIn: 'AuthModel/hash'
  })
};
