import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#C4C4C4",
        accent: "#6C86A1",
        error: "#EBA0A0"
      }
    }
  }
});

export default vuetify;
