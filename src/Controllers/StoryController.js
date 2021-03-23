import Controller from './Controller';

class StoryController extends Controller {

  set($payload) {
		this.dispatch('story', $payload);
	}
}

export default StoryController;
