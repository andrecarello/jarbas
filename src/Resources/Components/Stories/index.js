import Story from '@/Resources/Components/Stories/Story/index.vue';
import { mapGetters } from 'vuex';

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

	computed: mapGetters({
		stories: 'StoryModel/stories'
	})
};
