import store from '../Store';
import axios from 'axios';

/**
 * In all cases prefer use camelcase
 *
 * PRIVATE FUNCTIONS USE _{NAME}
 * PRIVATE CONST/LET USE _{NAME}
 *
 * GLOBAL FUNCTIONS OR VARS USE {NAME}
 *
 */
class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
	}

	user = _.model('auth');
	msisdn = !!this.user.msisdn ? this.user.msisdn : '51333333333';
	baseUrl = 'https://api.tim.oston.io/cupomedia/services/1';

	_logout(model) {
		this.store.dispatch(_.upperFirst(model) + 'Model/reset');
	}

	request(method, url, data) {
		let config = {
			method: method,
			url: url
		};

		if (method === 'post' || method === 'delete') {
			config = {
				...config,
				data
			};
		}

		return axios(config);
	}

	_store(model, key, value) {
		if (key === 'reset') {
			this.store.dispatch(_.upperFirst(model) + 'Model/' + key);
		} else {
			this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(key), value);
		}
	}

	dispatch(model, key, value = null) {
		if (typeof key === 'object' && value === null) {
			const obj = key;
			Object.keys(obj).map((k) => this._store(model, k, obj[k]));
		} else {
			this._store(model, key, value);
		}
	}

	loading(key, value) {
		this._store('loading', 'loading' + _.upperFirst(key), value);
	}
}

export default Controller;
