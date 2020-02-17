<template>
	<div>
		<base-button block type="default" @click="loginOpen = true">
			Login
		</base-button>

		<modal :show.sync="loginOpen" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
			<card
				type="secondary"
				shadow
				header-classes="bg-white pb-5"
				body-classes="px-lg-5 py-lg-5"
				class="border-0"
			>
				<template>
					<div class="text-muted text-center mb-3">
						<small>Sign in with</small>
					</div>
					<div class="btn-wrapper text-center">
						<base-button type="neutral">
							<img
								slot="icon"
								src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg"
							/>
							Github
						</base-button>

						<base-button type="neutral">
							<img
								slot="icon"
								src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg"
							/>
							Google
						</base-button>
					</div>
				</template>
				<template>
					<div class="text-center text-muted mb-4">
						<small>Or sign in with credentials</small>
					</div>
					<form role="form">
						<base-input v-model="email" class="mb-3" placeholder="Email" addon-left-icon="fad fa-at">
						</base-input>
						<base-input
							v-model="pw"
							type="password"
							placeholder="Password"
							addon-left-icon="fad fa-lock-open-alt"
						>
						</base-input>
						<base-checkbox>
							Remember me
						</base-checkbox>
						<div class="text-center">
							<base-button type="primary" class="my-4">Sign In</base-button>
						</div>
					</form>
				</template>
			</card>
		</modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginOpen: false,
			email: null,
			pw: null
		};
	},
	methods: {
		login() {
			this.$auth.loginWith('local', {
				data: {
					username: this.email,
					password: this.pw
				}
			});
		}
	}
};
</script>
