<template>
  <v-row class="pa-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col class="centered" sm="12" md="5">
      <div class="leftAlign">
        <h2>Inspiration</h2>
        <p class="mt-6">
          {{ description }}
        </p>
      </div>
    </v-col>
    <v-col sm="12" md="5" class="imagePanel">
      <v-img
        v-if="designVar == 1"
        class="hidden-sm-and-down design1a"
        max-width="150"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar == 1"
        class="hidden-sm-and-down design1b"
        max-width="80"
        :src="require(`@/assets/dots2.svg`)"
      />
      <v-img
        v-if="designVar == 2"
        class="hidden-sm-and-down design2a"
        max-width="175"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar == 2"
        class="hidden-sm-and-down design2b"
        max-width="80"
        :src="require(`@/assets/dots.svg`)"
      />
      <v-img
        v-if="designVar == 2"
        class="hidden-sm-and-down design3"
        max-width="80"
        :src="require(`@/assets/dots2.svg`)"
      />
      <v-img
        class="responsiveImage"
        :max-width="imgSize"
        :src="require(`@/assets/${name}/inspiration.png`)"
      />
    </v-col>
    <v-col class="hidden-sm-and-down" cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "Inspiration",
  props: {
    description: String,
    name: String,
    designVar: Number,
    imgSize: Number
  }
};
</script>

<style scoped>
.imagePanel {
  position: relative;
  min-height: 300px;
}

.leftAlign {
  text-align: left;
}
.responsiveImage {
  position: absolute;
  width: 70vw;
  top: 20px;
}

.design1a {
  position: absolute;
  top: 0px;
  left: 20%;
}
.design1b {
  position: absolute;
  transform: rotate(90deg);
  top: 320px;
  left: 85%;
  z-index: 1;
}
.design2a {
  position: absolute;
  top: 340px;
  left: -138%;
}
.design2b {
  position: absolute;
  top: 270px;
  left: -120%;
  z-index: 1;
}
.design3 {
  position: absolute;
  top: 270px;
  left: 25%;
  z-index: 1;
}
</style>
