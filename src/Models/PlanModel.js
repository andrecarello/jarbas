export const defaultState = {
	plans: '',
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		plans: (state) => state.plans
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		savePlans({ commit }, value) {
			commit('setPlans', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setPlans(state, value) {
			state.plans = value;
		}
	}
};
