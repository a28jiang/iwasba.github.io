<template>
  <v-row :style="{ paddingTop: '30px' }" class="product pa-12">
    <v-col
      class="hidden-sm-and-down"
      cols="1"
      :style="{ position: 'relative' }"
    >
      <v-img
        v-if="designVar.includes(1)"
        class="design1"
        max-width="10vw"
        :src="require(`@/assets/design1.svg`)"
      />
      <v-img
        v-if="designVar.includes(2)"
        class="design2"
        max-width="12vw"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar.includes(3)"
        class="design3"
        max-width="5vw"
        :src="require(`@/assets/dots2.svg`)"
      />
    </v-col>
    <v-col md="6" sm="12" class="centered">
      <v-img
        :max-width="imgSize"
        class="responsiveImage"
        :src="require(`@/assets/${name}/product.png`)"
      />
    </v-col>
    <v-col
      :class="{ fillWidth: $vuetify.breakpoint.smAndDown }"
      class="centered"
      md="4"
      sm="12"
      :order="$vuetify.breakpoint.smAndDown ? 'first' : ''"
    >
      <div class="leftAlign">
        <h2 v-if="title">{{ title }}</h2>
        <h2 v-else>Product Design</h2>
        <slot name="description"></slot>
      </div>
    </v-col>
    <v-col class="hidden-sm-and-down" cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "Product",
  props: {
    description: String,
    designVar: Array,
    name: String,
    title: String,
    imgSize: Number
  }
};
</script>

<style scoped>
.responsiveImage {
  width: 60vw;
}

.fillWidth {
  min-width: 100%;
}

.design1 {
  opacity: 0;
  animation: fade-in-left 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  left: 20%;
}
.design2 {
  opacity: 0;
  animation: fade-in-down 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  left: 180%;
  top: 5%;
  z-index: 0;
}
.design3 {
  opacity: 0;
  animation: fade-in 1s;
  animation-delay: 2s;
  animation-fill-mode: both;
  position: absolute;
  left: 250%;
  top: 68%;
  z-index: 2;
  transform: rotate(90deg);
}

.stack {
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #6c86a1;
}
.leftAlign {
  text-align: left;
}
</style>
