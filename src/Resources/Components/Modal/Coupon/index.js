import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'ModalCoupom',

	props: {
		voucher: {
			type: String,
			required: true,
			default: () => console.log('ModalCoupom: The VOUCHER is required')
		},
		discount: {
			type: String,
			required: true,
			default: () => console.log('ModalCoupom: The DISCOUNT is required')
		},
		url: {
			type: String,
			required: false,
			default: ''
		}
	},

	data() {
		return {
			isCopiedVoucher: false
		};
	},

	methods: {
		onCopy: function() {
			this.isCopiedVoucher = true;
			toast('success', 'O voucher foi copiado com sucesso.');
		},

		onError: function() {
			toast('error', 'Ops não foi possível copiar o voucher');
		},

		reset: function() {
			this.$parent.isGetVoucher = false;
			setTimeout(() => (this.isCopiedVoucher = false), 200);
		},

		redeen: function(url) {
      this.ga();
			window.open(url, '_blank');
		},

    ga: function() {
      const $offer = _.model('offer').offer;

      _.controller('ga').set('Oferta', {
        oferta: $offer.title,
        id: $offer.id,
        marca: $offer.company_name,
        tipo: 'Cupom + Redirecionamento'
      }).post()
    },

		count: function(text) {
			const len = text.length;

			if (len < 15) {
				return '24px';
			} else if (len < 20) {
				return '16px';
			} else if (len >= 20) {
				return '12px';
			} else {
				return '28px';
			}
		}
	}
};
