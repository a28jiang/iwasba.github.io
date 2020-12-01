<template>
  <div>
    <Hero
      :heroSize="675"
      name="Financely"
      subtitle="Interactive Savings App"
      prototype="https://xd.adobe.com/view/23ce6bd8-95ba-4d32-8787-a35310a4674d-769d/"
      title="QR Pay"
      :designVar="[3, 4]"
    />
    <Inspiration
      name="Financely"
      :designVar="[2, 3]"
      :offSetX="10"
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
    <Stack :stack="stack" name="Financely">
      <template v-slot:description>
        <p class="mt-6">
          I used Adobe XD to create the wireframes and high-fidelity screens. To
          design the various components and plan the composition, I used
          Photoshop, Illustrator and my iPad.
        </p>
      </template>
    </Stack>
    <Product
      title="App Design"
      :designVar="[1]"
      :imgSize="575"
      name="Financely"
    >
      <template v-slot:description>
        <p class="mt-6">
          The purpose of my app is to reduce the complexity that is often
          associated with finances. I wanted to have simplistic and meaningful
          call to actions to avoid confusion.

          <br /><br />
          I chose to house most of the important components in large circular
          buttons to create a radial theme throughout the app. Designing the app
          with no hard edges gives the interface a smooth and refined
          appearance.
        </p>
      </template>
    </Product>
    <ImageBlock name="Financely/qr-design.png" />
    <ImageBlock name="Financely/flows.png" />
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
  name: "Financely",
  components: { Hero, Inspiration, Stack, ImageBlock, Product },
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
