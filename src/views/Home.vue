<template>
  <div class="home">
    <div class="circleContainer">
      <img class="semiCircle" src="../assets/ellipse.svg" />
    </div>
    <v-row>
      <v-col cols="7" />
      <v-col>
        <v-img max-width="70" src="../assets/design2.svg" />
      </v-col>
      <v-col cols="3" />
    </v-row>
    <v-row>
      <v-col cols="1" />
      <v-col class="design1" cols="2">
        <v-img max-width="200" src="../assets/design1.svg" />
      </v-col>
      <v-col class="centered" cols="4">
        <v-img max-width="500" src="../assets/hero.png" />
      </v-col>
      <v-col cols="4" class="left" :style="{ paddingLeft: 0 }">
        <v-col>
          <h1>
            <span>aaron</span>
            <span class="accent">jiang.</span>
          </h1>
          <h3>Product <b>designer</b> and <b>developer</b></h3>
        </v-col>
      </v-col>
    </v-row>

    <div class="sectionPadding">
      <v-row>
        <v-col cols="7" />
        <v-col class="right" cols="2">
          <h3>Filter by:</h3>
        </v-col>
        <v-col class="left" cols="3">
          <v-btn
            @click="handleChange('dev')"
            :class="activeDev ? 'devOn' : 'devOff'"
            >dev</v-btn
          >
          <v-btn
            @click="handleChange('design')"
            :class="activeDesign ? 'designOn' : 'designOff'"
            >design</v-btn
          >
          <v-btn
            @click="handleChange('art')"
            :class="activeArt ? 'artOn' : 'artOff'"
            >art</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <transition-group tag="div" name="fade" class="row">
          <v-col class="centered" v-for="item in items" :key="item.key">
            <ProjectCard v-bind="item" :key="item.key" />
          </v-col>
        </transition-group>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import Projects from "../projects.json";

export default {
  name: "Home",
  components: { ProjectCard },
  data: function() {
    return {
      selectedVals: [],
      activeDev: true,
      activeDesign: true,
      activeArt: false,

      allItems: Projects.projects,
      items: []
    };
  },
  mounted() {
    if (this.activeDev) this.addItems("dev");
    if (this.activeDesign) this.addItems("design");
    if (this.activeArt) this.addItems("art");
  },
  methods: {
    handleChange: function(type) {
      let isAdd;
      if (type === "dev") {
        this.activeDev = !this.activeDev;
        isAdd = this.activeDev;
      }
      if (type === "design") {
        this.activeDesign = !this.activeDesign;
        isAdd = this.activeDesign;
      }
      if (type === "art") {
        this.activeArt = !this.activeArt;
        isAdd = this.activeArt;
      }

      if (isAdd) this.addItems(type);
      else this.removeItems(type);
    },

    addItems: function(type) {
      this.allItems.forEach(item => {
        if (item.type.includes(type)) this.items.push(item);
      });
    },
    removeItems: function(type) {
      for (var i = this.items.length - 1; i >= 0; i--) {
        if (this.items[i].type.includes(type)) {
          this.items.splice(i, 1);
        }
      }
    }
  }
};
</script>

<style scoped>
.design1 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.circleContainer {
  position: absolute;
  top: -150px;
  left: 90%;
}

.semiCircle {
  width: 300px;
  height: 300px;
}
</style>

<style>
.home {
  overflow-x: auto;
}

.v-btn {
  height: 55px !important;
  margin: 10px;
  border: 5px solid;
  border-radius: 10px;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0) !important;
}

.v-btn__content {
  padding: 8px;
  font-weight: 600;
  font-size: 24px;
  text-transform: none;
}

.dev {
  color: #6c86a1 !important;
}
.devOn {
  background-color: #6c86a1 !important;
  color: white !important;
  border: 5px solid #6c86a1 !important;
}
.devOff {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #6c86a1 !important;
}

.design {
  color: #eba0a0 !important;
}
.designOn {
  background-color: #eba0a0 !important;
  color: white !important;
  border: 5px solid #eba0a0 !important;
}
.designOff {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #eba0a0 !important;
}

.art {
  color: #88d3c8 !important;
}
.artOn {
  background-color: #88d3c8 !important;
  color: white !important;
  border: 5px solid#88d3c8 !important;
}
.artOff {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #88d3c8 !important;
}

.padTop {
  padding-top: 20px;
}

.sectionPadding {
  margin: 60px;
}
.padLeft {
  margin: 2vw;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
