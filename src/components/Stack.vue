<template>
  <v-row class="stack px-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col sm="12" md="6">
      <div class="leftAlign">
        <h2 :style="{ color: 'white' }">Tech Stack</h2>
        <slot name="description"></slot>
      </div>
    </v-col>
    <v-col class="centered">
      <v-row>
        <v-col class="centered" v-for="tool in stack" :key="tool">
          <img
            :style="imgSize ? { maxHeight: imgSize } : { maxHeight: '80px' }"
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
.stack {
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #6c86a1;
}
.leftAlign {
  text-align: left;
}
</style>
