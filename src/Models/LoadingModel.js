export const defaultState = {
	loading: false
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		loading: (state) => state.loading
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveLoading({ commit }, value) {
			commit('setLoading', value);
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
		}
	}
};
