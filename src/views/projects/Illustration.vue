<template>
  <div>
    <v-row :style="{ height: '5vw', position: relative }">
      <v-img
        v-if="$vuetify.breakpoint.mdAndUp"
        class="design1"
        width="8vw"
        src="../../assets/ellipse.svg"
      />
    </v-row>
    <v-row>
      <TextBlock
        title="Illustration"
        text="Some digital illustrations drawn on my tablet using Sketchbook."
      />
    </v-row>
    <div class="padSides fadeLeft">
      <v-row>
        <v-col class="centered" sm="6" xs="12">
          <v-img
            aspect-ratio="0.73"
            :src="require('@/assets/gallery/pic5.jpg')"
          />
        </v-col>
        <v-col sm="6" xs="12">
          <v-img class="mb-6" :src="require('@/assets/gallery/pic1.jpg')" />
          <v-img class="mt-6" :src="require('@/assets/gallery/pic15.jpg')" />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" xs="12">
          <v-img class="mb-6" :src="require('@/assets/gallery/pic29.jpg')" />
          <v-img class="mt-6" :src="require('@/assets/gallery/pic30.jpg')" />
        </v-col>
        <v-col class="centered" sm="6" xs="12">
          <v-img
            aspect-ratio="0.73"
            position="left"
            :src="require('@/assets/gallery/pic14.jpg')"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img class="mb-6" :src="require('@/assets/gallery/pic8.jpg')" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="centered" sm="6" xs="12">
          <v-img
            aspect-ratio="0.73"
            :src="require('@/assets/gallery/pic28.jpg')"
          />
        </v-col>
        <v-col sm="6" xs="12">
          <v-img class="mb-6" :src="require('@/assets/gallery/pic24.jpg')" />
          <v-img class="mt-6" :src="require('@/assets/gallery/pic26.jpg')" />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6" xs="12">
          <v-img class="mb-6" :src="require('@/assets/gallery/pic23.jpg')" />
          <v-img class="mt-6" :src="require('@/assets/gallery/pic10.jpg')" />
        </v-col>
        <v-col class="centered" sm="6" xs="12">
          <v-img
            aspect-ratio="0.73"
            :src="require('@/assets/gallery/pic20.jpg')"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/TextBlock.vue";

export default {
  name: "Illustration",
  components: { TextBlock },
  data: function() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.design1 {
  position: absolute;
  opacity: 0;
  animation: fade-in-down 1s;
  animation-delay: 1s;
  animation-fill-mode: both;
  top: 3vw;
}

.fadeLeft {
  opacity: 0;
  animation: fade-in-left 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
}
.colHeight {
  max-height: 650px;
}
.padSides {
  padding: 0 10% 24px 10%;
}
</style>
