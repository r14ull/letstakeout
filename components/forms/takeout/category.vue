<template>
	<card :id="category.id" gradient="secondary" shadow body-classes="p-lg-3" class="mb-5">
		<template v-slot:header>
			<h1>{{ category.name }}</h1>
		</template>

		<template v-slot:default>
			<orderItem v-for="(product, index) in category.products" :key="index" :product="product"></orderItem>
		</template>

		<template v-if="category.description" v-slot:footer>
			<h6>{{ category.description }}</h6>
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
