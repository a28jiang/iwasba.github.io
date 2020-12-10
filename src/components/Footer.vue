<template>
  <div>
    <v-footer class="center" dark padless>
      <v-row
        class="py-6"
        :style="
          $vuetify.theme.dark
            ? { width: '100%', backgroundColor: '#596B7D ' }
            : { width: '100%', backgroundColor: '#6c86a1' }
        "
      >
        <v-col cols="12" class="centered px-0">
          {{ new Date().getFullYear() }} —
          <strong>Designed by Aaron Jiang</strong>
        </v-col>
        <v-col class="px-0" cols="12">
          <button
            v-for="icon in icons"
            :key="icon.name"
            class="addPadding"
            @click="openLink(icon.link)"
            icon
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </button>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    icons: [
      { name: "mdi-facebook", link: "https://www.facebook.com/aaron.jiang.77" },
      { name: "mdi-linkedin", link: "https://www.linkedin.com/in/jiangaaron/" },
      { name: "mdi-instagram", link: "https://www.instagram.com/aaronjiang0/" },
      { name: "mdi-github", link: "https://www.github.com/iwasba/" }
    ]
  }),
  methods: {
    openLink(link) {
      window.open(link);
    }
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
}

.addPadding {
  padding: 0px 12px 6px 12px;
}
</style>
