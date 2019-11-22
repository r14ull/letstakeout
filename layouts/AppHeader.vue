<template>
	<header class="header-global">
		<BaseNav class="navbar-main" transparent type effect="light" expand>
			<nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
				<span class="font-weight-bold">WORKAPP - </span>
			</nuxt-link>

			<div slot="content-header" slot-scope="{ closeMenu }" class="row">
				<div class="col-6 collapse-brand">
					<a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
						DOCS
					</a>
				</div>
				<div class="col-6 collapse-close">
					<CloseButton @click="closeMenu"></CloseButton>
				</div>
			</div>

			<ul class="navbar-nav navbar-nav-hover align-items-lg-center">
				<BaseDropdown class="nav-item" menu-classes="dropdown-menu-xl">
					<a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
						<i class="ni ni-ui-04 d-lg-none"></i>
						<span class="nav-link-inner--text">Find...</span>
					</a>
					<div class="dropdown-menu-inner">
						<nuxt-link to="/jobs" class="media d-flex align-items-center">
							<div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
								<i class="ni ni-spaceship"></i>
							</div>
							<div class="media-body ml-3">
								<h6 class="heading text-primary mb-md-1">Job Listings</h6>
								<p class="description d-none d-md-inline-block mb-0">
									This is the place to look for short term job listings. Increase your experience by
									working in multiple workplaces!
								</p>
							</div>
						</nuxt-link>
						<nuxt-link to="/staff" class="media d-flex align-items-center">
							<div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
								<i class="ni ni-ui-04"></i>
							</div>
							<div class="media-body ml-3">
								<h5 class="heading text-warning mb-md-1">Staff on demand</h5>
								<p class="description d-none d-md-inline-block mb-0">
									Learn how to use WORKAPP to find short term staff and fill holes in your rota with a
									few clicks.
								</p>
							</div>
						</nuxt-link>
					</div>
				</BaseDropdown>
				<BaseDropdown tag="li" class="nav-item">
					<a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
						<i class="ni ni-collection d-lg-none"></i>
						<span class="nav-link-inner--text">Account</span>
					</a>
					<nuxt-link to="/landing" class="dropdown-item">Landing</nuxt-link>
					<nuxt-link to="/profile" class="dropdown-item">Profile</nuxt-link>
					<nuxt-link to="/login" class="dropdown-item">Login</nuxt-link>
					<nuxt-link to="/register" class="dropdown-item">Register</nuxt-link>
				</BaseDropdown>
			</ul>
			<ul class="navbar-nav align-items-lg-center ml-lg-auto">
				<li class="nav-item ml-lg-4">
					<button v-if="$auth.loggedIn" class="btn btn-neutral btn-icon" @click="$auth.logout()">
						<span class="btn-inner--icon">
							<i class="ni ni-circle-08"></i>
						</span>
						<span class="nav-link-inner--text">{{ $auth.user.name }} - Logout</span>
					</button>

					<nuxt-link v-else to="/Login" class="btn btn-neutral btn-icon">
						<span class="btn-inner--icon">
							<i class="ni ni-circle-08"></i>
						</span>
						<span class="nav-link-inner--text">Login</span>
					</nuxt-link>
				</li>
			</ul>
		</BaseNav>
	</header>
</template>
<script>
import BaseNav from '../components/BaseNav';
import BaseDropdown from '../components/BaseDropdown';
import CloseButton from '../components/CloseButton';

export default {
	components: {
		BaseNav,
		CloseButton,
		BaseDropdown
	}
};
</script>
<style></style>
