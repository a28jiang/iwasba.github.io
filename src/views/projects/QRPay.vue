<template>
  <div>
    <Hero
      :heroSize="675"
      name="QRPay"
      subtitle="Fast and Accessible Payments"
      prototype="https://xd.adobe.com/view/95582122-27d1-4a34-8cc7-71e06d6c1521-c00b/"
      title="QR Pay"
      :designVar="[3, 4]"
    />
    <Inspiration
      name="QRPay"
      :designVar="[2]"
      :offSetX="5"
      :offSetY="5"
      :imgSize="500"
    >
      <template v-slot:description>
        <p class="mt-6">
          QRPay is a platform used by millions of, business-owners,
          entrepreneurs and professionals; it's a sea of opportunity. This sea
          represents a huge pool of data that can be used to quickly discern
          business trends and opportunities.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" name="QRPay">
      <template v-slot:description>
        <p class="mt-6">
          I used Adobe XD to create the wireframes and high-fidelity screens. To
          design the various components and plan the composition, I used
          Photoshop, Illustrator and my iPad.
        </p>
      </template>
    </Stack>
    <Product title="App Design" :designVar="[1]" :imgSize="550" name="QRPay">
      <template v-slot:description>
        <p class="mt-6">
          When designing the user interface, I wanted to make sure that the home
          screen remained simple and contained all the essential functions.
          <br /><br />
          I wanted to use a vibrant green colour scheme to enhance the theme of
          finance. I used lush green gradients throughout the app to spark
          visual interest as well as to tie into the theme. In addition, I used
          simple sans-serif fonts to keep the interface clean and modern.
        </p>
      </template>
    </Product>
    <ImageBlock name="QRPay/qr-design.png" />
    <TextBlock
      title="User Flows"
      text="In order to analyze various use-cases, I designed two flows (pre-pay and post-pay) for QR-Pay. Pre-pay grants a seamless payment experience whereas post-pay provides more business-customer interaction."
    />
    <ImageBlock name="QRPay/flows.png" />
    <v-row class="centered pa-12 clickable" @click="$router.push('/')">
      <h4>Return Home</h4>
      <v-icon class="icon" large>
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
  name: "QRPay",
  components: { Hero, Inspiration, Stack, TextBlock, ImageBlock, Product },
  data: function() {
    return {
      stack: ["illustrator", "figma", "photoshop"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
