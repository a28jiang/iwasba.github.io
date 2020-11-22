<template>
  <v-app-bar app flat color="rgba(0,0,0,0)" hide-on-scroll>
    <v-row class="navContent">
      <v-col class="centered noPadding" cols="1">
        <img
          v-on:click="$router.push('/')"
          class="clickable"
          :style="
            $vuetify.breakpoint.smAndDown
              ? { height: '25px' }
              : { height: '45px' }
          "
          src="../assets/logo.png"
        />
      </v-col>
      <v-col class="centered noPadding" cols="3">
        <button
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '100%' } : ''"
          class="routerLink px-2 clickable"
        >
          Resume
        </button>
      </v-col>
      <v-col class="centered noPadding" cols="2">
        <button
          text
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '100%' } : ''"
          class="routerLink mx-2 clickable"
          @click="$router.push('about')"
        >
          About
        </button>
      </v-col>
      <v-col cols="6" />
      <v-spacer />
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({})
};
</script>

<style scoped>
.noPadding {
  padding: 0;
}
.navContent {
  margin-top: 25px;
  padding: 10vw;
}
.marginTop {
  margin-top: -6px;
}

.routerLink {
  font-weight: bold;
  color: #c4c4c4;
  font-size: 130%;
  text-transform: none;
}
</style>
