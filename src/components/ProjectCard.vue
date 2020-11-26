<template>
  <v-card flat min-width="300">
    <v-img
      @click="$router.push(name)"
      class="cardImg"
      :style="$vuetify.breakpoint.smAndDown ? { width: '95vw' } : ''"
      :src="require(`@/assets/thumbnail/${name}.png`)"
    ></v-img>

    <v-row :style="{ maxHeight: '200px' }">
      <v-col class="centerV hidden-xs-only" cols="1">
        <div v-if="type.includes('dev')" class="devBadge" />
        <div v-if="type.includes('design')" class="designBadge" />
        <div v-if="type.includes('art')" class="artBadge" />
      </v-col>
      <v-col cols="4" class="pl-5">
        <v-card-title class="left">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="pt-1">
          {{ stack.join(", ") }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="7">
        <v-card-text>{{ description }}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    stack: Array,
    description: String,
    name: String,
    type: Array
  },

  data: () => ({}),
  mounted: function() {}
};
</script>

<style>
@media all and (min-width: 1300px) {
  .v-card__title {
    align-items: flex-start;
    word-break: inherit !important;
    word-wrap: normal;
    font-weight: 600;
    color: #4a4a4a;
    font-size: 32px;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }

  .v-card__subtitle {
    align-items: flex-start;
    font-size: 16px;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }

  .v-card__text {
    align-items: flex-start;
    text-align: left;
    font-size: 16px;
    color: gray;
    padding-left: 0;
    padding-right: 0;
  }
  .devBadge {
    height: 16px;
    width: 16px;
    background-color: #6c86a1;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
  .designBadge {
    height: 16px;
    width: 16px;
    background-color: #eba0a0;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
  .artBadge {
    height: 16px;
    width: 16px;
    background-color: #88d3c8;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
}
@media all and (max-width: 1300px) {
  .v-card__title {
    align-items: flex-start;
    word-break: inherit !important;
    word-wrap: normal;
    font-weight: 600;
    color: #4a4a4a;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }

  .v-card__subtitle {
    align-items: flex-start;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }

  .v-card__text {
    align-items: flex-start;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
  .devBadge {
    height: 12px;
    width: 12px;
    background-color: #6c86a1;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
  .designBadge {
    height: 12px;
    width: 12px;
    background-color: #eba0a0;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
  .artBadge {
    height: 12px;
    width: 12px;
    background-color: #88d3c8;
    margin: 8px 8px 12px 16px;
    border-radius: 50%;
  }
}
.cardImg {
  width: 48vw;
  border-radius: 12px !important;
}

.cardImg:hover {
  opacity: 0.5;
  cursor: pointer;
}
.centerV {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content {
  width: 48vw;
  padding-bottom: 2vw;
  padding-top: 1vw;
}
</style>
