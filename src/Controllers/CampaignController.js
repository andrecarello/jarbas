import Controller from './Controller';
import { PROTOCOL } from '@/config/Settings';

class CampaignController extends Controller {
	set($payload) {
		this.dispatch('campaign', $payload);
	}
}

export default CampaignController;
