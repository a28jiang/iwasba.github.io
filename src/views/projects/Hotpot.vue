<template>
  <div>
    <Hero
      :heroSize="675"
      name="Hotpot"
      subtitle="Just for fun!"
      prototype="https://xd.adobe.com/view/294bc175-4220-4ae8-84b7-7e9ed9c18eab-7c18/"
      title="Hotpot Tracker"
      :designVar="[3, 4]"
    />
    <Inspiration
      name="Hotpot"
      :designVar="[1, 2]"
      :offSetX="5"
      :offSetY="-2"
      :imgSize="400"
    >
      <template v-slot:description>
        <p class="mt-6">
          I wanted to create a different savings app, targeted towards younger
          audiences with playful visuals and utilizing game-like mechanics. By
          implementing a streak mechanic, similar to SnapChat, users who
          consistently save their money will be awarded with coupons and in-app
          incentives.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" name="Hotpot">
      <template v-slot:description>
        <p class="mt-6">
          I undertook this project mostly to have fun and gain more experience
          with Figma. This project helped me discover XD's various animations,
          plugins and features. To create graphics for this mockup, I used
          Illustrator.
        </p>
      </template>
    </Stack>

    <ImageBlock name="Hotpot/hotpot-design.png" />
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
  name: "Hotpot",
  components: { Hero, Inspiration, Stack, ImageBlock },
  data: function() {
    return {
      stack: ["illustrator", "xd", "photoshop"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
