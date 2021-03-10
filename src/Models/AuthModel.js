export const defaultState = {
	msisdn: '',
	ddd: '',
	hash: '',
	cluster: 0
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		msisdn: (state) => state.msisdn,
		ddd: (state) => state.ddd,
		hash: (state) => state.hash,
		cluster: (state) => state.cluster
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveMsisdn({ commit }, value) {
			commit('setMsisdn', value);
		},
		saveDdd({ commit }, value) {
			commit('setDdd', value);
		},
		saveHash({ commit }, value) {
			commit('setHash', value);
		},
		saveCluster({ commit }, value) {
			commit('setCluster', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setMsisdn(state, value) {
			state.msisdn = value;
		},
		setDdd(state, value) {
			state.ddd = value;
		},
		setHash(state, value) {
			state.hash = value;
		},
    setCluster(state, value) {
      state.cluster = value
    }
	}
};
