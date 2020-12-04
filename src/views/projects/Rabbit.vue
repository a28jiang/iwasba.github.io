<template>
  <div>
    <Hero
      :heroSize="500"
      github="https://github.com/iwasba/Rabbit-Chrome-Extension"
      product="https://chrome.google.com/webstore/detail/rabbit-productivity-procr/ahlcihfjafcicppnhjcnbhcgmajkmimj?hl=en"
      name="Rabbit"
      subtitle="Productivity Extension"
      title="Rabbit"
      :designVar="[2]"
    />
    <Inspiration name="Rabbit" :designVar="[1, 2]" :imgSize="350" :offSetX="5">
      <template v-slot:description>
        <p class="mt-6">
          Productivity often comes and goes as it pleases. Days can seemingly
          fly past while browsing sites like Netflix and YouTube. Rabbit is a
          unique chrome extension that shows an eager, energetic rabbit to help
          users stay focused. Rabbit ranks the top sites of a user and has a
          variety of moods, from disappointment to happy, reflecting the users
          current browsing patterns.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" name="Rabbit">
      <template v-slot:description>
        <p class="mt-6">
          This project was created using vanilla JS, HTML and CSS. Logic for the
          extension was written using javascript with the help of Chrome
          <b>tabs</b> and <b>storage</b> APIs. This was an excellent project to
          revisit the fundamentals and create an application without using any
          fancy frameworks. <br /><br />To dive into Chrome API documentation,
          <a
            target="_blank"
            href="https://developer.chrome.com/extensions/api_index"
            >click here</a
          >
        </p>
      </template>
    </Stack>

    <Product :designVar="[1]" :imgSize="440" name="Rabbit">
      <template v-slot:description>
        <p class="mt-6">
          Chrome extensions are extremely versatile but I knew I wanted my
          extension to have an animated icon to increase interactivity and
          portray the Rabbit's emotions in real time. I also wanted users to
          have a mini-dashboard of their browsing habits shown upon opening the
          popup. I experimented with different popup layouts and designs. The
          design on the left features a more minimalistic interface, but I opted
          with a more detailed interface shown on the right to avoid confusion.
        </p>
      </template>
    </Product>
    <ImageBlock name="Rabbit/process.png" />
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
  name: "Rabbit",
  components: { Hero, Inspiration, Stack, Product, ImageBlock },
  data: function() {
    return {
      stack: ["javascript", "html", "chrome"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
