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

  .accent {
    color: #6c86a1;
    margin-left: 0.3em;
  }
  h1 {
    font-weight: bold;
    color: #000000;
    margin: 16px;
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
  }
  .routerLink {
    font-weight: bold;
    color: #c4c4c4;
    font-size: 20px;
    text-transform: none;
  }
  .routerLink:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  p {
    font-weight: 300;
    color: #c4c4c4;
    font-size: 18px;
  }
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  display: flex;
  justify-content: left;
  align-items: center;
}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
