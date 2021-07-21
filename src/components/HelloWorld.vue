<template>
	<div>
		<v-btn id="submitButton" @click="download" color="primary" flat
			>download</v-btn
		>

		<v-btn @click="emailEntered('example@mail.com')" color="primary" flat
			>Send</v-btn
		>
	</div>
</template>

<script>
// import GrowthPhysics from '../../analytics';
export default {
	name: "HelloWorld",
	data: () => ({
		payload: {
			formattedDateFrom: null,
			formattedDateTo: null,
			purchaseType: "singleProvider",
			localStorage: false
		},
		event: {
			type: ["page", "track", "identify"],
			name: "click",
			properties: {
				bubbles: true
			}
		},
		isValid: false
	}),

	async mounted() {
		// console.log('document', window.document);
		// console.log('script', window.GrowthPhysics);
		// const tracker = window.GrowthPhysics;
		// await tracker.init(
		// 	'https://rby3g8etm0.execute-api.us-east-2.amazonaws.com/default/'
		// );
		// tracker.track();
		// fetch(
		// 	"https://9rodqtkqr8.execute-api.us-east-2.amazonaws.com/SST_Stage/SST_endpoint"
		// ).then((res) => {
		// 	console.log("res", res);
		// });
		// const result = await window.GrowthPhysics.init('http://localhost:8080/');
		// window.analytics = result;
		// console.log('analytics', analytics);
		// const event = {
		// 	type: ['page', 'track', 'identify'],
		// 	name: 'eventName',
		// 	properties: {
		// 		prop: 'key'
		// 	}
		// };
	},

	methods: {
		download() {
			this.$store.dispatch("sendData", this.payload);
		},
		async emailEntered(adress) {
			// // this.$store.dispatch('sendData', this.event);
			// const url = "http://localhost:3000/send";
			// const data = {};
			// const response = await fetch(url, {
			// 	method: "POST",
			// 	mode: "no-cors",
			// 	cache: "no-cache",
			// 	headers: {
			// 		"Content-Type": "application/json"
			// 	},
			// 	body: JSON.stringify(data) // body data type must match "Content-Type" header
			// });

			// console.log("res: ", response.json());
			// return response.json();
			console.log("emailEntered", adress);
		}
	}
};
</script>
