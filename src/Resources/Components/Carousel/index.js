import Item from '@/Resources/Components/Carousel/Item/index.vue';

export default {
	name: 'Carousel',

	components: {
		'carousel-item': Item
	},

	data() {
		const $slides = [
			{
				id: 1,
				title: 'Chris Leipelt',
				subtitle: 'Lorem Ipsum',
				image: 'chris-leipelt-Ugoc3vgPqY4-unsplash.jpg'
			},
			{
				id: 2,
				title: 'Colin Lloyd',
				subtitle: 'Lorem Ipsum',
				image: 'colin-lloyd-Bd5Vwr8xy1o-unsplash.jpg'
			},
			{
				id: 3,
				title: 'Colin Lloyd',
				subtitle: 'Lorem Ipsum',
				image: 'colin-lloyd-GOBg_iwHb2s-unsplash.jpg'
			},
			{
				id: 4,
				title: 'Jonathan Adams',
				subtitle: 'Lorem Ipsum',
				image: 'jonathan-adams-R82QvpwRtic-unsplash.jpg'
			},
			{
				id: 5,
				title: 'Toa Heftiba',
				subtitle: 'Lorem Ipsum',
				image: 'toa-heftiba-GwhcTw7I6FY-unsplash.jpg'
			}
		];

		return {
			slides: $slides,
			timing: 5,
			actual: 1
		};
	},

	mounted() {
    console.log(this.$route)

		setInterval(() => {
			if (this.actual === this.slides.length) {
				this.actual = 1;
			} else {
				this.actual += 1;
			}
		}, this.timing * 1000);
	}
};
