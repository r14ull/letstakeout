<template>
	<div>
		<h4>{{ stepTitle }}</h4>
		<base-alert v-if="verrors" type="danger">
			{{ verrors }}
		</base-alert>
		<base-input
			v-model="experience.jobTitle"
			label="Job Title"
			placeholder="Chef / Waiter / etc"
			alternative
			:valid="$isValid($v.experience.jobTitle)"
			:error="$errormessage($v.experience.jobTitle)"
		></base-input>

		<base-input
			v-model="experience.company"
			label="Company"
			placeholder="Smiths Enterprise LTD"
			alternative
			:valid="$isValid($v.experience.company)"
			:error="$errormessage($v.experience.company)"
		></base-input>

		<base-input
			class="mt-3"
			label="About your job."
			:valid="$isValid($v.experience.description)"
			:error="$errormessage($v.experience.description)"
		>
			<textarea
				v-model="experience.description"
				class="form-control form-control-alternative"
				rows="4"
				cols="80"
				placeholder="Describe your position and any significant accomplishments."
			></textarea>
		</base-input>

		<base-input
			label="Select Your Neast City or Town"
			class="mt-3"
			:valid="$isValid($v.experience.location)"
			:error="$errormessage($v.experience.location)"
			required
		>
			<b-form-select
				v-model="experience.location"
				class="form-control form-control-alternative"
				:options="this.$store.state.cv.citiesTowns"
			></b-form-select>
		</base-input>

		<div class="row">
			<div class="col-md-6">
				<base-input
					label="joinedMonth"
					class="mt-3"
					:valid="$isValid($v.experience.joinedMonth)"
					:error="$errormessage($v.experience.joinedMonth)"
					required
				>
					<b-form-select
						v-model="experience.joinedMonth"
						class="form-control form-control-alternative"
						:options="this.$store.state.cv.months"
					></b-form-select>
				</base-input>
			</div>
			<div class="col-md-6">
				<base-input
					label="joinedYear"
					class="mt-3"
					:valid="$isValid($v.experience.joinedYear)"
					:error="$errormessage($v.experience.joinedYear)"
					required
				>
					<b-form-select
						v-model="experience.joinedYear"
						class="form-control form-control-alternative"
						:options="this.$store.state.cv.years"
					></b-form-select>
				</base-input>
			</div>
		</div>

		<div>
			<div><label>Is this your current job?</label></div>
			<BaseSwitch v-model="experience.current" label="Current Job?"></BaseSwitch>
		</div>

		<div v-if="!experience.current" class="row">
			<div class="col-md-6">
				<base-input
					label="exitMonth"
					class="mt-3"
					:valid="$isValid($v.experience.exitMonth)"
					:error="$errormessage($v.experience.exitMonth)"
					required
				>
					<b-form-select
						v-model="experience.exitMonth"
						class="form-control form-control-alternative"
						:options="this.$store.state.cv.months"
					></b-form-select>
				</base-input>
			</div>
			<div class="col-md-6">
				<base-input
					label="exitYear"
					class="mt-3"
					:valid="$isValid($v.experience.exitYear)"
					:error="$errormessage($v.experience.exitYear)"
					required
				>
					<b-form-select
						v-model="experience.exitYear"
						class="form-control form-control-alternative"
						:options="this.$store.state.cv.years"
					></b-form-select>
				</base-input>
			</div>
		</div>

		<base-button type="default" round @click="add()">Add Experience</base-button>

		<hr v-if="step.experiences.length" />

		<b-card v-for="(exp, index) in step.experiences" :key="index" class="experience">
			<div class="row">
				<div class="col-md-8">
					<h4 class="card-title">{{ exp.jobTitle }}</h4>
					<h6 class="card-subtitle">{{ exp.company }}</h6>
					<b-card-text>
						{{ exp.description }}
					</b-card-text>
				</div>
				<div class="col-md-4">
					<b-card-text>Joined: {{ exp.joinedMonth }} / {{ exp.joinedYear }}</b-card-text>
					<b-card-text>Exit: {{ exp.exitMonth }} / {{ exp.exitYear }}</b-card-text>
					<base-button class="card-link" size="sm" type="danger" block @click="del(index)"
						>Delete
					</base-button>
				</div>
			</div>
		</b-card>

		<hr />

		<base-button type="default" round block size="lg" @click="next()">Next</base-button>
		<base-button type="default" round block size="lg" @click="back()">Back</base-button>
	</div>
</template>
<script>
import { required, requiredIf } from 'vuelidate/lib/validators';
export default {
	data() {
		return {
			stepTitle: 'Work Experience',
			step: {
				experiences: []
			},
			experience: {
				jobTitle: null,
				company: null,
				sector: null,
				location: null,
				description: null,
				joinedMonth: null,
				joinedYear: null,
				exitMonth: null,
				exitYear: null,
				current: true
			},
			verrors: null
		};
	},
	created() {
		if (this.$store.getters['cv/updateDataOnBack']) {
			this.step = this.$store.state.cv.cvInput[1];
		}
	},
	validations: {
		experience: {
			jobTitle: { required },
			company: { required },
			location: { required },
			description: { required },
			joinedMonth: { required },
			joinedYear: { required },
			exitMonth: {
				required: requiredIf(function() {
					return !this.experience.current;
				})
			},
			exitYear: {
				required: requiredIf(function() {
					return !this.experience.current;
				})
			}
		}
	},
	methods: {
		add() {
			this.$v.experience.$touch();

			if (this.$v.experience.$pending || this.$v.experience.$error) {
				this.verrors = 'Please Fix Errors Before Adding Your Experience.';
				this.$scrollTo('#cv', 500, { offset: -80, force: true });
				return;
			} else {
				this.verrors = null;
			}

			this.step.experiences.push(this.experience);
			this.experience = {
				jobTitle: null,
				company: null,
				sector: null,
				location: null,
				description: null,
				joinedMonth: null,
				joinedYear: null,
				exitMonth: null,
				exitYear: null,
				current: true
			};
			this.$v.experience.$reset();
		},
		del(index) {
			this.step.experiences.splice(index, 1);
		},
		next() {
			this.$store.commit('cv/add', this.step);
		},
		back() {
			this.$store.commit('cv/back');
		}
	}
};
</script>
<style lang="scss" scoped>
.experience {
	border: 1px black solid;
	margin-bottom: 1rem;
}
</style>
