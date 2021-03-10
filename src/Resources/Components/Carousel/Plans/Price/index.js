export default {
  name: 'CarouselPlanPrice',
  props: {
    tenths: {
      type: String,
      required: true,
      default: () => console.log('CarouselPlanPrice: The TENTHS is required')
    },
    unity: {
      type: String,
      required: true,
      default: () => console.log('CarouselPlanPrice: The UNITY is required')
    }
  }
}
