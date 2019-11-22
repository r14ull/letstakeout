<template>
	<div class="d-flex">
		<span @click="add1 = true" class="icon icon-shape  shadow rounded-circle">
			<i class="fal fa-minus-hexagon"></i>
		</span>
		<modal :show.sync="add1">
			<h6 slot="header" class="modal-title" id="modal-title-default">Type your modal title</h6>

			<p>
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
				blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
				ocean.
			</p>
			<p>
				A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
				paradisematic country, in which roasted parts of sentences fly into your mouth.
			</p>

			<template slot="footer">
				<base-button type="primary">Save changes</base-button>
				<base-button type="link" class="ml-auto" @click="add1 = false">Close</base-button>
			</template>
		</modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			add1: false
		};
	},
	methods: {
		minus() {
			alert(1);
		}
	}
};
</script>

<style lang="scss" scoped>
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
