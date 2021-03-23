import { mapGetters } from 'vuex';

import Story from '@/Resources/Components/Stories/Story/index.vue';

export default {
	name: 'Stories',

	data() {
		return {
			currentStoryIndex: 0
		};
	},

	components: {
		story: Story
	},

	mounted() {
		console.log(this.stories);
	},

	methods: {
		openStories: function(id) {
			_.controller('story').set({
				open: true,
				initial: id
			});
		}
	},

	computed: mapGetters({
		stories: 'StoryModel/stories',
    initial: 'StoryModel/initial'
	})
};
