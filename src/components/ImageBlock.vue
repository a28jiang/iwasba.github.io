<template>
  <v-row class="pa-6">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col class="centered">
      <v-img
        :max-width="imageSize ? imageSize : '70vw'"
        :src="require(`@/assets/${name}`)"
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
    imageSize: Number
  }
};
</script>

<style scoped></style>
