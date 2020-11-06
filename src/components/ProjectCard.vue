<template>
  <v-card flat class="cardStyle" max-width="500px">
    <v-img
      class="cardImg"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="350px"
    ></v-img>
    <div class="content">
      <v-row>
        <v-col class="centerV" cols="1">
          <div class="devBadge" />
          <div class="devBadge" />
        </v-col>
        <v-col cols="5">
          <v-card-title>
            Top western road trips
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
        </v-col>
        <v-col cols="6">
          <v-card-text
            >With a simple conditional, you can easily add supplementary text
            that is hidden until opened.</v-card-text
          >
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    stack: String,
    description: String,
    image: String,
    link: String,
    type: Array
  },

  data: () => ({})
};
</script>

<style>
.cardImg {
  border-radius: 12px !important;
}

.v-card__title {
  align-items: flex-start;
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

.centerV {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content {
  padding-bottom: 2vw;
  padding-top: 1vw;
}

.devBadge {
  height: 1vw;
  width: 1vw;
  background-color: #6c86a1;
  margin: 8px 8px 12px 16px;
  border-radius: 50%;
}
.designArt {
  height: 1vw;
  width: 1vw;
  background-color: #eba0a0;
  margin: 8px 8px 12px 16px;
  border-radius: 50%;
}
.artBadge {
  height: 1vw;
  width: 1vw;
  background-color: #88d3c8;
  margin: 8px 8px 12px 16px;
  border-radius: 50%;
}
</style>
