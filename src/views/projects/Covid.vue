<template>
  <div>
    <Hero
      :heroSize="800"
      github="a"
      product="a"
      name="Covid"
      title="Covid-19 Tracker"
      :designVar="[1]"
    />
    <Inspiration name="Covid" :designVar="[1, 2]" :imgSize="700">
      <template v-slot:description>
        <p class="mt-6">
          With COVID-19 being a major issue affecting the entire world, I
          thought it would be nice to create a web-app that friends and family
          could use to keep track of the latest numbers.
        </p>
      </template>
    </Inspiration>

    <Stack :stack="stack" name="Covid">
      <template v-slot:description>
        <p class="mt-6">
          I used VueJS to create the frontend. Using axios, I was able to call
          the COVID19-API which is a public api that returns COVID-19 data as
          JSON. Using the data from the api, I then used ChartJS to render
          graphs. This project increased my knowledge in javascript and helped
          me discover a wonderful API.
          <br /><br />To learn more about covid19-api, <a>click here</a>
        </p>
      </template>
    </Stack>

    <Product :designVar="[1]" :imgSize="420" name="Covid">
      <template v-slot:description>
        <p class="mt-6">
          I took inspiration from stock market charts and indicators. When
          looking at the latest number of cases, we're more-so looking for
          trends and curves so I made sure to include % changes between days so
          patterns can be identified, just like stocks.
        </p>
      </template>
    </Product>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Inspiration from "@/components/Inspiration.vue";
import Stack from "@/components/Stack.vue";
import Product from "@/components/Product.vue";

export default {
  name: "Covid",
  components: { Hero, Inspiration, Stack, Product },
  data: function() {
    return {
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
