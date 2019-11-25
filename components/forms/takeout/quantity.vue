<template>
	<div class="d-flex">
		<span @click="varModal = true" class="icon icon-shape  shadow rounded-circle">
			<i class="fal fa-minus-hexagon"></i>
		</span>
		<modal :show.sync="varModal">
			<template slot="header" class="modal-title">
				<div class="flex-column">
					<h4>{{ variations.name }}</h4>
					<p v-html="variations.description"></p>
				</div>
			</template>

			<required
				v-for="(variation, index) in variations.requiredProducts"
				:key="Math.floor(Math.random() * 10000000) + 1"
				:variation="variation"
				@item="add"
			>
			</required>

			<required
				v-for="(variation, index) in variations.requiredAccessories"
				:variation="variation"
				acc="10"
				:key="Math.floor(Math.random() * 10000000) + 1"
				@item="add"
			></required>

			<varItems
				v-for="(variation, index) in variations.optionalAccessories"
				:variation="variation"
				:key="index"
				@update-item="extras"
			></varItems>

			<template slot="footer">
				<base-button type="primary" @click="AddToOrder">Save changes</base-button>
				<base-button type="link" class="ml-auto" @click="varModal = false">Close</base-button>
			</template>
		</modal>
	</div>
</template>

<script>
import required from './orderModal/required';
import varItems from './variations';
export default {
	props: ['variations'],
	components: {
		varItems,
		required
	},
	data() {
		return {
			varModal: false,
			orderItem: [],
			item: null
		};
	},
	methods: {
		add(obj) {
			this.orderItem.push(obj);
		},
		AddToOrder() {
			this.$store.commit('order/addToOrder', this.orderItem);
			varModal = false;
		},
		minus() {
			alert(1);
		}
	}
};
</script>

<style lang="scss" scoped>
.flex-column p {
	margin: 0px;
}
.spaceing {
	margin-right: 10px;
}
.d-flex .icon {
	cursor: pointer;
	&:hover {
		background-color: #11cdef;
		color: white;
	}
}
</style>
