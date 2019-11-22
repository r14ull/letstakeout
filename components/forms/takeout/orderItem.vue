<template>
	<div class="row order-item">
		<div class="col-md-2 order-padding">icon</div>
		<div class="col-md-6 order-padding">Food Description</div>
		<div class="col-md-2"><quantity></quantity></div>
		<div class="col-md-2 order-padding">Alergies</div>
	</div>
</template>

<script>
import quantity from './quantity';
export default {
	name: 'orderitem',
	components: {
		quantity
	},
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
