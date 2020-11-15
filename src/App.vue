<template>
  <v-app>
    <div id="app">
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
      <NavBar />
      <router-view id="appContent" />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { NavBar, Footer }
};
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  h1 {
    font-weight: bold;
    color: #3f3f3f;
    margin: 16px;
    font-size: 5vw;
  }
  h2 {
    font-weight: bold;
    color: #3f3f3f;
    font-size: 48px;
  }
  h3 {
    font-weight: 400;
    color: #c4c4c4;
    font-size: 28px;
  }
  h4 {
    font-weight: 600;
    color: #6c86a1;
    font-size: 30px;
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

  .clickable:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    line-height: 26px;
    color: #c4c4c4;
    font-size: 20px;
  }
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.topLeft {
  display: flex;
  justify-content: left;
  align-items: end;
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
