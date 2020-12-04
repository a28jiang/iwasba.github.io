<template>
  <div>
    <Hero
      :heroSize="675"
      name="Watchlist"
      subtitle="Binging Simplified"
      prototype="https://www.figma.com/file/ZvrgToXqcMg30E8os6aS14/watchlist?node-id=0%3A1"
      title="Watchlist"
      :designVar="[2]"
    />
    <Inspiration
      name="Watchlist"
      :designVar="[1, 2]"
      :offSetX="5"
      :offSetY="-2"
      :imgSize="550"
    >
      <template v-slot:description>
        <p class="mt-6">
          With all the shows and movies we're consuming nowadays, it may be hard
          to keep track of upcoming seasons and highly anticipated releases. I
          designed this app to provide an easy-to-use, centralized hub where
          users can keep track of their favourite shows.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" name="Watchlist">
      <template v-slot:description>
        <p class="mt-6">
          I'm currently developing the wireframes and graphics with Figma,
          Photoshop and Illustrator. I plan on developing the app with React,
          with the help of MovieDB API and an ExpressJS running the backend
        </p>
      </template>
    </Stack>
    <Product
      title="In Progress"
      :designVar="[1]"
      :imgSize="450"
      name="Watchlist"
    >
      <template v-slot:description>
        <p class="mt-6">
          I'm currently in the process of creating high-fidelity screens and
          planning out user-flows. It's important that my design prioritizes
          user accessibility and platform integration. Stay tuned!
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
import TextBlock from "@/components/TextBlock.vue";
import ImageBlock from "@/components/ImageBlock.vue";

export default {
  name: "Watchlist",
  components: { Hero, Inspiration, Stack, Product },
  data: function() {
    return {
      stack: ["figma", "illustrator", "photoshop", "react"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
