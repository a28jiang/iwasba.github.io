<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavBar />
    <router-view id="appContent" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar }
};
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: visible;

  .accent {
    color: #6c86a1;
  }
  h1 {
    font-weight: bold;
    color: #000000;
    font-size: 5vw;
  }
  h2 {
    font-weight: bold;
    color: #000000;
    font-size: 48px;
  }
  h3 {
    font-weight: 400;
    color: #c4c4c4;
    font-size: 1.75vw;
    text-transform: none;
  }
  .routerLink {
    font-weight: bold;
    color: #c4c4c4;
    font-size: 20px;
    text-transform: none;
  }

  p {
    font-weight: 300;
    color: #c4c4c4;
    font-size: 18px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
