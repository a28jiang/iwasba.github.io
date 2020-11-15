<template>
  <v-app-bar app flat color="rgba(0,0,0,0)" hide-on-scroll>
    <v-row class="navContent">
      <v-col cols="1" />
      <v-col cols="1">
        <img
          v-on:click="$router.push('/')"
          class="mt-n2 clickable"
          :style="{ maxWidth: 48 }"
          src="../assets/logo.png"
        />
      </v-col>
      <v-col cols="3">
        <button text class="routerLink">Resume</button>
      </v-col>
      <v-col cols="2">
        <button text class="routerLink" @click="$router.push('about')">
          About
        </button>
      </v-col>
      <v-spacer />
    </v-row>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({})
};
</script>

<style scoped>
.navContent {
  margin-top: 25px;
}
.marginTop {
  margin-top: -6px;
}
</style>
