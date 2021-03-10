import Controller from './Controller';

class GaController extends Controller {
	$auth = _.model('auth');
	$name = '';
	$schema = {
		cluster: this.$auth.cluster,
		ddd: this.$auth.hash.length > 0 ? this.$auth.msisdn.substring(0, 2) : 'xx',
		logado: this.$auth.hash.length > 0 ? 'Sim' : 'Não'
	};

	set(name, data) {
		const $base = this.$schema;
		this.$name = name;

		this.$schema = {
			...data,
			...$base
		};

		return this;
	}

	stringify(data) {
		let str = '';

		Object.keys(data).map((key) => {
			str += key + ': ' + data[key] + ' / ';
		});

		str = str.slice(0, -3);

		return this.$name + ' - ' + str;
	}

	post() {
		console.log(this.stringify(this.$schema));
		// this.request('post', '', this.$schema)
	}
}

export default GaController;
