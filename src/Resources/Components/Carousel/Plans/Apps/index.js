import Image from '@/Resources/Components/Helpers/Image/index.vue'

export default {
  name: 'PlanCarouselApps',
  props: {
    title: {
      type: String,
      required: true,
      default: () => console.error('PlanCarouselApps: The TITLE is required')
    },
    content: {
      type: String,
      required: true,
      default: () => console.error('PlanCarouselApps: The CONTENT is required')
    }
  },

  components: {
    'oston-image': Image
  }
}
