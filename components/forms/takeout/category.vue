<template>
	<card gradient="secondary" shadow body-classes="p-lg-5">
		<template v-slot:header>
			<h1>Starters</h1>
		</template>

		<template v-slot:default>
			<orderItem></orderItem>
		</template>

		<template v-slot:footer>
			<h4>next</h4>
		</template>
	</card>
</template>

<script>
import orderItem from './orderItem';
export default {
	name: 'category',
	components: {
		orderItem
	},
	data() {
		return {};
	}
};
</script>

<style></style>
