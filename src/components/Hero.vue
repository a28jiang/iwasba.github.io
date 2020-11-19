<template>
  <v-row class="px-12 padTop">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col class="centered" sm="12" md="6">
      <v-img
        class="responsiveHero"
        :src="require(`@/assets/${name}/hero.png`)"
        :max-width="heroSize"
      />
    </v-col>
    <v-col
      class="left px-6"
      sm="12"
      md="4"
      :order="$vuetify.breakpoint.smAndDown ? 'first' : ''"
    >
      <div class="leftAlign">
        <v-row
          ><h2>{{ title }}</h2></v-row
        >
        <v-row
          ><h3>Data Visualization</h3>
          <v-icon v-if="github" :href="github" class="clickable icon">
            mdi-github
          </v-icon></v-row
        >
        <v-row v-if="product" class="clickable mt-12 hidden-sm-and-down">
          <h4>Try it out</h4>
          <v-icon large class="icon">
            mdi-exit-to-app
          </v-icon>
        </v-row>
      </div>
    </v-col>
    <v-col cols="1" class="hidden-sm-and-down" :style="{ position: relative }">
      <v-img
        v-if="designVar == 1"
        class="design1"
        max-width="130"
        :src="require(`@/assets/design1.svg`)"
      />
      <v-img
        v-if="designVar == 2"
        class="design2"
        max-width="130"
        :src="require(`@/assets/design1.svg`)"
      />
      <v-img
        v-if="designVar == 3"
        class="design3"
        max-width="80"
        :src="require(`@/assets/dots.svg`)"
      />
      <v-img
        v-if="designVar == 3"
        class="design4"
        max-width="200"
        :src="require(`@/assets/ellipse.svg`)"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: String,
    name: String,

    github: String,
    product: String,

    heroSize: Number,
    designVar: Number
  }
};
</script>

<style scoped>
.padTop {
  margin-top: 60px;
}

.icon {
  color: #6c86a1;
  padding-left: 16px;
}

.leftAlign {
  text-align: left;
}
.responsiveHero {
  width: 50vw;
  z-index: 1;
}
.design1 {
  position: absolute;
  top: 40px;
  left: 90%;
}
.design2 {
  position: absolute;
  top: 40px;
  left: 85%;
  transform: rotate(-90deg);
}
.design3 {
  position: absolute;
  top: 320px;
  left: 90%;
  transform: rotate(-90deg);
}

.design4 {
  position: absolute;
  top: 80px;
  left: 7%;
  z-index: 0;
}
</style>
