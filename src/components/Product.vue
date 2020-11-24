<template>
  <v-row class="product px-12">
    <v-col
      class="hidden-sm-and-down"
      cols="1"
      :style="{ position: 'relative' }"
    >
      <v-img
        v-if="designVar.includes(1)"
        class="design1"
        width="10vw"
        :src="require(`@/assets/design1.svg`)"
      />
      <v-img
        v-if="designVar.includes(2)"
        class="design2"
        width="12vw"
        :src="require(`@/assets/ellipse.svg`)"
      />
      <v-img
        v-if="designVar.includes(3)"
        class="design3"
        width="5vw"
        :src="require(`@/assets/dots2.svg`)"
      />
    </v-col>
    <v-col class="centered">
      <v-img
        :max-width="imgSize"
        :src="require(`@/assets/${name}/product.png`)"
      />
    </v-col>
    <v-col
      class="centered"
      sm="12"
      md="4"
      :order="$vuetify.breakpoint.smAndDown ? 'first' : 'last'"
    >
      <div class="leftAlign">
        <h2>Product Design</h2>
        <p class="mt-6">
          I took inspiration from stock market charts and indicators. When
          looking at the latest number of cases, we're more-so looking for
          trends and curves so I made sure to include % changes between days so
          patterns can be identified, just like stocks.
        </p>
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
    imgSize: Number
  }
};
</script>

<style scoped>
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
