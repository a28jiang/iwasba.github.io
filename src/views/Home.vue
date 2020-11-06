<template>
  <div class="home">
    <v-row>
      <v-col cols="2" />
      <v-col cols="6">
        <v-img max-height="600" max-width="800" src="../assets/hero.png" />
      </v-col>
      <v-col cols="2" class="centered">
        <v-col>
          <h1>
            aaron
          </h1>
          <h1 class="accent">
            jiang.
          </h1>
        </v-col>
        <v-col>
          <v-row class="padTop">
            <v-btn text>
              <h3>Projects</h3>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn text>
              <h3>Experience</h3>
            </v-btn>
          </v-row>
          <v-row>
            <v-btn text>
              <h3>Contact</h3>
            </v-btn>
          </v-row>
        </v-col>
      </v-col>
      <v-spacer />
    </v-row>

    <div class="graphics">
      <img class="circle1" src="../assets/ellipse.svg" />

      <img class="dot1" src="../assets/dots.svg" />
    </div>
    <div class="sectionPadding">
      <v-row>
        <v-col class="padLeft" cols="2">
          <h2>Recent</h2>
        </v-col>
        <v-spacer />
        <v-col cols="2">
          <v-btn class="routerLink">view all</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="centered" v-for="item in items" :key="item.key">
          <ProjectCard />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import ProjectCard from "../components/ProjectCard";

export default {
  name: "Home",
  components: { ProjectCard },
  data: function() {
    return {
      items: [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: 7 },
        { key: 8 }
      ]
    };
  }
};
</script>

<style>
.graphics {
  position: absolute;
  height: 500px;
  top: 400px;
  left: 12vw;
}

.home {
  min-width: 1000px;
}

.dot1 {
  width: 6vw;
  height: 13vw;
  position: sticky;
  top: 100px;
}
.circle1 {
  width: 8vw;
  height: 8vw;
  position: sticky;
  top: 100px;
}

.v-btn {
  margin: 0.7vw;
}

.padTop {
  padding-top: 20px;
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionPadding {
  margin: 5vw;
}
.padLeft {
  margin: 2vw;
}
</style>
