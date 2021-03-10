export const defaultState = {
	categories: [],
	category: {}
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		categories: (state) => state.categories,
		category: (state) => state.category
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveCategories({ commit }, value) {
			commit('setCategories', value);
		},
		saveCategory({ commit }, value) {
			commit('setCategory', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setCategories(state, value) {
			state.categories = value;
		},
		setCategory(state, value) {
			state.category = value;
		}
	}
};
