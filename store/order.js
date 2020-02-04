export const state = () => ({
	order: []
});

export const mutations = {
	addToOrder(state, item) {
		state.order.push(item);
	}
};

export const getters = {
	getOrders: state => {
		return state.order;
	}
};

export const actions = {};
