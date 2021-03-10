import Controller from './Controller';

/**
 * In all cases prefer use camelcase
 *
 * FUNCTIONS USE {NAME}
 * LOCAL VARS USE _{NAME}
 *
 */
class CollectionController extends Controller {
	_model = 'collection';
	_baseUrl = 'https://api.tim.oston.io/cupomedia/services/1';

	getAll() {
		this.loading('collections', true);
		this.request('get', this._baseUrl + '/collections?phone=' + this.msisdn)
			.then(({ data }) => this.dispatch('collection', 'collections', data))
			.finally(() => this.loading('collections', false));
	}

	getById(id) {
		this.loading('collection', true);

		this.request('get', this._baseUrl + '/collections/' + id + '?phone=' + this.msisdn)
			.then(({ data }) => this.dispatch('collection', 'collection', data))
			.finally(() => this.loading('collection', false));
	}
}

export default CollectionController;
