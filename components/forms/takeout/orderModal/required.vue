<template>
	<div>
		<div v-if="selected" class="d-flex selected">
			<div><i class="fad fa-check-square"></i></div>
			<div>{{ item.name }}</div>
		</div>

		<div v-else v-for="accessories in variation" class="d-flex justify-content-between my-3">
			<div>{{ accessories.name }}</div>
			<div>
				<span>{{ accessories.formattedPrice }}</span>
				<span @click="handleClick(accessories)" class="icon icon-sm icon-shape shadow rounded-circle">
					<i class="fad fa-plus"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import varItems from '../variations';
export default {
	props: ['variation'],
	components: {
		varItems
	},
	data() {
		return {
			selected: false,
			item: null,
			count: 1
		};
	},
	methods: {
		handleClick(env) {
			this.item = env;
			this.selected = true;
			this.$emit('item', this.item);
		}
	}
};
</script>

<style scoped>
.selected {
	padding: 0px 10px;
	background-color: green;
	color: white;
}
</style>
