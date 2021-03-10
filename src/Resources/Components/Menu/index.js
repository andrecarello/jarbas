// core
import { mapGetters } from 'vuex';

// helpers
import { slugify, bodyOverflow } from '@/Helpers/Misc';

export default {
	name: 'Menu',

	props: {
		categories: {
			type: Array,
			required: true,
			default: () => console.log('Menu: The CATEGORIES is required')
		}
	},

	data() {
		return {
			form: {
				search: ''
			},

			// bools
			isOpen: false,
			isSearchBarOpen: false,

      // fix this name
      loading: {
        logout: false
      }
		};
	},
	methods: {
		slugify,

    ga: function(category) {
      _.controller('ga').set('Categoria', {
        nome: category.name,
        id: category.id
      }).post();

      this.toggle();
    },

		toggle: function() {
			this.isOpen = !this.isOpen;
			bodyOverflow(this.isOpen);
		},

		search: function() {
			_.controller('search').reset();
			this.$router.push('/pesquisa');
			_.controller('search').get(this.form.search);
		},

		logout: function() {
			this.loading.logout = true;

			setTimeout(() => {
				this.loading.logout = false;
        bodyOverflow(this.loading.logout);
				_.controller('auth').logout();
			}, 4000);
		}
	},

	computed: mapGetters({
		loggedIn: 'AuthModel/hash'
	})
};
