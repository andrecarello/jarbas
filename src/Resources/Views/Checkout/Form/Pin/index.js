// components
import Layout from '@/Resources/Layout/Checkout/index.vue';

import { Masks as mask } from '@/Helpers/Mask';
import { Toast as toast } from '@/Helpers/Toast';

import { TEST_MSISDN, TEST_PIN } from '@/config/Settings';

export default {
	name: 'OstonCheckutPin',

	components: {
		'oston-layout': Layout
	},

	data() {
    const $form = {
      pin: '',
      captcha: ''
    }
    const $errors = {
      pin: false
    }
    const $sending = {
      pin: false
    }

		return {
			mask,

			form: $form,
			errors: $errors,
			sending: $sending,
			loading: false
		};
	},

	methods: {
		submit: function() {
			if (this.form.captcha.length > 0 || (this.errors.pin || this.$parent.count(this.form.pin, 4))) {
				toast('error', 'Ops parece tem um erro nos dados');
				return;
			}

			this.loading = true;
			toast('success', 'Estamos verificando os dados informados.');

      const $msisdn = _.model('checkout').msisdn;

			if ($msisdn === TEST_MSISDN && this.form.pin === TEST_PIN) {
				setTimeout(() => {
					this.loading = false;
					this.$router.push({ name: 'CheckoutPayment' });
          this.ga();
				}, 3000);
			} else {
				_.controller('checkout')
					.validatePin(mask.unset(this.form.pin))
					.then(({ data, status }) => {
						if (status === 200 || status === 202) {
							this.$router.push({ name: 'CheckoutPayment' });
              this.ga();
						} else {
							toast('error', 'O código informado é inválido');
						}
					})
					.catch(({ response }) => {
						toast('error', 'Não foi possível validar o código.');
					})
					.finally(() => (this.loading = false));
			}
		},

		resendPin: function() {
			this.sending.pin = true;
			const msisdn = _.model('checkout').msisdn;

			_.controller('checkout')
				.requestPin(msisdn)
				.then(({ data, status }) => {
					if (status === 200 || status === 201) {
						this.message('success');
					} else {
						this.message('error');
					}
					console.log(data, status);
				})
				.catch(() => this.message('error'))
				.finally(() => (this.sending.pin = false));
		},

		message: function(type) {
			const msisdn = mask.msisdn(_.model('checkout').msisdn);

			if (type === 'success') {
				toast('success', 'Foi enviado um código para o número ' + msisdn);
			} else if (type === 'error') {
				toast('error', 'OPS! Não foi possível enviar um código de acesso para o número ' + msisdn);
			} else {
				toast('error', 'OPS! Não foi possível enviar um código.');
			}
		},

		ga: function() {
			const $offer = _.model('offer').offer;
			const $plan = _.model('checkout').plan;

			_.controller('ga')
				.set('Migração', {
					pagina: 'Checkout - Código',
					oferta: $offer.id + ' - ' + $offer.title + ' | ' + $offer.company_name,
					plano: $plan.name_display + ' ' + (Number($plan.data) + Number($plan.data_bonus) + 4) + 'GB',
					incentivo: $plan.code ? 'Sim' : 'Não'
				})
				.post();
		}
	}
};
