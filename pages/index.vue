<template>
	<div>
		<section class="section section-shaped my-0 overflow-hidden">
			<div class="shape shape-style-3 bg-gradient-default shape-skew">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="container pt-lg pb-300">
				<div class="row text-center justify-content-center">
					<div class="col-lg-10">
						<h2 class="display-3 text-white">Get Started</h2>
						<p class="lead text-white">
							Some quick example text on why they should sign up and what they should expect.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-lg pt-lg-0 section-contact-us mb-5">
			<div class="container">
				<div class="row justify-content-center mt--300">
					<div class="col-12">
						<category v-for="cat in categories" :key="cat.id" :category="cat"></category>
					</div>
				</div>
			</div>
		</section>
		<section class="section section-lg">
			<div class="container">
				<div class="row row-grid justify-content-center">
					<div class="col-lg-8 text-center">
						<h2 class="display-3">
							TAKE BACK YOUR TAKEOUT
							<span class="text-success">Work on your time.</span>
						</h2>
						<p class="lead">
							Sign Up to WORKAPP and work for a variaety of workplaces as and when you want to work.
						</p>
						<div class="btn-wrapper">
							<nuxt-link to="/register" class="btn btn-primary mb-3 mb-sm-0">Get Started</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import category from '../components/forms/takeout/category';
import json from '../components/forms/takeout/menu-1.json';
export default {
	name: 'Components',
	components: {
		category
	},
	data() {
		return {
			categories: json
		};
	}
};
</script>
