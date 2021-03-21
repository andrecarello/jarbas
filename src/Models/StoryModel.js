export const initialState = {
	stories: []
};

export default {
	namespaced: true,

	state: initialState,

	getters: {
		stories: (state) => state.stories
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
