module.exports = {
  css: {
    loaderOptions: {
      sass: {
				prependData: `
					@import "@/assets/sass/core/_settings.scss";
					@import "@/assets/sass/core/_functions.scss";
          @import "@/assets/sass/core/_mixins.scss";
          @import "@/assets/sass/core/_colors";
          @import "@/assets/sass/layout/_index.scss";
				`
      }
    }
  }
};
