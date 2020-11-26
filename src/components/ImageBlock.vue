<template>
  <v-row>
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col class="centered">
      <v-img
        v-if="index"
        :max-width="imageSize ? imageSize : '60vw'"
        :src="require(`@/assets/${name}/process${index}.png`)"
      />
      <v-img
        v-else
        :max-width="imageSize ? imageSize : '60vw'"
        :src="require(`@/assets/${name}/process.png`)"
      />
    </v-col>
    <v-col class="hidden-sm-and-down" cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "ImageBlock",
  props: {
    name: String,
    index: Number,
    imageSize: Number
  }
};
</script>

<style scoped></style>
