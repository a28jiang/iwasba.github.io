<template>
    <v-app>
        <div id="app">
            <NavBar />
            <transition name="fade" mode="out-in">
                <router-view :style="{ minHeight: '100vh' }" id="appContent" />
            </transition>
            <Footer />
        </div>
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: { NavBar, Footer },
}
</script>

<style lang="scss">
.v-card__text {
    color: var(--v-tertiary-base) !important;
}
.theme--dark.v-card {
    background-color: var(--v-background-base) !important;
    color: var(--v-secondary-base) !important;
}
.theme--light.v-card {
    background-color: var(--v-background-base) !important;
    color: var(--v-secondary-base) !important;
}
.theme--dark.v-application {
    background-color: var(--v-background-base) !important;
}
.theme--light.v-application {
    background-color: var(--v-background-base) !important;
}
.vue-typer {
    .custom.char {
        font-weight: 500;
        color: #a4a4a4;
        font-size: 32px;
        @media all and (max-width: 1500px) {
            font-size: 26px;
        }
        @media all and (max-width: 750px) {
            font-size: 20px;
        }
    }
}
#app {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    h1 {
        font-weight: bold;
        color: var(--v-primary-base) !important;
        margin: 16px;
        font-size: 5vw;
    }
    h2 {
        font-weight: bold;
        color: var(--v-primary-base) !important;
        font-size: 48px;
    }
    h3 {
        font-weight: 400;
        color: #c4c4c4;
        font-size: 28px;
    }
    h4 {
        font-weight: 600;
        color: var(--v-accent-base) !important;
        font-size: 30px;
    }
    .clickable:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    .clickable {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    .smoothTransition {
        transition: all 1s ease;
    }
    p {
        font-weight: 400;
        line-height: 26px;
        color: #c4c4c4;
        font-size: 20px;
    }
    .icon {
        color: var(--v-accent-base) !important;
        padding-left: 16px;
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
    align-items: flex-end;
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
.padSides {
    padding: 0 10vw 0 10vw;
}
.fillWidth {
    min-width: 100%;
}
a {
    text-decoration: none;
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
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
@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
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
.fadeLeft {
    opacity: 0;
    animation: fade-in-left 1.5s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
}
.fadeDown {
    opacity: 0;
    animation: fade-in-down 1.5s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
}
.fadeIn {
    opacity: 0;
    animation: fade-in 1.5s;
    animation-fill-mode: both;
}
.slowFade {
    opacity: 0;
    animation: fade-in 2s;
    animation-fill-mode: both;
}
.list-item {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-leave-active {
    position: absolute;
}
</style>
