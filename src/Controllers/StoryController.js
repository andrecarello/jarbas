import Controller from './Controller';

class StoryController extends Controller {
	set($payload) {
		this.dispatch('story', {
			stories: $payload
		});
	}
}

export default StoryController;
