<template>
  <v-row class="stack px-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col :class="{ fillWidth: $vuetify.breakpoint.smAndDown }">
      <div class="leftAlign">
        <h2 :style="{ color: 'white' }">Tech Stack</h2>
        <slot name="description"></slot>
      </div>
    </v-col>
    <v-col sm="12" md="6" class="centered" max-width="420">
      <v-row>
        <v-col class="centered" v-for="tool in stack" :key="tool">
          <img
            class="fadeLeft"
            :style="imgSize ? { height: imgSize } : { height: '8vw' }"
            :src="require(`@/assets/icons/${tool}.png`)"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col class="hidden-sm-and-down" cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "Stack",
  props: {
    description: String,
    stack: Array,
    name: String,
    imgSize: Number || null
  }
};
</script>

<style scoped>
.fadeLeft {
  opacity: 0;
  animation: fade-in-left 1.5s;
  animation-delay: 2.5s;
  animation-fill-mode: both;
}
.fillWidth {
  min-width: 100%;
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
