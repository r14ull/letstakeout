<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default"></div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
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
            </template>
            <template>
              <form @submit.prevent="login">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  v-model="user.username"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-checkbox>Remember me</base-checkbox>
                <div class="text-center">
                  <base-button nativeType="submit" type="primary" class="my-4">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'r2@msn.com',
        password: 'polopr1000'
      }
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', {
        data: {
          username: 'r2@msn.com',
          password: 'polopr1000'
        }
      })
    }
  }
}
</script>

<style>
</style>
