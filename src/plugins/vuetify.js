import Vue from "vue";
import Vuetify from "vuetify/lib";
import vuePositionSticky from "vue-position-sticky";

Vue.use(Vuetify);
Vue.use(vuePositionSticky);

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
