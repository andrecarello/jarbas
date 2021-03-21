import Stories from '@/Resources/Components/Stories/index.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'Home',

	data() {

    const $stories = [
			[
        {
          user: 'Colin Lloyd',
          avatar: 'colin-lloyd-Bd5Vwr8xy1o-unsplash',
          stories: [
            {
              image: 'chris-leipelt-Ugoc3vgPqY4-unsplash',
              alt: 'Chris Leipelt',
            },
            {
              image: 'colin-lloyd-Bd5Vwr8xy1o-unsplash',
              alt: 'Colin Lloyd',
            },
            {
              image: 'colin-lloyd-GOBg_iwHb2s-unsplash',
              alt: 'Colin Lloyd',
            }
          ]
        },
        {
          user: 'Jonathan Adams',
          avatar: 'jonathan-adams-R82QvpwRtic-unsplash',
          stories: [
            {
              image: 'jonathan-adams-R82QvpwRtic-unsplash',
              alt: 'Jonathan Adams',
            }
          ]
        },
        {
          user: 'Charly PN',
          avatar: 'charly-pn-bLqKgljgpf4-unsplash',
          stories: [
            {
              image: 'toa-heftiba-GwhcTw7I6FY-unsplash',
              alt: 'Toa Heftiba',
            },
            {
              image: 'charly-pn-bLqKgljgpf4-unsplash',
              alt: 'Charly PN'
            }
          ]
        }
			]
		];

		return {
			setStories: $stories
		};
	},

  mounted() {
    _.controller('story').set(this.setStories)
  },

	components: {
		stories: Stories
	},

  computed: mapGetters({
    stories: 'StoryModel/stories'
  })
};
