import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data: {
			isLoding: false
		},

		form: {
			isReset: false
		},

		button: {
			isDisable: false
		}
	},
	getters: {
		getDataState(state) {
			return state.data.isLoding;
		},

		formResetNeed(state) {
			return state.form.isReset;
		},

		getButtonState(state) {
			return state.button.isDisable;
		}
	},

	mutations: {
		API_DATA_PENDING(state) {
			state.data.isLoding = true;
			state.button.isDisable = true;
		},

		API_DATA_SUCCES(state, payload) {
			state.data.isLoding = false;
			state.button.isDisable = false;
			state.form.isReset = payload;
			// console.log('API_DATA_SUCCES', state.form.isReset);
		},

		API_DATA_FAILURE(state, error) {
			state.data.isLoding = false;
			state.button.isDisable = false;
			console.log(error);
		}
	},

	actions: {
		downloadFile(store, payload) {
			store.commit('API_DATA_PENDING');

			return axios
				.get(
					'https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_1000.xlsx',
					{
						responseType: 'arraybuffer'
					},
					payload
				)
				.then((response) => {
					// server imitation
					setTimeout(() => {
						store.commit('API_DATA_SUCCES', true);
						store.dispatch('forceFileDownload', response);
					}, 5000);
				})
				.catch((error) => {
					store.commit('API_DATA_FAILURE', error);
				});
		},

		forceFileDownload(response) {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			console.log('response.data', response.data);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'sample_file.xls');
			document.body.appendChild(link);
			link.click();
		},

		async sendData(store, event) {
			// const payload = JSON.stringify(event);

			// const file = new Blob([payload], {
			// 	type: 'application/json'
			// });

			// console.log('file', file);

			// let config = {
			// 	headers: {
			// 		'Content-Type': 'text/plain',
			// 		'Content-Length': 11434,
			// 		Authorization: `AWS ${process.env.AWS_ACCESS_KEY_ID}:Signature` // "AWS" + " " + AWSAccessKeyId + ":" + Signature;
			// 	}
			// };

			try {
				const res = await axios.post(
					`https://210jr0xmfc.execute-api.us-east-1.amazonaws.com/test`,
					event
				);
				console.log('res', res);
			} catch (error) {
				console.log('error', error);
			}
		}
	}
});
