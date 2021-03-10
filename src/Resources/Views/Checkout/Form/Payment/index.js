// components
import Layout from '@/Resources/Layout/Checkout/index.vue';
import CheckoutPaymentPlan from '@/Resources/Views/Checkout/Form/Payment/Plan/index.vue';

// helpers
import { Masks as mask } from '@/Helpers/Mask';
import { days, months, years, validaCPF, slugify } from '@/Helpers/Misc';
import { validateLuhn, validateCreditCard } from '@/Helpers/CreditCard';
import { Toast as toast } from '@/Helpers/Toast';
import { TEST_MSISDN } from '@/config/Settings';

export default {
	name: 'OstonCheckutPayment',

	data() {
		const $form = {
			captcha: '',

			msisdn: '',
			cpf: '',
			cep: '',
			birthday: {
				day: '',
				month: '',
				year: ''
			},
			card: {
				number: '',
				month: '',
				year: '',
				cvv: ''
			},
			accept: true
		};

		const $errors = {
			cep: false,
			cpf: false,
			card: false
		};

		const $validating = {
			cpf: false,
			cep: false,
			card: false
		};

		return {
			mask,
			days,
			months,
			years,

			form: $form,
			errors: $errors,

			validating: $validating,

			loading: false
		};
	},

	components: {
		'oston-layout': Layout,
		'oston-checkout-payment-plan': CheckoutPaymentPlan
	},

	methods: {
		date: function() {
			const res = new Date();

			return {
				year: res.getFullYear()
			};
		},
		submit: function() {
			if (this.form.captcha.length > 0) {
				toast('error', 'Ops parece tem um erro nos dados');
				return;
			}

			const $msisdn = _.model('checkout').msisdn;

			this.loading = true;
			toast('success', 'Estamos verificando os dados informados.');

			if ($msisdn === TEST_MSISDN) {
				setTimeout(() => {
					this.loading = false;
					this.$router.push('/checkout/sucesso');

					_.controller('checkout').submit(this.form);
					this.ga();
				}, 4000);
			} else {
				// _.controller('checkout')
				// 	.submit(this.form)
				// 	.then(({ data, status }) => {
				// 		if (status === 200) {
				// 			_.controller('checkout').set({ step: 6 });
				// 			this.$router.push('/checkout/sucesso');
				// 		} else {
				// 			_.controller('checkout').set({ step: 7 });
				// 			this.$router.push('/checkout/erro');
				// 		}
				// 	})
				// 	.catch(({ response }) => {
				//     let error = 'DEFAULT'
				//     if (response.status === 422) error = 'ACTIVATED'
				//     _.controller('checkout').error(error)
				//     this.$router.push('/checkout/erro')
				//   })
				// 	.finally(() => (this.loading = false));
			}
		},

		validate: function(type, value) {
      const $value = mask.unset(value);
      const $len = $value.length;

			if (type === 'cep' && ($len > 7 && $len < 9)) {
        this.validating.cep = true;

        _.controller('checkout').validateCep($value).then(({ data }) => {
          this.errors.cep = data.erro ? true : false;
          this.validating.cep = false;
        });

			} else if (type === 'cpf' && (len > 10 && len < 12)) {
        this.validating.cpf = true;

        setTimeout(() => {
          this.errors.cpf = !validaCPF(value);
          this.validating.cpf = false;
        }, 1000);
			} else if (type === 'card') {
				// cpf

				if (len > 15 && len < 17) {
					this.validating.card = true;
					this.creditCard = validateCreditCard(value);

					setTimeout(() => {
						this.errors.card = !(validateLuhn(value) && this.creditCard.isValid);
						this.validating.card = false;
					}, 1000);
				} // card
			}
		},

		ga: function() {
			const $offer = _.model('offer').offer;
			const $plan = _.model('checkout').plan;

			_.controller('ga')
				.set('Migração', {
					pagina: 'Checkout - Pagamento',
					oferta: $offer.id + ' - ' + $offer.title + ' | ' + $offer.company_name,
					plano: $plan.name_display + ' ' + (Number($plan.data) + Number($plan.data_bonus) + 4) + 'GB',
					incentivo: $plan.code ? 'Sim' : 'Não'
				})
				.post();
		}
	}
};
