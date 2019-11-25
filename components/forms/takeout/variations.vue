<template>
	<div>
		<div class="d-flex justify-content-between my-3">
			<div>{{ variation.name }}</div>
			<div>
				<span>{{ variation.formattedPrice }}</span>
				<span @click="minus" class="icon icon-sm icon-shape shadow rounded-circle">
					<i class="fal fa-minus"></i>
				</span>
				<span @click="add" class="icon icon-sm icon-shape shadow rounded-circle">
					<i class="fal fa-plus"></i>
				</span>
			</div>
		</div>
		<div v-if="count" class="d-flex justify-content-between my-3 bg-secondary">
			<div>{{ count }}x</div>
			<div>£{{ (variation.price * count).toFixed(2) }}</div>
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
			this.count++;
		},
		minus() {
			this.count > 0 ? this.count-- : null;
        },

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
