export const state = () => ({
	order: []
});

export const mutations = {
	addToOrder(state, item) {
		state.order.push(item);
	},
	removeFromOrder(state, payLoad) {
		state.order.splice(payLoad, 1);
	}
};

export const getters = {
	getOrders: state => {
		return state.order;
	}
};

export const actions = {};
