<template>
	<div v-if="order.length">
		<h4>Basket</h4>
		<div v-for="(item, index) in order" :key="index" class="d-flex justify-content-between">
			<p>{{ item.name }}</p>
			<span style="vertical-align:middle" @click="remove(index)">
				<i class="fad fa-trash"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		order() {
			return this.$store.state.order.order;
		}
	},
	methods: {
		remove(p) {
			this.$store.commit('order/removeFromOrder', p);
		}
	}
};
</script>
<style></style>
