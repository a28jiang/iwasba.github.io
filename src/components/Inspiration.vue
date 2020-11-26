<template>
  <v-row class="pa-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col
      :class="{ fillWidth: $vuetify.breakpoint.smAndDown }"
      class="centered"
      sm="12"
      md="5"
    >
      <div class="leftAlign">
        <h2>Inspiration</h2>

        <slot name="description"></slot>
      </div>
    </v-col>
    <v-col sm="12" md="5" class="imagePanel">
      <v-img
        v-if="designVar.includes(1)"
        class="hidden-sm-and-down design1a"
        width="10vw"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar.includes(1)"
        class="hidden-sm-and-down design1b"
        width="5vw"
        :src="require(`@/assets/dots2.svg`)"
      />
      <v-img
        v-if="designVar.includes(2)"
        class="hidden-sm-and-down design2a"
        width="6vw"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar.includes(2)"
        class="hidden-sm-and-down design2b"
        width="5vw"
        :src="require(`@/assets/dots.svg`)"
      />
      <v-img
        v-if="designVar.includes(3)"
        class="hidden-sm-and-down design3"
        width="5vw"
        :src="require(`@/assets/dots2.svg`)"
      />
      <v-img
        :style="
          $vuetify.breakpoint.smAndDown
            ? ''
            : [
                offSetY ? { marginTop: `${offSetY}vw` } : { marginTop: '' },
                offSetX ? { marginLeft: `${offSetX}vw` } : { marginLeft: '' }
              ]
        "
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
    name: String,
    designVar: Array,
    imgSize: Number,
    offSetX: Number,
    offSetY: Number
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
  width: 80vw;
}

.design1a {
  opacity: 0;
  animation: fade-in-left 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  top: 0px;
  left: 20%;
}
.design1b {
  opacity: 0;
  transform: rotate(90deg);
  animation: fade-in 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  top: 320px;
  left: 85%;
  z-index: 1;
}
.design2a {
  opacity: 0;
  animation: fade-in-left 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  top: 300px;
  left: -112%;
  z-index: 1;
}
.design2b {
  opacity: 0;
  animation: fade-in-left 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  top: 260px;
  left: -120%;
}
.design3 {
  opacity: 0;
  animation: fade-in-down 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  top: 260px;
  left: 25%;
  z-index: 1;
}
</style>
