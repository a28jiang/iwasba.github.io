import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#C4C4C4",
        accent: "#6C86A1",
        error: "#EBA0A0"
      },
      accent: "#6C86A1"
    }
  }
});

export default vuetify;
