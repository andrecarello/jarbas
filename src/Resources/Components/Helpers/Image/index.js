export default {
	name: 'ImageComponent',
	props: {
		container: {
			type: Boolean,
			required: false,
			default: false
		},
		source: {
			type: String,
			required: true,
			default: () => console.log('The image source is required')
		},
		alt: {
			type: String,
			required: true,
			default: () => console.log('The image alt is required')
		}
	}
};
