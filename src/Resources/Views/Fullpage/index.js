export default {
  name: 'Fullpage',

  data() {
    return {}
  },

  mounted() {
    $('#fullpage').fullpage({
      scrollBar: true,
      normalScrollElements: "#scrollable",
      scrollingSpeed: 800,
      verticalCentered: false,
      verticalCentered: false,
      navigation: "true",
      navigationPosition: "right",
      responsiveWidth: 100,
    });
  }
}
