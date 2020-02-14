<template>
	<div class="d-flex">
		<span class="icon icon-shape  shadow rounded-circle" @click="varModal = true">
			<i class="fad fa-minus-hexagon"></i>
		</span>
		<modal :show.sync="varModal">
			<template slot="header" class="modal-title">
				<div class="flex-column">
					<h4>{{ variations.name }}</h4>
					<p v-html="variations.description"></p>
				</div>
			</template>

			<h5 v-if="variations.required_accessories.length">Required Accessories</h5>
			<required
				v-for="(variation, index) in variations.required_accessories"
				v-if="index <= reqAcc"
				:key="index + 'reqAcc'"
				:variation="variation"
				@item="addReqAcc"
			>
			</required>

			<h5 v-if="variations.required_products.length">Required Products</h5>
			<required
				v-for="(variation, index) in variations.required_products"
				v-if="index <= reqProd"
				:key="index + 'reqProd'"
				:variation="variation"
				@item="addReqProd"
			>
			</required>

			<h4 v-if="variations.optional_accessories.length">Optional Accessories</h4>
			<varItems
				v-for="(variation, index) in variations.optional_accessories"
				:key="index + 'optAcc'"
				:variation="variation"
				@item="addOptAcc"
			>
			</varItems>

			<template slot="footer">
				<div>£ {{ itemTotal }}</div>
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
	components: {
		varItems,
		required
	},
	props: ['variations'],

	data() {
		return {
			varModal: false,
			item: {
				name: this.variations.name,
				description: this.variations.description,
				base: this.variations.price,
				requiredProduct: [],
				requiredAccessory: [],
				optionalAccessory: []
			},
			reqProd: 0,
			reqAcc: 0
		};
	},
	computed: {
		itemTotal() {
			return this.sumOrder();
		}
	},
	methods: {
		addOrUpdate(item, items) {
			const foundIndex = items.findIndex(x => x.id == item.id);
			if (foundIndex != -1) {
				items[foundIndex] = item;
			} else {
				items.push(item);
			}
		},
		sumOrder() {
			let itemTotal = 0;
			itemTotal = this.variations.price;

			this.item.requiredProduct.forEach(item => {
				itemTotal = itemTotal + item.price;
			});

			this.item.requiredAccessory.forEach(item => {
				itemTotal = itemTotal + item.price;
			});

			this.item.optionalAccessory.forEach(item => {
				const calcPrice = item.quantity * item.price;
				itemTotal = itemTotal + calcPrice;
			});

			return itemTotal.toFixed(2);
		},
		addReqProd(obj) {
			this.addOrUpdate(obj, this.item.requiredProduct);
			this.reqProd++;
		},
		addReqAcc(obj) {
			this.addOrUpdate(obj, this.item.requiredAccessory);
			this.reqAcc++;
		},
		addOptAcc(obj) {
			this.addOrUpdate(obj, this.item.optionalAccessory);
		},
		AddToOrder() {
			this.item.itemTotal = this.itemTotal;
			this.$store.commit('order/addToOrder', this.item);
			this.item = {
				name: this.variations.name,
				description: this.variations.description,
				base: this.variations.price,
				requiredProduct: [],
				requiredAccessory: [],
				optionalAccessory: []
			};
			this.varModal = false;
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
