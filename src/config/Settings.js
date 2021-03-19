import Anonymous from '@/Helpers/Anonymous';
import Interactions from '@/Helpers/Interactions';
import Analytics from '@/Helpers/Analytics';


export const PROTOCOL = document.location.protocol;
export const DEV = PROTOCOL === 'http:';

export const PROJECT_NAME = 'Jarbas';
export const PROJECT_SLUG_NAME = 'jarbas';
export const REFERER = 'JARBAS';
export const CLIENT_NAME = 'JARBAS';
export const ANONYMOUS = 'uuid';
export const INTERACTIONS = false;
export const ANALYTICS = false;
export const TEST_EMAIL = '';
export const TEST_PASSWORD = '';
export const CLIENT_EMAIL_SUPPORT = '';
export const TEST_MSISDN = ''
export const TEST_PIN = '';
export const GTAG_ID = '';


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
