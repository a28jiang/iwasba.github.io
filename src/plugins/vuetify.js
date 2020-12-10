import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#3f3f3f",
        secondary: "#2C2C2C",
        tertiary: "#A9A9A9",
        accent: "#6C86A1",
        error: "#EBA0A0",
        background: "#FFFFFF"
      },
      dark: {
        primary: "#FFFFFF",
        tertiary: "#c4c4c4",
        secondary: "#EBEBEB",
        accent: "#82A1C1",
        error: "#EBA0A0",
        background: "#323c46"
      }
    }
  }
});

export default vuetify;
