<template>
  <v-card flat class="cardStyle" max-width="600px">
    <v-img
      @click="$router.push(name)"
      class="cardImg"
      :src="require(`@/assets/thumbnail/${name}.png`)"
      height="350px"
    ></v-img>
    <div class="content">
      <v-row>
        <v-col class="centerV" cols="1">
          <div v-if="type.includes('dev')" class="devBadge" />
          <div v-if="type.includes('design')" class="designBadge" />
          <div v-if="type.includes('art')" class="artBadge" />
        </v-col>
        <v-col cols="5">
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-subtitle>
            {{ stack.join(" ") }}
          </v-card-subtitle>
        </v-col>
        <v-col cols="6">
          <v-card-text>{{ description }}</v-card-text>
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
    stack: Array,
    description: String,
    name: String,
    type: Array
  },

  data: () => ({}),
  mounted: function() {
    console.log(this.title);
  }
};
</script>

<style>
.cardImg {
  border-radius: 12px !important;
}

.cardImg:hover {
  opacity: 0.5;
  cursor: pointer;
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
.designBadge {
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
