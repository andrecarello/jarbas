export const defaultState = {
	plan: {},
	hasPlan: false,
	msisdn: '',
	referer: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		plan: (state) => state.plan,
		hasPlan: (state) => state.hasPlan,
		msisdn: (state) => state.msisdn,
		referer: (state) => state.referer
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		savePlan({ commit }, value) {
			commit('setPlan', value);
		},
		saveHasPlan({ commit }, value) {
			commit('setHasPlan', value);
		},
		saveMsisdn({ commit }, value) {
			commit('setMsisdn', value);
		},
		saveReferer({ commit }, value) {
			commit('setReferer', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setPlan(state, value) {
			state.plan = value;
		},
		setHasPlan(state, value) {
			state.hasPlan = value;
		},
		setMsisdn(state, value) {
			state.msisdn = value;
		},
		setReferer(state, value) {
			state.referer = value;
		}
	}
};
