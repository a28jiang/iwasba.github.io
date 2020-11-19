<template>
  <div>
    <Hero
      :heroSize="800"
      github="a"
      product="a"
      name="Covid"
      title="Covid-19 Tracker"
      :designVar="1"
    />
    <Inspiration
      name="Covid"
      :description="inspiration"
      :designVar="2"
      :imgSize="800"
    />

    <v-row class="stack px-12">
      <v-col class="hidden-sm-and-down" cols="2" />
      <v-col sm="12" md="6">
        <div class="leftAlign">
          <h2 :style="{ color: 'white' }">Tech Stack</h2>
          <p class="mt-6">
            I used VueJS to create the frontend. Using axios, I was able to call
            the COVID19-API which is a public api that returns COVID-19 data as
            JSON. Using the data from the api, I then used ChartJS to render
            graphs. This project increased my knowledge in javascript and helped
            me discover a wonderful API.
            <br /><br />To learn more about covid19-api, click here
          </p>
        </div>
      </v-col>
      <v-col class="centered">
        <v-row>
          <v-col class="centered" v-for="tool in stack" :key="tool">
            <img
              :style="{ maxHeight: '80px' }"
              :src="require(`@/assets/icons/${tool}.png`)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="product px-12">
      <v-col class="hidden-sm-and-down" cols="2">
        <v-img class="design4" max-width="130" src="../../assets/design1.svg" />
      </v-col>
      <v-col class="centered">
        <v-img
          max-width="420"
          :src="require(`@/assets/${$options.name}/product.png`)"
        />
      </v-col>
      <v-col
        class="centered"
        sm="12"
        md="4"
        :order="$vuetify.breakpoint.smAndDown ? 'first' : 'last'"
      >
        <div class="leftAlign">
          <h2>Product Design</h2>
          <p class="mt-6">
            I took inspiration from stock market charts and indicators. When
            looking at the latest number of cases, we're more-so looking for
            trends and curves so I made sure to include % changes between days
            so patterns can be identified, just like stocks.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Inspiration from "@/components/Inspiration.vue";

export default {
  name: "Covid",
  components: { Hero, Inspiration },
  data: function() {
    return {
      inspiration:
        " With COVID-19 being a major issue affecting the entire world, I thought it would be nice to create a web-app that friends and family could use to keep track of the latest numbers.",
      stack: ["chartjs", "covid19", "vue"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.padTop {
  margin-top: 60px;
}
.stack {
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #6c86a1;
}

.design2 {
  position: absolute;
  top: -70px;
  left: 20%;
}
.design3 {
  position: absolute;
  transform: rotate(90deg);
  top: 200px;
  left: 80%;
  z-index: 1;
}

.design4 {
  transform: scaleX(-1);
  margin-left: 40px;
}

.inspiration {
  position: absolute;
  top: -80px;
  left: 0%;
}

.hero {
  width: 80vw;
}
.banner {
  min-height: 700px;
}

.leftAlign {
  text-align: left;
}

.pushTop {
  margin-top: -64px;
}

.icon {
  color: #6c86a1;
  padding-left: 16px;
}
</style>
