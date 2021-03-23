import anime from 'animejs/lib/anime.es.js';

export default {
	name: 'Story',

	props: {
		slides: {
			type: Array,
			required: true,
			default: () => console.log('Story: The SLIDES is required')
		},
		active: Number
	},

	data() {
		return {
			timeline: anime.timeline({
				autoplay: false,
				duration: this.duration,
				easing: 'linear'
			}),
			currentSlideIndex: 0,
			duration: 3000
		};
	},

	methods: {
		activate: function() {
			// Start timer
			this.resetSlide();
		},
		deactivate: function() {
			this.timeline.pause();
		},
		resetSlide: function() {
			// Jump to beginning of the slide
			this.timeline.pause();
			this.timeline.seek(this.currentSlideIndex * this.duration);
			this.timeline.play();
		}
	},

	mounted() {
		let $timeline = this.$el.getElementsByClassName('_story:timeline')[0]

    console.log($timeline[this.$parent.initial - 1])

		// Add progress bars to the timeline animation group
		this.slides.forEach((element, index) => {
			// this.timeline.add({
      //   targets: $timeline,
      //   width: '100%'
      // });
			// this.timeline.add({
			// 	targets: $timeline
			// 		.getElementsByClassName('_story\:slice')
			// 		[index].getElementsByClassName('_story\:progress'),
			// 	width: '100%',
			// 	changeBegin: () => {
			// 		console.log(index);
			// 		// Update the Vue component state when progress bar begins to play
			// 		this.currentSlideIndex = index;
			// 	},
			// 	complete: () => {
			// 		// Move to the next story when finished playing all slides
			// 		if (index === this.slides.length - 1) {
			// 			// this.nextStory();
			// 		}
			// 	}
			// });
		});
	}
};
