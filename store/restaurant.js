export const state = () => ({
	detail: null,
	error: null
});

export const mutations = {
	SET_DETAIL(state, detail) {
		state.detail = detail;
	},
	SET_ERROR(state, error) {
		state.error = error;
	}
};

export const getters = {
	DETAIL_GETTER: state => {
		return state.detail;
	}
};

export const actions = {};
