export default {
  name: 'OstonCard',

  props: {
    offer: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    logged: {
      type: Boolean | String,
      required: false
    },
    category: {
      type: String,
      required: false,
      default: 'Oferta'
    }
  },

  methods: {
    ga: function() {
      _.controller('ga').set('Categoria', {
        nome: this.offer.title,
        id: this.offer.id,
        categoria: this.category,
        marca: this.offer.company_name
      }).post()
    }
  },

  mounted() {
    console.log(this.category)
  }
}
