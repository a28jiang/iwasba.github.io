import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Covid from "../views/projects/Covid.vue";
import Financely from "../views/projects/Financely.vue";
import Hotpot from "../views/projects/Hotpot.vue";
import Illustration from "../views/projects/Illustration.vue";
import Linkedin from "../views/projects/Linkedin.vue";
import Photography from "../views/projects/Photography.vue";
import QRPay from "../views/projects/QRPay.vue";
import Rabbit from "../views/projects/Rabbit.vue";
import Vibeify from "../views/projects/Vibeify.vue";
import Watchlist from "../views/projects/Watchlist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Covid",
    name: "covid",
    component: Covid
  },
  {
    path: "/Financely",
    name: "financely",
    component: Financely
  },
  {
    path: "/Hotpot",
    name: "hotpot",
    component: Hotpot
  },
  {
    path: "/Illustration",
    name: "illustration",
    component: Illustration
  },
  {
    path: "/Linkedin",
    name: "linkedin",
    component: Linkedin
  },
  {
    path: "/Photography",
    name: "photography",
    component: Photography
  },
  {
    path: "/QRPay",
    name: "qrpay",
    component: QRPay
  },
  {
    path: "/Rabbit",
    name: "rabbit",
    component: Rabbit
  },
  {
    path: "/Watchlist",
    name: "watchlist",
    component: Watchlist
  },
  {
    path: "/covid",
    name: "covid",
    component: Covid
  },
  {
    path: "/Vibeify",
    name: "vibeify",
    component: Vibeify
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
