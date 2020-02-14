<template>
	<div class="d-flex">
		<span class="icon icon-shape  shadow rounded-circle" @click="AddToOrder">
			<i class="fad fa-plus-hexagon"></i>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			default: null,
			description: 'Simple product to add to Order.'
		}
	},
	methods: {
		AddToOrder() {
			this.product.itemTotal = this.product.price.toFixed(2);
			this.$store.commit('order/addToOrder', this.product);
		}
	}
};
</script>

<style></style>
