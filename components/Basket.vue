<template>
	<BaseDropdown position="right" class="nav-item" menu-classes="dropdown-menu-xl">
		<a slot="title" href="#" class=" " data-toggle="dropdown" role="button">
			<span class="nav-link-inner--text"><i class="fad fa-shopping-basket fa-2x"></i></span>
		</a>
		<div class="dropdown-menu-inner">
			<p v-for="(item, index) in order" :key="index">{{ item.name }}</p>
		</div>
	</BaseDropdown>
</template>

<script>
import BaseDropdown from './BaseDropdown';

export default {
	components: {
		BaseDropdown
	},
	data() {
		return {};
	},
	computed: {
		order() {
			return this.$store.state.order.order;
		}
	}
};
</script>
<style></style>
