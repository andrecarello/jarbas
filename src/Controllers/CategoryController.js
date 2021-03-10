import _ from 'lodash';
import Controller from './Controller';

class CategoryController extends Controller {
	_baseUrl = 'https://api.tim.oston.io/cupomedia/services/1/categories';

	getAll() {
		// this.loading('categories', true);

		this.request('get', this._baseUrl).then(({ data }) => this.dispatch('category', 'categories', data));
		// .finally(() => this.loading('categories', false));
	}

	getById(id) {
		this.loading('category', true);

		const msisdn = _.model('auth').msisdn ? _.model('auth').msisdn : '51333333333';

		this.request('get', this._baseUrl + '/' + id + '?phone=' + msisdn)
			.then(({ data }) => {
				this.dispatch('category', 'category', data);
			})
			.finally(() => this.loading('category', false));
	}
}

export default CategoryController;
