// components
import Layout from '@/Resources/Layout/Checkout/index.vue';

// helpers
import { validateMsisdn } from '@/Helpers/Msisdn';
import { Masks as mask } from '@/Helpers/Mask';
import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'OstonCheckutMsisdn',

	components: {
		'oston-layout': Layout
	},

	data() {
		const $form = {
			msisdn: _.model('auth').msisdn,
			captcha: ''
		};

		const $errors = {
			msisdn: false
		};

		const $validating = {
			msisdn: false
		};

		return {
			mask,

			form: $form,
			errors: $errors,
			validating: $validating,

			loading: false
		};
	},

	methods: {
		submit: function() {
			if (this.form.captcha.length > 0) {
				toast('error', 'Ops parece tem um erro nos dados');
				return;
			}

			const $msisdn = mask.unset(this.form.msisdn);

			this.loading = true;
			toast('success', 'Estamos verificando os dados informados.');

			if ($msisdn === '51982558409') {
				setTimeout(() => {
					this.$router.push({ name: 'CheckoutPin' });
					this.message('success');

					_.controller('checkout').set({ msisdn: $msisdn });
					this.ga();
				}, 3000);
			} else {
				this.submitElegibility(msisdn, plan.code);
			}
		},

		ga: function() {
			const $offer = _.model('offer').offer;
			const $plan = _.model('checkout').plan;

			_.controller('ga')
				.set('Migração', {
					pagina: 'Checkout - Telefone',
					oferta: $offer.id + ' - ' + $offer.title + ' | ' + $offer.company_name,
					plano: $plan.name_display + ' ' + (Number($plan.data) + Number($plan.data_bonus) + 4) + 'GB',
					incentivo: $plan.code ? 'Sim' : 'Não'
				})
				.post();
		},

		submitElegibility: function(msisdn, code) {
			_.controller('checkout')
				.elegibility(msisdn, code)
				.then(({ data }) => {
					if (data.message === 'Eligible.') {
						this.requestPin(msisdn);
					} else {
						this.loading = false;
						this.message('error');
					}
				})
				.catch(({ response }) => {
					if (response.status === 422) this.message('error');
					if (response.status === 403) {
						_.controller('checkout').error(_.upperCase(response.data.message));
						this.$router.push({ name: 'WapCheckoutError' });
					} else this.message('error');
					this.loading = false;
				});
		},

		requestPin: function(msisdn) {
			_.controller('checkout')
				.requestPin(msisdn)
				.then(({ data, status }) => {
					if (status === 200 || status === 201) {
						this.message('success');
						_.controller('checkout').set({
							msisdn: msisdn,
							step: 4
						});

						this.$router.push({ name: 'WapCheckoutPin' });
						this.message('success');
					} else {
						this.message('error');
					}
				})
				.catch(() => this.message('error'))
				.finally(() => (this.loading = false));
		},

		message: function(type) {
			if (type === 'success') {
				toast('success', 'Foi enviado um código para o número ' + mask.msisdn(this.form.msisdn));
			} else if (type === 'error') {
				toast(
					'error',
					'OPS! Não foi possível enviar um código de acesso para o número ' + mask.msisdn(this.form.msisdn)
				);
			} else {
				toast('error', 'OPS! Não foi possível enviar um código.');
			}
		},

		validate: function(type, value) {
			const val = mask.unset(value);

			if (!val) return;

			if (val.length > 10 && val.length < 12) {
				this.validating.msisdn = true;

				setTimeout(() => {
					this.validating.msisdn = false;
					this.errors.msisdn = !validateMsisdn(val).status;
				}, 1000);
			}
		}
	}
};
