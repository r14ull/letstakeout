<template>
	<header class="header-global">
		<BaseNav class="navbar-main" transparent type effect="light" expand>
			<nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
				<img
					:src="this.$store.state.restaurant.detail.images.logo"
					:alt="this.$store.state.restaurant.detail.name"
				/>
			</nuxt-link>

			<div slot="content-header" slot-scope="{ closeMenu }" class="row">
				<div class="col-6 collapse-brand">
					Lets Take Out
				</div>
				<div class="col-6 collapse-close">
					<CloseButton @click="closeMenu"></CloseButton>
				</div>
			</div>
			<ul class="navbar-nav align-items-lg-center ml-lg-auto">
				<li class="nav-item ml-lg-4">
					<button v-if="$auth.loggedIn" class="btn btn-neutral btn-icon" @click="$auth.logout()">
						<span class="btn-inner--icon">
							<i class="ni ni-circle-08"></i>
						</span>
						<span class="nav-link-inner--text">{{ $auth.user.name }} - Logout</span>
					</button>

					<LoginModal v-else />
				</li>
			</ul>
		</BaseNav>
	</header>
</template>
<script>
import BaseNav from '../components/BaseNav';
import LoginModal from '../components/LoginModal';
import CloseButton from '../components/CloseButton';

export default {
	components: {
		BaseNav,
		CloseButton,
		LoginModal
	}
};
</script>
<style>
.navbar-brand img {
	height: 60px;
	width: 60px;
}
</style>
