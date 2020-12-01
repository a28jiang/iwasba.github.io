<template>
  <v-row class="px-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col>
      <h2 class="mt-10" v-if="title" :style="{ textAlign: 'left' }">
        {{ title }}
      </h2>
      <p class="mt-6" :style="{ textAlign: 'left' }">
        {{ text }}
      </p>
    </v-col>
    <v-col class="hidden-sm-and-down" cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    title: String,
    text: String,
    designVar: Array
  }
};
</script>

<style scoped></style>
