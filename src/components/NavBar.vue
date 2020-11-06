<template>
  <v-app-bar app flat color="rgba(0,0,0,0)" hide-on-scroll>
    <v-row>
      <v-col cols="1" />
      <v-col cols="1">
        <v-img max-height="48" max-width="48" src="../assets/logo.png" />
      </v-col>
      <v-col cols="2">
        <v-btn text class="routerLink">Projects</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn text class="routerLink">Work</v-btn>
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
.toolbar {
  box-shadow: none;
  background-color: none;
}
.padLeft {
  padding-left: 64px;
}
.customHeader {
  box-shadow: none;
  background-color: none;
}
</style>
