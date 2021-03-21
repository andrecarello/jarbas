export const initialState = {
	slides: []
};

export default {
	namespaced: true,

	state: initialState,

	getters: {
		slides: (state) => state.slides
	},

	actions: {
		save({ commit }, payload) {
			commit('set', payload);
		}
	},

	mutations: {
		set(state, payload) {
			state[payload.key] = payload.data;
		}
	}
};
