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
        class="px-12 fadeIn"
        :class="{ fillWidth: $vuetify.breakpoint.smAndDown }"
        md="4"
        sm="12"
      >
        <h2
          class="leftAlign"
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '10vw' } : ''"
        >
          Hey I'm <span class="titleAccent"> Aaron!</span>
        </h2>
        <h3
          :style="$vuetify.breakpoint.smAndDown ? { fontSize: '24px' } : ''"
          class="leftAlign pt-2"
        >
          <b>Systems Design Engineering</b> at the University of Waterloo
        </h3>
        <p class="leftAlign pt-8">
          Passionate for coding with an eye for design, I love developing apps
          that provide a seamless user experience. Over the last few months,
          I've been actively working on various passion projects such as
          <b>Covid-19 Tracker</b> and <b>Rabbit</b>. When it comes to problem
          solving, I love combining design and development so that I can find
          fresh, innovative ways to tackle problem spaces.
        </p>
        <p class="leftAlign pt-5">
          When I'm taking a break, you can probably find me taking pictures,
          doodling on my tablet or playing basketball with friends.
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
  padding-top: 90px;
}
</style>
