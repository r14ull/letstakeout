<template>
	<footer class="footer has-cards">
		<div class="container container-lg">
			<div class="row">
				<div class="col-md-6 mb-5 mb-md-0">
					<div class="card card-lift--hover shadow border-0">
						<nuxt-link class="shadow" to="/" title="Landing Page">
							<img class="card-img" data-src="/images/rrrr.jpg" src="/images/rrrr.jpg" lazy="loaded" />
						</nuxt-link>
					</div>
				</div>
				<div class="col-md-6 mb-5 mb-lg-0">
					<div class="card card-lift--hover shadow border-0">
						<nuxt-link class="shadow" to="/" title="Profile Page">
							<img class="card-img" data-src="/images/llll.jpg" src="/images/llll.jpg" lazy="loaded" />
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row row-grid align-items-center my-md">
				<div class="col-lg-6">
					<h3 class="text-primary font-weight-light mb-2">{{ detail.name }}</h3>
					<h4 class="mb-0 font-weight-light text-light">{{ detail.street }} - {{ detail.city }}.</h4>
				</div>
				<div class="col-lg-6 text-lg-center btn-wrapper">
					<a
						target="_blank"
						rel="noopener"
						href="https://twitter.com/creativetim"
						data-toggle="tooltip"
						data-original-title="Follow us"
						class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
					>
						<i class="fab fa-twitter"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://www.facebook.com/creativetim"
						data-toggle="tooltip"
						data-original-title="Like us"
						class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
					>
						<i class="fab fa-facebook-square"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://dribbble.com/creativetim"
						data-toggle="tooltip"
						data-original-title="Follow us"
						class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
					>
						<i class="fab fa-dribbble"></i>
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://github.com/creativetimofficial"
						data-toggle="tooltip"
						data-original-title="Star on Github"
						class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
					>
						<i class="fab fa-github"></i>
					</a>
				</div>
			</div>
			<hr />
			<div class="row align-items-center justify-content-md-between">
				<div class="col-md-6">
					<div class="copyright">
						© {{ year }}
						<a href="https://letstakeout.com" target="_blank" rel="noopener">Lets take out</a>
					</div>
				</div>
				<div class="col-md-6"></div>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	name: 'AppFooter',
	data() {
		return {
			year: new Date().getFullYear(),
			detail: this.$store.state.restaurant.detail
		};
	}
};
</script>
<style></style>
