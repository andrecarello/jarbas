export const defaultState = {
	theme: 'red'
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		theme: (state) => state.theme
	},

	actions: {
		reset({ commit }) {
			commit('setReset');
		},
		saveTheme({ commit }, value) {
			commit('setTheme', value);
		}
	},

	mutations: {
		setReset(state, value) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setTheme(state, value) {
			state.theme = value;
		}
	}
};
