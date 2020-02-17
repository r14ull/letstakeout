<template>
	<div v-if="product != null" class="d-flex justify-content-between order-item order-padding">
		<div class="mr-auto">
			<span class="font-weight-bold">{{ product.name }}</span
			><br />
			<div v-html="product.description"></div>
		</div>

		<div class="base-order-price">
			<span>£ {{ product.price.toFixed(2) }}</span>
		</div>

		<div>
			<quantity v-if="isSimpleProduct()" :variations="product"></quantity>
			<simple v-else :product="product"></simple>
		</div>
	</div>
</template>

<script>
import quantity from './quantity';
import simple from './simple';
export default {
	name: 'Orderitem',
	components: {
		quantity,
		simple
	},
	props: ['product'],
	data() {
		return {};
	},
	methods: {
		isSimpleProduct() {
			const simpleProduct =
				this.product.optional_accessories.length +
				this.product.required_products.length +
				this.product.required_accessories.length;
			return simpleProduct > 0;
		}
	}
};
</script>

<style lang="scss" scoped>
.order-padding {
	padding: 12px;
}
.base-order-price {
	width: 80px;
}
</style>
