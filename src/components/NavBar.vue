<template>
  <v-app-bar class="navBar" app flat color="rgba(0,0,0,0)" hide-on-scroll>
    <v-row>
      <v-col cols="1" />
      <v-col cols="1">
        <v-img class="marginTop" max-width="48" src="../assets/logo.png" />
      </v-col>
      <v-col cols="3">
        <btn text class="routerLink">Projects</btn>
      </v-col>
      <v-col cols="2">
        <btn text class="routerLink">Work</btn>
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
.navBar {
  padding: 42px;
}
.marginTop {
  margin-top: -6px;
}
</style>
