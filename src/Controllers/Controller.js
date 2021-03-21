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

	dispatch(model, key, value = null) {
		const $model = _.upperFirst(model) + 'Model';
		const $type = key === 'reset' ? 'reset' : 'save';
		const $action = $model + '/' + $type;

		if (typeof key === 'object' && value === null) {
			const data = key;

			Object.keys(data).map((key) => {
				this.store.dispatch($action, {
					key: key,
					data: data[key]
				});
			});
		} else {
			if ($type === 'reset') {
				this.store.dispatch($action);
			} else {
				this.store.dispatch($action, {
					key: key,
					data: value
				});
			}
		}
	}

	loading(key, value) {
		this._store('loading', 'loading' + _.upperFirst(key), value);
	}
}

export default Controller;
