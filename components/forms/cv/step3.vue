<template>
	<div>
		<h4>{{ stepTitle }}</h4>

		<base-input label="Qualification Type" class="mt-3" required>
			<b-form-select
				v-model="edu.qualificationType"
				class="form-control form-control-alternative"
				:options="this.$store.state.cv.qualificationTypes"
			></b-form-select>
		</base-input>

		<base-input label="Year Completed" class="mt-3" required>
			<b-form-select
				v-model="edu.completedYear"
				class="form-control form-control-alternative"
				:options="this.$store.state.cv.years"
			></b-form-select>
		</base-input>

		<div v-if="edu.qualificationType" class="row">
			<div class="col-md-6">
				<base-input label="Qualification Subject" class="mt-3" required>
					<b-form-select
						v-model="qualification.subject"
						class="form-control form-control-alternative"
						:options="subjects(edu.qualificationType)"
					></b-form-select>
				</base-input>
			</div>
			<div class="col-md-6">
				<label class="mt-3">Grade</label>
				<div v-for="(q, i) in grades(edu.qualificationType)" :key="i" class="col">
					<BaseRadio v-model="qualification.grade" :name="q" class="mb-3">{{ q }}</BaseRadio>
				</div>
			</div>
		</div>
		<base-button size="sm" type="success" @click="addQualification()">Add Qualification</base-button>

		<hr />
		<b-card v-if="edu.qualifications.length" class="experience">
			<h4 class="card-title">{{ edu.qualificationType }}</h4>
			<p v-for="(q, index) in edu.qualifications" :key="index">
				{{ q.subject }} - {{ q.grade }} <a href="" class="card-link" @click="del(index)">x</a>
			</p>
			<base-button type="info" @click="saveQualificationType()">Save Qualification</base-button>
		</b-card>
		<hr />

		<b-card v-for="(q, index) in step.education" :key="index" class="experience" style="background-color:tomato">
			<h4 class="card-title">{{ q.qualificationType }}</h4>
			<p v-for="(qq, i) in q.qualifications" :key="i">
				{{ qq.subject }} - {{ qq.grade }} <a href="" class="card-link" @click="del(index)">x</a>
			</p>
			<base-button type="info" @click="saveQualificationType()">Save Qualification</base-button>
		</b-card>
		<base-button type="default" round block size="lg" @click.prevent="next()">Next</base-button>
		<base-button type="default" round block size="lg" @click.prevent="back()">Back</base-button>
	</div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
export default {
	data() {
		return {
			stepTitle: 'Education',
			step: {
				education: []
			},
			edu: {
				facility: null,
				qualificationType: null,
				qualifications: [],
				completedYear: null
			},
			qualification: {
				subject: null,
				grade: null
			}
		};
	},
	validations: {
		step: {
			qualificationType: { required }
		}
	},
	created() {
		if (this.$store.getters['cv/updateDataOnBack']) {
			this.step = this.$store.state.cv.cvInput[2];
		}
	},
	methods: {
		next() {
			this.$store.commit('cv/add', this.step);
		},
		back() {
			this.$store.commit('cv/back');
		},
		del(index) {
			this.edu.qualifications.splice(index, 1);
		},
		addQualification() {
			this.edu.qualifications.push(this.qualification);
			this.qualification = {
				subject: null,
				grade: null
			};
		},
		saveQualificationType() {
			this.step.education.push(this.edu);
			this.edu = {
				facility: null,
				qualificationType: null,
				qualifications: [],
				completedYear: null
			};
			this.qualification = {
				subject: null,
				grade: null
			};
		},
		grades(q) {
			return this.$store.state.cv.subjects[q].grades;
		},
		subjects(q) {
			return this.$store.state.cv.subjects[q].subjects;
		}
	}
};
</script>
