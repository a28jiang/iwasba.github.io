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
        title="Illustrations"
        text="Some digital illustrations drawn on my tablet using Sketchbook."
      />
    </v-row>
    <div class="padSides fadeLeft">
      <v-row>
        <v-col sm="6" xs="12">
          <v-img
            aspect-ratio="0.652"
            :src="require('@/assets/illustration/pic3.png')"
          />
        </v-col>
        <v-col sm="6" xs="12">
          <v-img
            class="mb-6"
            :src="require('@/assets/illustration/pic10.png')"
          />
          <v-img
            class="mt-6"
            :src="require('@/assets/illustration/pic13.png')"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" xs="12">
          <v-img
            class="mb-6"
            :src="require('@/assets/illustration/pic9.png')"
          />
          <v-img
            class="mt-6"
            :src="require('@/assets/illustration/pic11.png')"
          />
        </v-col>
        <v-col sm="6" xs="12">
          <v-img
            aspect-ratio="0.652"
            position="left"
            :src="require('@/assets/illustration/pic2.png')"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" xs="12">
          <v-img
            aspect-ratio="0.652"
            :src="require('@/assets/illustration/pic6.png')"
          />
        </v-col>
        <v-col sm="6" xs="12">
          <v-img
            class="mb-6"
            :src="require('@/assets/illustration/pic7.png')"
          />
          <v-img
            class="mt-6"
            :src="require('@/assets/illustration/pic1.png')"
          />
        </v-col>
      </v-row>
    </div>
    <v-row class="centered pa-12 clickable" @click="$router.push('/')">
      <h4>Return Home</h4>
      <v-icon class="icon" large>
        mdi-exit-to-app
      </v-icon>
    </v-row>
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
