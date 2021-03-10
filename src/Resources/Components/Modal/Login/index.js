// helpers
import { validateMsisdn } from '@/Helpers/Msisdn';
import { Masks as mask } from '@/Helpers/Mask';
import { Toast as toast } from '@/Helpers/Toast';
import { hash } from '@/Helpers/Misc';
import { TEST_MSISDN, TEST_PIN } from '@/config/Settings';
import _ from 'lodash';

export default {
	name: 'OstonModalLogin',

	data() {
		const $form = {
			msisdn: '',
			pin: ''
		};

		const $errors = {
			msisdn: false,
			pin: false
		};

		const $validating = {
			msisdn: false,
			pin: false
		};

		const $isValid = {
			msisdn: false,
			pin: false
		};

		const $loading = {
			msisdn: false,
			pin: false
		};

		return {
			mask,

			step: 1,
			form: $form,
			errors: $errors,
			validating: $validating,
			isValid: $isValid,
			loading: $loading
		};
	},

	methods: {
		submit: function(type) {
			if (type === 'msisdn') {
				this.submitMsisdn();
			} // msisdn

			if (type === 'pin') {
				this.submitPin();
			} // pin
		},

		submitMsisdn: function() {
			this.loading.msisdn = true;

			const $msisdn = mask.unset(this.form.msisdn);

			if ($msisdn === TEST_MSISDN) {
				setTimeout(() => {
					this.loading.msisdn = false;
					this.step = 2;
					toast('success', 'Foi enviado um código de acesso para o número ' + mask.msisdn($msisdn));
				}, 4000);
			} else {
				_.controller('auth')
					.eligibility($msisdn)
					.then(({ data }) => {
						if (data.plan) {
							_.controller('auth')
								.requestPin($msisdn)
								.then(({ status, data }) => {
									if (status === 200 || status === 201) {
										this.step = 2;
										toast(
											'success',
											'Foi enviado um código de acesso para o número ' + mask.msisdn($msisdn)
										);
									}
								})
								.catch(() => {
									toast(
										'error',
										'Não foi possível enviar um código para o número ' + mask.msisdn($msisdn)
									);
								})
								.finally(() => (this.loading = false));
						} else {
							this.loading.msisdn = false;
							toast('error', 'Não foi possível enviar um código para o número ' + mask.msisdn($msisdn));
						}
					})
					.catch(() => {
						toast('error', 'Não foi possível enviar um código para o número ' + mask.msisdn($msisdn));
						this.loading = false;
					});
			}
		},

		submitPin: function() {
			const $msisdn = mask.unset(this.form.msisdn);
			const $pin = mask.unset(this.form.pin);

			this.loading.pin = true;

			if ($msisdn === TEST_MSISDN && $pin === TEST_PIN) {
				setTimeout(() => {
					this.loading.pin = false;
					this.$parent.loginIsOpen = false;

					_.controller('auth').login({
						hash: hash(),
						msisdn: $msisdn,
						cluster: 1,
						ddd: $msisdn.substring(0, 2)
					});

					// reset state after success login
					this.resetLogin();
				}, 3000);
			} else {
				_.controller('auth')
					.validatePin($msisdn, $pin)
					.then(({ data, status }) => {
						if (status === 200 && data.message === 'Valid Pin!') {
							_.controller('auth').set({
								hash: hash(),
								msisdn: $msisdn,
								ddd: $msisdn.substring(0, 2),
								cluster: 1
							});
							this.resetLogin();
						} else if (status === 400 && data.message === 'Invalid Pin!') {
							toast('error', 'OPS. Verifique se o código foi digitado corretamente');
						} else {
							toast('error', 'OPS. Verifique se o código foi digitado corretamente');
						}
					})
					.catch(({ response }) => {
						const $status = response.data.status;

						if ($status === 404) {
							toast('error', 'Não foi possível enviar um código para o número ' + mask.msisdn($msisdn));
						}
					})
					.finally(() => (this.loading.pin = false));
			}
		},

		resetLogin: function() {
			this.form.msisdn = '';
			this.form.pin = '';
			this.step = 1;
		},

		validate: function(type, value) {
			const val = mask.unset(value);

			if (!val) return;

			if (type === 'msisdn') {
				// return to step 1 showing button and removing pin code field
				if (val.length < 11) this.step = 1;

				// validate msisdn length
				if (val.length > 10 && val.length < 12) {
					this.validating.msisdn = true;

					setTimeout(() => {
						this.validating.msisdn = false;
						// validate if msisdn has errors and is valid
						this.errors.msisdn = !validateMsisdn(val).status;
						this.isValid.msisdn = validateMsisdn(val).status;
					}, 1000);
				}
			} // msisdn

			if (type === 'pin') {
				this.isValid.pin = false;

				if (val.length < 4 && val.length < 5) {
					this.isValid.pin = true;
				}
			} // pin
		}
	}
};
