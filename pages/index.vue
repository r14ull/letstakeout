<template>
	<div>
		<section class="section section-shaped my-0 overflow-hidden">
			<div
				class="shape shape-style-3 bg-gradient-default shape-skew bgimg"
				:style="{ backgroundImage: 'url(' + detail.images.banner + ')!important' }"
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="container pt-lg pb-300">
				<div class="row text-center justify-content-center">
					<div class="col-lg-10">
						<h2 class="display-3 text-white">{{ detail.name }} - {{ detail.city }}</h2>
						<p class="lead text-white">
							<span v-for="(food, index) in detail.cuisine" :key="food">
								<span v-if="index > 0">/</span>
								{{ food }}
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-lg pt-lg-0 section-contact-us mb-5">
			<div class="container">
				<div class="row justify-content-center mt--300">
					<div class="col-8">
						<category v-for="cat in categories" :key="cat.id" :category="cat"></category>
					</div>
					<div class="col-4">
						<card shadow body-classes="" class="mb-5 sticky-card">
							<template v-slot:header>
								<h4>Basket</h4>
							</template>

							<template v-slot:default>
								<Basket />
							</template>
						</card>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import Basket from '../components/Basket';
import category from '../components/forms/takeout/category';
export default {
	name: 'Components',
	components: {
		Basket,
		category
	},
	data() {
		return {
			categories: this.$store.state.categories,
			detail: this.$store.state.restaurant.detail,
			error: null
		};
	},
	fetch({ store, req }) {
		function slugify(string) {
			const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
			const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
			const p = new RegExp(a.split('').join('|'), 'g');

			return string
				.toString()
				.toLowerCase()
				.replace(/\s+/g, '-') // Replace spaces with -
				.replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
				.replace(/&/g, '-and-') // Replace & with 'and'
				.replace(/[^\w\-]+/g, '') // Remove all non-word characters
				.replace(/\-\-+/g, '-') // Replace multiple - with single -
				.replace(/^-+/, '') // Trim - from start of text
				.replace(/-+$/, ''); // Trim - from end of text
		}

		const domain = slugify(req.headers.host);

		store.$axios
			.$get('http://letstakeout.test/storage/detail-' + domain + '.json')
			.then(res => {
				store.commit('restaurant/SET_DETAIL', res);
			})
			.catch(function() {
				store.commit('restaurant/SET_ERROR', 'Detail File not found.');
			});

		return store.$axios
			.$get('http://letstakeout.test/storage/menu-' + domain + '.json')
			.then(res => {
				store.commit('SET_MENU', res);
			})
			.catch(function() {
				store.commit('SET_ERROR', 'Menu File not found.');
			});
	}
};
</script>

<style lang="scss" scoped>
.bgimg {
	background-size: 100% !important;
	background-repeat: no-repeat !important;
}
.sticky-card {
	position: -webkit-sticky;
	position: sticky;
	top: 2rem;
}
</style>
