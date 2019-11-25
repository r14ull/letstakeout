<template>
	<card gradient="secondary" shadow body-classes="p-lg-5">
		<template v-slot:header>
			<h1>{{ category.name }}</h1>
		</template>

		<template v-slot:default>
			<orderItem v-for="(products, index) in category.products" :product="products" :key="index"></orderItem>
		</template>

		<template v-slot:footer>
			<h4>{{ category.description }}</h4>
		</template>
	</card>
</template>

<script>
import orderItem from './orderItem';
export default {
	components: {
		orderItem
	},
	props: ['category'],
	data() {
		return {};
	}
};
</script>

<style></style>
