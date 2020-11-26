<template>
  <v-row class="px-12">
    <v-col class="hidden-sm-and-down" cols="1" />
    <v-col>
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
    text: String,
    designVar: Array
  }
};
</script>

<style scoped></style>
