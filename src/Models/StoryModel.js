export const initialState = {
	stories: [],
  open: false,
  initial: 1,
};

export default {
	namespaced: true,

	state: initialState,

	getters: {
		stories: (state) => state.stories,
    open: (state) => state.open,
    initial: (state) => state.initial
	},

	actions: {
		save({ commit }, payload) {
			commit('set', payload);
		}
	},

	mutations: {
		set(state, data) {
			state[data.key] = data.data;
		}
	}
};
