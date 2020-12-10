<template>
  <div>
    <Hero
      :heroSize="650"
      github="https://github.com/iwasba/vibeify"
      devpost="https://devpost.com/software/vibeify"
      name="Vibeify"
      subtitle="Intelligent DJ Companion"
      title="Vibeify"
      :designVar="[1]"
    />
    <Inspiration
      name="Vibeify"
      :designVar="[1, 2]"
      :imgSize="300"
      :offSetX="7"
      :offSetY="4"
      :forceY="20"
    >
      <template v-slot:description>
        <p class="mt-6">
          Music preference varies from individual to individual, but can also
          vary from mood to mood. We wanted to create an intelligent DJ to help
          match whatever vibe you're feeling.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" :imgSize="6" name="Vibeify">
      <template v-slot:description>
        <p class="mt-6">
          Vibeify was created using javascript with Tensorflow for movement
          recognition. The initial portion of this project involved drafting
          interfaces using Figma. After wire-framing, the frontend was made
          using ReactJS, with calls being made to the Spotify API.

          <br /><br />To learn more about Spotify API
          <a
            target="_blank"
            href="https://developer.spotify.com/documentation/web-api/"
            >click here</a
          >
        </p>
      </template>
    </Stack>

    <TextBlock
      title="Demo"
      text="After authenticating a user, a call is made to grab the users
          playlists. Upon selection of a playlist, a call is made to sort the
          playlist based on song metadata such as danceability, energy and
          liveliness. Songs are then played based on the frequency of motion
          detected through Tensorflow's recognition."
    />
    <ImageBlock name="Vibeify/vibeify.gif" />
    <v-row class="centered pa-12 clickable" @click="$router.push('/')">
      <h4>Return Home</h4>
      <v-icon class="icon" large>
        mdi-exit-to-app
      </v-icon>
    </v-row>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Inspiration from "@/components/Inspiration.vue";
import Stack from "@/components/Stack.vue";
import Product from "@/components/Product.vue";
import TextBlock from "@/components/TextBlock.vue";
import ImageBlock from "@/components/ImageBlock.vue";

export default {
  name: "Vibeify",
  components: { Hero, Inspiration, Stack, TextBlock, ImageBlock },
  data: function() {
    return {
      stack: ["tensorflow", "figma", "react", "spotify"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
