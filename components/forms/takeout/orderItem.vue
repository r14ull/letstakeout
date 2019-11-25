<template>
	<div class="row order-item order-padding">
		<div class="col-md-8 ">
			<span class="font-weight-bold">{{ product.name }}</span
			><br />
			<div v-html="product.description"></div>
		</div>

		<div class="col-md-2"><quantity :variations="product"></quantity></div>
		<div class="col-md-2 ">Alergies</div>
	</div>
</template>

<script>
import quantity from './quantity';
export default {
	name: 'orderitem',
	components: {
		quantity
	},
	props: ['product'],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.order-padding {
	padding: 12px;
}
</style>
