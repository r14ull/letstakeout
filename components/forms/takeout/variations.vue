<template>
	<div>
		<div class="d-flex justify-content-between my-1">
			<div>{{ variation.name }}</div>
			<div>
				<span>{{ variation.formattedPrice }}</span>
				<span @click="minus" class="icon icon-sm icon-shape shadow rounded-circle">
					<i class="fad fa-minus"></i>
				</span>
				<span @click="add" class="icon icon-sm icon-shape shadow rounded-circle">
					<i class="fad fa-plus"></i>
				</span>
			</div>
		</div>
		<div v-if="variation.quantity" class="d-flex justify-content-between my-3 bg-secondary">
			<div>{{ variation.quantity }}x</div>
			<div>£{{ (variation.price * variation.quantity).toFixed(2) }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['variation'],
	data() {
		return {
			count: 0
		};
	},
	methods: {
		add(evt) {
			this.variation.quantity++;
			this.$emit('item', this.variation);
		},
		minus() {
			this.variation.quantity > 0 ? this.variation.quantity-- : null;
			this.$emit('item', this.variation);
		}
	}
};
</script>

<style lang="scss">
.icon {
	cursor: pointer;
	&:hover {
		background-color: #525f7f;
		color: white;
	}
}
</style>
