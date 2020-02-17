<template>
	<div>
		<AppHeader />
		<nuxt />
		<Foot />
	</div>
</template>
<script>
import Foot from './AppFooter';
import AppHeader from './AppHeader';

export default {
	components: {
		Foot,
		AppHeader
	}
};
</script>
