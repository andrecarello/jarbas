module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'build',
  productionSourceMap: false,
  integrity: true,
  devServer: {
    proxy: 'http://localhost:8080'
  },
  css: {
    loaderOptions: {
      sass: {
				additionalData: `
					@import "@/assets/sass/core/_settings.scss";
					@import "@/assets/sass/core/_functions.scss";
          @import "@/assets/sass/core/_mixins.scss";
          @import "@/assets/sass/core/_colors";
          @import "@/assets/sass/abstracts/index.scss";
				`
      }
    }
  }
};
