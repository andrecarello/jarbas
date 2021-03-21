import Carousel from '@/Resources/Components/Carousel/index.vue';

export default {
	name: 'Home',

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
			slides: $slides
		};
	},

	mounted() {
		_.controller('carousel').set(this.slides);
	},

	components: {
		carousel: Carousel
	}
};
