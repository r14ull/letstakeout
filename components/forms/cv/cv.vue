<template>
	<div id="cv">
		<h4 class="mb-1">Create your CV</h4>
		<p class="mt-0">Build your CV and start getting work!</p>
		<base-progress type="primary" :value="progress()" label="Task"></base-progress>
		<step1 v-if="this.$store.state.cv.step === 0"></step1>
		<step2 v-if="this.$store.state.cv.step === 1"></step2>
		<step3 v-if="this.$store.state.cv.step === 2"></step3>
		<show v-if="this.$store.state.cv.step === 3"></show>
	</div>
</template>

<script>
import step1 from './step1';
import step2 from './step2';
import step3 from './step3';
import show from './show';
export default {
	components: {
		step1,
		step2,
		step3,
		show
	},
	methods: {
		progress() {
			return 33 * this.$store.state.cv.step;
		}
	}
};
</script>
