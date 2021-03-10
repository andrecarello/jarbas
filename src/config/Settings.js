import Anonymous from '@/Helpers/Anonymous';
import Interactions from '@/Helpers/Interactions';
import Analytics from '@/Helpers/Analytics';

export const PROJECT_NAME = PROTOCOL === 'https:' ? 'TIM Ofertas' : 'TIM Oferta';
export const PROJECT_SLUG_NAME = 'tim-ofertas';
export const REFERER = 'TIM_OFERTAS';
export const CLIENT_NAME = 'TIM';
export const ANONYMOUS = 'uuid';
export const INTERACTIONS = false;
export const ANALYTICS = false;
export const TEST_EMAIL = '';
export const TEST_PASSWORD = '';
export const CLIENT_EMAIL_SUPPORT = '';
export const TEST_MSISDN = '51982558409'
export const TEST_PIN = '1808';
// export const GTAG_ID = 'G-9KDNZXLXQY'
export const GTAG_ID = 'G-YR82LEFTFD';

export const PROTOCOL = document.location.protocol;

export default {
	title: (page = '') => {
		if (page) document.title = `${page} | ${PROJECT_NAME}`;
		else document.title = PROJECT_NAME;
	},

	anonymous: () => {
		if (!localStorage.getItem(ANONYMOUS)) return Anonymous.init();

		return null;
	},

	interactions: (schema) => {
		if (INTERACTIONS) return Interactions.init({ schema: schema });

		return null;
	},

	analytics: () => {
		if (ANALYTICS) return Analytics.init();
	}
};
