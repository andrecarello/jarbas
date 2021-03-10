import Controller from './Controller';

class PlanController extends Controller {
	_model = 'plan';
	_loading = 'loading';
	_url = 'https://api.tim.oston.io/tim-go/plans/web';

	getAll() {
		this.dispatch(this._loading, 'loadingPlans', true);

		this.request('get', this._url)
			.then(({ data }) => this.dispatch(this._model, 'plans', data))
			.finally(() => this.dispatch(this._loading, 'loadingPlans', false));
	}
}

export default PlanController;
