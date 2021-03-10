import Controller from './Controller';

class OfferController extends Controller {
	_model = 'offer';
	_url = 'https://api-tim.oston.io/cupomedia/services/1';

	getById(id) {
		this.loading('offer', true);

		this.request('get', this._url + '/' + id + '/offer')
			.then(({ data }) => {
				this.dispatch(this._model, 'offer', data);
			})
			.finally(() => this.loading('offer', false));
	}

	getCoupon() {
		const { id } = _.model('offer').offer;

		return this.request('get', 'https://api-tim.oston.io/cupomedia/coupon/1/offer/' + id);
	}
}

export default OfferController;
