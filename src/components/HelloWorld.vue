<template>
	<div>
		<v-btn id="submitButton" @click="download" color="primary" flat
			>download</v-btn
		>

		<v-btn @click="emailEntered('example@mail.com')" color="primary" flat
			>Send</v-btn
		>

		<v-form v-model="valid" class="from">
			<v-text-field
				v-model="firstname"
				:rules="nameRules"
				:counter="10"
				label="First name"
				required
			></v-text-field>

			<v-text-field
				v-model="lastname"
				:rules="nameRules"
				:counter="10"
				label="Last name"
				required
			></v-text-field>

			<v-text-field
				v-model="email"
				:rules="emailRules"
				label="E-mail"
				required
			></v-text-field>

			<v-btn class="mr-4" type="submit" @click.prevent="submit">
				submit
			</v-btn>
		</v-form>
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
		isValid: false,
		valid: false,
		firstname: "",
		lastname: "",
		nameRules: [
			(v) => !!v || "Name is required",
			(v) => v.length <= 10 || "Name must be less than 10 characters"
		],
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+/.test(v) || "E-mail must be valid"
		]
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
		},
		submit() {
			console.log("submit from", {
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.from {
	max-width: 30%;
	padding: 1em;
}
</style>
