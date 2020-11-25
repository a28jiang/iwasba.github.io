<template>
  <div>
    <v-footer class="center" dark padless>
      <v-card :style="{ backgroundColor: '#6C86A1' }" flat tile class="footer">
        <v-row>
          <v-col cols="12" class="centered">
            {{ new Date().getFullYear() }} —
            <strong>Designed by Aaron Jiang</strong>
          </v-col>
          <v-col cols="12">
            <button v-for="icon in icons" :key="icon" class="addPadding" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </button>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
.shiftUp {
  margin-top: -134px;
}
.footer {
  width: 100%;
  display: flex;
  padding: 16px 0 16px 0;
}

.addPadding {
  padding: 0px 12px 6px 12px;
}
</style>
