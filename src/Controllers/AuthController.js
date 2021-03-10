import Controller from './Controller';

import { Masks as mask } from '@/Helpers/Mask';

class AuthController extends Controller {
	login(data) {
		this.dispatch('auth', data);
	}

	logout() {
		this.dispatch('auth', 'reset');
	}

	loggedIn() {
		const { hash } = _.model('auth');

		return hash.length > 0;
	}

	eligibility(msisdn) {
		const $msisdn = mask.unset(msisdn);

		return this.request('get', 'https://api-tim.oston.io/tim-go/phone/55' + $msisdn);
	}

	requestPin(msisdn) {
		const $msisdn = mask.unset(msisdn);

		return this.request('post', 'https://api-tim.oston.io/tim-go/pin-code/request', {
			phone: '55' + $msisdn
		});
	}

	validatePin(msisdn, pin) {
		const $msisdn = mask.unset(msisdn);
		const $pin = mask.unset(pin);

		return this.request('post', 'https://api-tim.oston.io/tim-go/pin-code/', {
			phone: '55' + $msisdn,
			'pin-code': $pin
		});
	}
}

export default AuthController;
