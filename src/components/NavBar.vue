<template>
  <v-app-bar class="pt-6" absolute app flat color="rgba(0,0,0,0)">
    <v-row class="navContent">
      <v-col
        class="left"
        :style="
          $vuetify.breakpoint.smAndDown
            ? { paddingLeft: '36px' }
            : { paddingLeft: '10%' }
        "
        md="3"
        sm="12"
      >
        <img
          v-on:click="$router.push('/')"
          class="clickable"
          :style="
            $vuetify.breakpoint.smAndDown
              ? { height: '25px' }
              : { height: '40px' }
          "
          src="../assets/logo.png"
        />
        <a href="Aaron_Jiang_2021.pdf" target="_blank">
          <button
            :style="$vuetify.breakpoint.smAndDown ? { fontSize: '100%' } : ''"
            class="routerLink px-md-8 px-4 clickable"
          >
            Resume
          </button>
        </a>
        <button
          text
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '100%' } : ''"
          class="routerLink px-md-8 px-4 clickable"
          @click="$router.push('about')"
        >
          About
        </button>
        <v-switch
          class="pt-4 px-md-8 px-4"
          :value="$vuetify.theme.dark"
          inset
          @change="toggleDarkTheme()"
        />
        <v-icon class="mt-n2 ml-md-n6 ml-n3 rotateIcon">
          mdi-brightness-2
        </v-icon>
      </v-col>

      <v-spacer />
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({}),
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      var el = document.querySelector(".appBody");
      if (this.$vuetify.theme.dark) el.style.backgroundColor = "#323c46";
      else el.style.backgroundColor = "#FFFFFF";
    }
  }
};
</script>

<style scoped>
.navContent {
  margin-top: 25px;
}
.routerLink {
  font-weight: bold;
  color: #c4c4c4;
  font-size: 130%;
  text-transform: none;
  z-index: 99;
}
.rotateIcon {
  transform: rotate(130deg);
}
</style>
