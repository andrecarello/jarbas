import Controller from './Controller';

class SearchController extends Controller {
	reset() {
		this.dispatch('search', 'reset');
	}

	get(term, page = 1, callback = () => {}) {
		this.loading('search', true);
    console.log(term)

		this.request('get', 'https://api-tim.oston.io/cupomedia/services/1/search?q=' + term + '&page=' + page)
			.then(({ data }) => {
				let result = _.model('search').offers;
				result = result.concat(data.pagination.data);

				this.dispatch('search', {
					offers: result,
					lastPage: data.pagination.last_page,
					term: term
				});

				callback();
			})
			.finally(() => this.loading('search', false));
	}
}

export default SearchController;
