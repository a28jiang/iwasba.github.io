<template>
  <div>
    <Hero
      :heroSize="800"
      github="https://github.com/iwasba/Covid19-App"
      product="https://covid19-app-3b306.web.app/"
      name="Covid"
      subtitle="Data Visualization"
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
          <br /><br />To learn more about covid19-api,
          <a href="https://covid19api.com/">click here</a>
        </p>
      </template>
    </Stack>

    <Product title="App Design" :designVar="[1]" :imgSize="420" name="Covid">
      <template v-slot:description>
        <p class="mt-6">
          I took inspiration from stock market charts and indicators. When
          looking at the latest number of cases, we're more-so looking for
          trends and curves so I made sure to include % changes between days so
          patterns can be identified, just like stocks.
        </p>
      </template>
    </Product>
    <v-row class="centered pa-12 clickable" @click="$router.push('/')">
      <h4>Return Home</h4>
      <v-icon :style="{ color: '#6c86a1', paddingLeft: '16px' }" large>
        mdi-exit-to-app
      </v-icon>
    </v-row>
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

<style scoped></style>
