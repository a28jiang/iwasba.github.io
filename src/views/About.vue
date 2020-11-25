<template>
  <div class="centered">
    <v-row :class="$vuetify.breakpoint.smAndDown ? 'padTop' : ''">
      <v-col
        cols="3"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img class="design1" width="15vw" src="../assets/ellipse.svg" />
        <v-img class="design3" width="6vw" src="../assets/dots.svg" />
      </v-col>

      <v-col
        class="px-12"
        :class="{ fillWidth: $vuetify.breakpoint.smAndDown }"
        md="4"
        sm="12"
      >
        <h2
          class="leftAlign"
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '10vw' } : ''"
        >
          Hey I'm <span class="titleAccent"> Aaron</span>
        </h2>
        <h3
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '24px' } : ''"
          class="leftAlign pt-2"
        >
          <b>Systems Design</b> Engineering at the
          <b>University of Waterloo</b>
        </h3>
        <p class="leftAlign pt-8">
          I don't think so. xs-and-down would imply there is another breakpoint
          that it overlaps, which is not the case. I think with improved
          documentation this would be more clear.
        </p>
        <p class="leftAlign pt-5">
          I don't think so. xs-and-down would imply there is another breakpoint
          that it overlaps, which is not the case. I think with improved
          documentation this would be more clear.
        </p>
      </v-col>

      <v-col class="centered" md="3" sm="12">
        <v-img
          :max-width="$vuetify.breakpoint.smAndDown ? '50vw' : '20vw'"
          src="../assets/about.svg"
        />
      </v-col>
      <v-col
        cols="2"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img
          class="design2"
          width="10vw"
          :src="require(`@/assets/design1.svg`)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
.titleAccent {
  color: #6c86a1;
}

.leftAlign {
  text-align: left;
}

.design1 {
  position: absolute;
  opacity: 0;
  animation: fade-in 1s;
  animation-delay: 1s;
  animation-fill-mode: both;

  top: 10%;
  left: -5%;
}

.design2 {
  opacity: 0;
  animation: fade-in-down 1s;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}

.design3 {
  position: absolute;
  opacity: 0;
  animation: fade-in-left 1s;
  animation-delay: 1.75s;
  animation-fill-mode: both;
  top: 35%;
  left: 14%;
}

.fillWidth {
  min-width: 100%;
}

.padTop {
  padding-top: 60px;
}
</style>
