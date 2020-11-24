<template>
  <v-app>
    <div id="app">
      <NavBar />
      <transition name="component-fade" mode="out-in">
        <router-view id="appContent" />
      </transition>
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
.top {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

a {
  color: white !important;
  font-weight: 500;
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
<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.8s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
