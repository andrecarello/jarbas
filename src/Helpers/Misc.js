/**
 * Apenas números
 *
 * @param string
 * @returns {*}
 */
export const strOnlyNumber = (string) => {
	return string.replace(/[^\d]+/g, '');
};

export const slugify = (text) => {
	return text
  .toString()
  .toLowerCase()
  .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
  .normalize('NFD')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[^\w\-]+/g, '')
};

/**
 * Array com range de números setados
 *
 * @param min
 * @param max
 * @returns {Array}
 */
export const rangeNumber = (min = 1, max = 12) => {
	let arr = [];

	for (let i = min; i <= max; i++) {
		let a = '';

		if (i < 10) a = '0' + i.toString();
		else a = i.toString();

		arr.push(a);
	}

	return arr;
};

/**
 * Validação do CPF
 *
 * @param cpf
 * @returns {boolean}
 */
export const validaCPF = (cpf) => {
	cpf = cpf.replace(/[^0-9]/gi, '');

	if ((cpf = cpf.replace(/[^\d]/g, '')).length !== 11) return false;

	if (cpf === '00000000000') return false;

	let r;
	let s = 0;

	for (let i = 1; i <= 9; i++) s = s + Number(cpf[i - 1]) * (11 - i);

	r = (s * 10) % 11;

	if (r === 10 || r === 11) r = 0;

	if (r !== Number(cpf[9])) return false;

	s = 0;

	for (let i = 1; i <= 10; i++) s = s + Number(cpf[i - 1]) * (12 - i);

	r = (s * 10) % 11;

	if (r === 10 || r === 11) r = 0;

	if (r !== Number(cpf[10])) return false;

	return true;
};

/**
 *
 * @param name
 * @param ext
 * @returns {string|*}
 */
export const rename = (name, ext) => {
	if (name.indexOf(ext) > -1) {
		return name;
	} else {
		return _.capitalize(name) + ext;
	}
};

/**
 * Set overflow on window
 *
 * @param open
 */
export const bodyOverflow = (open) => {
	document.getElementsByTagName('body')[0].style.overflow = open ? 'hidden' : 'auto';
};

/**
 *
 */
export const days = () => {
  // return
  // [
  //   { value: 'first', label: 'First name' },
  //   { value: 'last', label: 'Last name' },
  //   { value: 'initial', label: 'Middle Initial', id: 'name-initial' },
  // ]

	let arr = [];

	for (let i = 1; i <= 31; i++) {
		let a = '';

		if (i < 10) a = '0' + i.toString();
		else a = i.toString();

    let res = { value: a, label: a }

    arr.push(res);
	}

	return arr;
};

export const months = () => {
  return {
    1: 'JAN',
    2: 'FEV',
    3: 'MAR',
    4: 'ABR',
    5: 'MAI',
    6: 'JUN',
    7: 'JUL',
    8: 'AGO',
    9: 'SET',
    10: 'OUT',
    11: 'NOV',
    12: 'DEZ',
  }

	// let arr = [];

	// for (let i = 1; i <= 12; i++) {
	// 	let a = '';

	// 	if (i < 10) a = '0' + i.toString();
	// 	else a = i.toString();

	// 	arr.push(a);
	// }

	// return arr;
};

export const years = (min = 1920, max = 1999) => {
  // return
  // [
  //   { value: 'first', label: 'First name' },
  //   { value: 'last', label: 'Last name' },
  //   { value: 'initial', label: 'Middle Initial', id: 'name-initial' },
  // ]

  let arr = [];
  for (let i = max; i >= min; i--) {
    let res = { value: i, label: i }

    arr.push(res);
  }
  return arr;
};

/**
 * Verifica se é um número de teste
 *
 * DDD é qualquer número
 * e a sequência dos digítos é de 8
 *
 * 51888888888
 * 21888888888
 * 11888888888
 *
 * @param msisdn
 * @returns {boolean}
 */
export const isTestNumber = (msisdn) => {
	for (let i = 1; i <= 4; i++) {
		const regex = new RegExp('^[1-9]{2}[' + i + ']{9}$', 'gm');

		msisdn = strOnlyNumber(msisdn);

		if (!!regex.exec(msisdn)) {
			_.controller('auth').set('cluster', i);
			return {
				status: true,
				cluster: i
			};
		}
	}

	_.controller('auth').set('cluster', 1);
	return {
		status: false,
		cluster: 1
	};
};

/**
 * Verifica se é url de test
 * localhost || .test = return true
 *
 * @returns {boolean}
 */
export const isTestUrl = () => {
	const url = document.location.href;

	return url.includes('.test') || url.includes('localhost') ? true : false;
};

/**
 * Cria uma hash com 40 caracteres
 *
 * @returns {String} | alphanumeric
 */
export const hash = (size = 40) => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;

	for (let i = 0; i < size; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
