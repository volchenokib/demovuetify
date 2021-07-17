<template>
	<v-btn id="submitButton" @click="download" color="primary" flat
		>download</v-btn
	>
</template>

<script>
export default {
	name: 'HelloWorld',
	data: () => ({
		payload: {
			formattedDateFrom: null,
			formattedDateTo: null,
			purchaseType: 'singleProvider',
			localStorage: false
		}
	}),

	methods: {
		download() {
			this.$store.dispatch('downloadFile', this.payload);
		}
	}
};
</script>
