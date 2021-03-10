import Controller from './Controller';

class ThemeController extends Controller {
	themes = [ 'red', 'yellow', 'blue', 'orange', 'green', 'light-blue' ];

	set(index) {
		let themeIndex = 0;

		for (let j = 0; j < index; j++) {
			themeIndex = themeIndex >= this.themes.length - 1 ? 0 : themeIndex + 1;
		}

		let theme = typeof index === 'string' ? index : this.themes[themeIndex];

		this.dispatch('theme', 'theme', theme);
	}
}

export default ThemeController;
