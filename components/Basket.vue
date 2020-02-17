<template>
	<div v-if="order.length">
		<BasketItem v-for="(item, index) in order" :key="index" :item="item"></BasketItem>
	</div>
</template>

<script>
import BasketItem from '../components/BasketItem';
export default {
	components: { BasketItem },
	computed: {
		order() {
			return this.$store.state.order.order;
		}
	}
};
</script>
<style></style>
