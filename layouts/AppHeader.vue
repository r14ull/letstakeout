<template>
	<header class="header-global">
		<BaseNav class="navbar-main" transparent type effect="light" expand>
			<nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
				<span class="font-weight-bold">Lets take out</span>
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
