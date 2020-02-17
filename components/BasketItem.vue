<template>
	<div class="d-flex">
		<div>
			<span style="vertical-align:middle" @click="remove(index)">
				<i class="fad fa-trash"></i>
			</span>
		</div>
		<div>
			{{ item.name }}<br />
			<span class="btn btn-link btn-sm" @click="show = !show">Details...</span>
			<div v-if="show">
				<p v-if="item.descriptiona">{{ item.descriptiona }}</p>
				<ul>
					<li v-for="oa in item.optionalAccessory">{{ oa.name }}</li>
					<li v-for="ra in item.requiredAccessory">{{ ra.name }}</li>
					<li v-for="rp in item.requiredProduct">{{ rp.name }}</li>
				</ul>
			</div>
		</div>
		<div class="ml-auto">£{{ item.itemTotal }}</div>
	</div>
</template>

<script>
export default {
	props: ['item'],
	data() {
		return {
			show: false
		};
	},
	methods: {
		remove(p) {
			this.$store.commit('order/removeFromOrder', p);
		}
	}
};
</script>
<style lang="scss" scoped></style>
