export const defaultState = {
	term: '',
	offers: [],
	lastPage: 0
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		term: (state) => state.term,
		offers: (state) => state.offers,
		lastPage: (state) => state.lastPage
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveTerm({ commit }, value) {
			commit('setTerm', value);
		},
		saveOffers({ commit }, value) {
			commit('setOffers', value);
		},
		saveLastPage({ commit }, value) {
			commit('setLastPage', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setTerm(state, value) {
			state.term = value;
		},
		setOffers(state, value) {
			state.offers = value;
		},
		setLastPage(state, value) {
			state.lastPage = value;
		}
	}
};
