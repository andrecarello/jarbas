export const defaultState = {
	qs: '',
	load: false
};

export default {
	namespaced: true,

	getters: {
		qs: (state) => state.qs,
		load: (state) => state.load
	},

	actions: {
		reset({ commit }) {
			reset('reset');
		},
		saveQs({ commit }, value) {
			commit('setQs', value);
		},
		saveLoad({ commit }, value) {
			commit('setLoad', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setQs(state, value) {
			state.qs = value;
		},
		setLoad(state, value) {
			state.load = value;
		}
	}
};
