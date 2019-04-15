import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

let store;
let state;
let actions;
let mutations;
let getters;

actions = {
	downloadFile: jest.fn(),
	forceFileDownload: jest.fn()
};

store = new Vuex.Store({
	state: {},
	actions,
	mutations,
	getters
});

// describe('HelloWorld component', () => {
// 	it('renders to match snapshot', () => {
// 		const wrapper = shallowMount(HelloWorld, {
// 			localVue,
// 			store
// 		});
// 		expect(wrapper).toMatchSnapshot();
// 	});
// });

describe('vue demo component', () => {
	const wrapper = shallowMount(HelloWorld, {
		localVue,
		store
	});

	it('submit button exist', () => {
		expect(wrapper.contains('#submitButton')).toBe(true);
	});
	it('action for downloading file', () => {
		wrapper.find('.v-btn').trigger('click');
		expect(actions.downloadFile).toHaveBeenCalled();
		expect(actions.downloadFile).toHaveBeenCalledTimes(1);
	});
});
