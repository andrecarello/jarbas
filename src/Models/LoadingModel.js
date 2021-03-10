export const defaultState = {
	loading: false,
	loadingPlans: false,
	loadingCollections: false,
	loadingCollection: false,
	loadingCategory: false,
	loadingOffer: false,
	loadingSearch: false
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		loading: (state) => state.loading,
		loadingPlans: (state) => state.loadingPlans,
		loadingCollections: (state) => state.loadingCollections,
		loadingCollection: (state) => state.loadingCollection,
		loadingCategory: (state) => state.loadingCategory,
		loadingOffer: (state) => state.loadingOffer,
		loadingSearch: (state) => state.loadingSearch
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveLoading({ commit }, value) {
			commit('setLoading', value);
		},
		saveLoadingPlans({ commit }, value) {
			commit('setLoadingPlans', value);
		},
		saveLoadingCollections({ commit }, value) {
			commit('setLoadingCollections', value);
		},
		saveLoadingCollection({ commit }, value) {
			commit('setLoadingCollection', value);
		},
		saveLoadingCategory({ commit }, value) {
			commit('setLoadingCategory', value);
		},
		saveLoadingOffer({ commit }, value) {
			commit('setLoadingOffer', value);
		},
		saveLoadingSearch({ commit }, value) {
			commit('setLoadingSearch', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setLoading(state, value) {
			state.loading = value;
		},
		setLoadingPlans(state, value) {
			state.loadingPlans = value;
		},
		setLoadingCollections(state, value) {
			state.loadingCollections = value;
		},
		setLoadingCollection(state, value) {
			state.loadingCollection = value;
		},
		setLoadingCategory(state, value) {
			state.loadingCategory = value;
		},
		setLoadingOffer(state, value) {
			state.loadingOffer = value;
		},
		setLoadingSearch(state, value) {
			state.loadingSearch = value;
		}
	}
};
