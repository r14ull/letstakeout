<template>
	<div>
		<h4>{{ stepTitle }}</h4>
		<base-input
			v-model="step.name"
			label="First Name"
			class="mt-3"
			placeholder="Jordan"
			:valid="$isValid($v.step.name)"
			:error="$errormessage($v.step.name)"
			required
			@input="$v.step.name.$touch()"
		></base-input>

		<base-input
			v-model="step.surname"
			label="Surname"
			class="mt-3"
			placeholder="Smith"
			:valid="$isValid($v.step.surname)"
			:error="$errormessage($v.step.surname)"
			required
			@input="$v.step.surname.$touch()"
		></base-input>

		<base-input
			v-model="step.phone"
			label="Mobile"
			class="mt-3"
			placeholder="07712345678"
			:valid="$isValid($v.step.phone)"
			:error="$errormessage($v.step.phone)"
			required
			@input="$v.step.phone.$touch()"
		></base-input>

		<base-input
			v-model.trim="step.email"
			label="Email"
			class="mt-3"
			placeholder="Your email"
			:valid="$isValid($v.step.email)"
			:error="$errormessage($v.step.email)"
			required
			@input="$v.step.email.$touch()"
		></base-input>

		<hr />

		<base-input
			label="Select Your Neast City or Town"
			class="mt-3"
			:valid="$isValid($v.step.city)"
			:error="$errormessage($v.step.city)"
			required
		>
			<b-form-select
				v-model="step.city"
				class="form-control form-control-alternative"
				:options="this.$store.state.cv.citiesTowns"
				@input="$v.step.city.$touch()"
			></b-form-select>
		</base-input>

		<base-button type="default" class="mt-4" block size="lg" @click="next()">Next</base-button>
	</div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
	data() {
		return {
			stepTitle: 'Contact Details',
			step: {
				name: null,
				surname: null,
				email: null,
				phone: null,
				city: null
			}
		};
	},
	created() {
		if (this.$store.getters['cv/updateDataOnBack']) {
			this.step = this.$store.state.cv.cvInput[0];
		}
	},
	validations: {
		step: {
			name: { required },
			surname: { required },
			email: { required, email },
			phone: { required },
			city: { required }
		}
	},
	methods: {
		next() {
			this.$v.step.$touch();
			if (this.$v.step.$pending || this.$v.step.$error) return;
			this.$store.commit('cv/add', this.step);
		}
	}
};
</script>
