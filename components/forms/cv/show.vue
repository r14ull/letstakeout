<template>
	<div>
		<pre>{{ cvInput }}</pre>
		<base-button type="default" round block size="lg" @click="fort()">for</base-button>
		<base-button type="default" round block size="lg" @click="submit()">submit</base-button>
		<base-button type="default" round block size="lg" @click="back()">Back</base-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cvInput: this.$store.state.cv.cvInput
		};
	},
	methods: {
		fort() {
			this.$store.commit('cv/setSubmitInfo');
			this.cvInput = this.$store.state.cv.submitData;
		},
		back() {
			this.$store.commit('cv/back');
		},
		submit() {
			this.$store.commit('cv/setSubmitInfo');
			this.$axios
				.$post('api/cv/updateOrCreate', {
					input: this.$store.state.cv.submitData
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
};
</script>
