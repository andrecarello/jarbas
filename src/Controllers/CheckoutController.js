import Controller from './Controller';

import { Masks as mask } from '@/Helpers/Mask';
import { REFERER } from '@/config/Settings';

class CheckoutController extends Controller {
	// _url = 'https://solitary-dew-aenuxizqt6vv.vapor-farm-b1.com/api';
	_url = 'https://timgo.oston.io/api';

	set(key, value) {
		this.dispatch('checkout', key, value);
	} // set

  reset() {
		this.dispatch('checkout', 'reset');
	} // reset

	format(type, value) {
		if (type === 'birthday') {
			let day = Number(value.day) < 9 ? '0' + Number(value.day) : Number(value.day);
			let month = Number(value.month) < 9 ? '0' + Number(value.month) : Number(value.month);
			let year = value.year;

			return _.toString(day + month + year);
		} else if (type === 'month') {
			return value < 9 ? '0' + value : value;
		} else if (type === 'year') {
			return mask.unset(value.toString());
		}

		return mask.unset(value);
	} // format

	submit(payload) {
		const $msisdn = '55' + _.model('checkout').msisdn;
		const $birthday = this.format('birthday', payload.birthday);
		const $document = this.format('document', payload.cpf);
		const $creditCard = {
			number: this.format('number', payload.card.number),
			month: this.format('month', payload.card.month),
			year: this.format('year', payload.card.year),
			cvv: this.format('cvv', payload.card.cvv)
		};
		const $origin = REFERER;
		const $planCode = _.model('checkout').plan.code;
		const $postalCode = this.format('cep', payload.cep);

		const $payload = {
			phone: $msisdn,
			birthday: $birthday,
			document: $document,
			credit_card: {
				number: $creditCard.number,
				expiration_month: $creditCard.month,
				expiration_year: $creditCard.year,
				cvv: $creditCard.cvv
			},
			origin: $origin,
			plan_code: $planCode,
			postal_code: $postalCode
		};

		console.log($payload);

		// return this.request('post', 'https://api-tim.oston.io/tim-go/order', $payload);
	} // submit

	referer(ref) {
		this.dispatch('checkout', 'referer', ref);
	}

	elegibility(msisdn, code) {
		return this.request('get', this._url + '/phone/55' + msisdn + '/eligibility/' + code);
	}

	requestPin(msisdn) {
		return this.request('post', this._url + '/pin-code/request', {
			phone: '55' + msisdn
		});
	} // request pin

	validatePin(pin) {
		const msisdn = _.model('checkout').msisdn;
		return this.request('post', 'https://solitary-dew-aenuxizqt6vv.vapor-farm-b1.com/api/pin-code/', {
			phone: '55' + msisdn,
			'pin-code': pin
		});
	} // validate pin

	validateCep(value) {
		let cep = value.replace(/\D/g, '');

		if (cep.length < 7 && cep.length < 9) return;

		return this.request('get', this._url + '/zip-code/' + cep);
	} // validate cep

	setValidateCheckout() {
		let tomorrow = new Date().setDate(new Date().getDate() + 1);
		this.dispatch('checkout', 'validate', tomorrow);
	}

	checkValidateCheckout() {
		const today = new Date().getTime();
		const valid = _.model('checkout').validate;
		console.log(today, valid);
		return today < valid;
	}
}

export default CheckoutController;
