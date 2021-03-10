export const defaultState = {
	collections: [],
	collection: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		collections: (state) => state.collections,
		collection: (state) => state.collection
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveCollections({ commit }, value) {
			commit('setCollections', value);
		},
		saveCollection({ commit }, value) {
			commit('setCollection', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setCollections(state, value) {
			state.collections = value;
		},
		setCollection(state, value) {
			state.collection = value;
		}
	}
};
