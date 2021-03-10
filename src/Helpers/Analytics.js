class Analytics {
	static event() {
		window.onclick = (e) => {
			// e.preventDefault();

			const element = e.target.closest('[data-ga]');

			if (!element) return;

			const data = JSON.parse(element.dataset.ga);
			const name = element.dataset.gaName;
			let str = '';
			let len = 0;

			Object.keys(data).map((key, index) => {
				str += key + ': ' + data[key] + ' / ';
			});

			str = str.slice(0, -3);

			this.send(name + ' - ' + str);
		};
  }

  static send(text) {
    console.log(text)
  }

	static init() {
		this.event();
	}
}

export default Analytics;
