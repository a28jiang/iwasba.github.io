<template>
  <v-app-bar app flat color="rgba(0,0,0,0)" hide-on-scroll>
    <v-row class="navContent">
      <v-col class="centered noPadding" cols="1">
        <v-img
          v-on:click="$router.push('/')"
          class="clickable icon"
          src="../assets/logo.png"
        />
      </v-col>
      <v-col class="centered noPadding" cols="3" sm="5">
        <button
          text
          :class="
            $vuetify.breakpoint.xsAndDown ? 'routerLinkSmall' : 'routerLink'
          "
          class="px-2 clickable"
        >
          Resume
        </button>
      </v-col>
      <v-col class="centered noPadding" cols="2" sm="5">
        <button
          text
          :class="
            $vuetify.breakpoint.xsAndDown ? 'routerLinkSmall' : 'routerLink'
          "
          class="mx-2 clickable"
          @click="$router.push('about')"
        >
          About
        </button>
      </v-col>
      <v-spacer />
    </v-row>
    <v-spacer class="hidden-sm-and-down" />
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

.icon {
  width: 100%;
}

.routerLinkSmall {
  font-weight: bold;
  color: #c4c4c4;
  font-size: 4.5vw;
  text-transform: none;
}

.routerLink {
  font-weight: bold;
  color: #c4c4c4;
  font-size: 22px;
  text-transform: none;
}
</style>
