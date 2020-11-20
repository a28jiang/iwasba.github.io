<template>
  <div class="home">
    <v-row :style="{ height: '60px' }" />
    <v-row>
      <v-col
        cols="2"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img class="design1" max-width="130" src="../assets/design1.svg" />
      </v-col>

      <v-col class="centered" md="5" sm="12">
        <v-img
          :max-width="$vuetify.breakpoint.smAndDown ? '60vw' : ''"
          src="../assets/hero.png"
        />
      </v-col>
      <v-col
        md="4"
        sm="12"
        class="left"
        :style="{ paddingLeft: 0 }"
        :order="$vuetify.breakpoint.smAndDown ? 'first' : 'last'"
      >
        <v-col>
          <h1>
            <span>aaron</span>
            <span class="titleAccent">jiang.</span>
          </h1>
          <h3>Product <b>designer</b> and <b>developer</b></h3>
        </v-col>
      </v-col>
      <v-col
        cols="1"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img
          class="semiCircle"
          max-width="300"
          :src="require(`@/assets/ellipse.svg`)"
        />
      </v-col>
    </v-row>

    <div class="sectionPadding">
      <v-row
        class="mr-6"
        :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'end'"
      >
        <v-spacer />

        <v-col class="hidden-sm-and-down right">
          <h3 class="mr-2">Filter by:</h3>
        </v-col>

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
      </v-row>

      <v-row>
        <transition-group tag="div" name="fade" class="row">
          <v-col
            sm="12"
            md="6"
            class="centered"
            v-for="item in items"
            :key="item.key"
          >
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
    window.scrollTo(0, 0);
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
        const types = this.items[i].type;

        const devOn = types.includes("dev") && this.activeDev;
        const designOn = types.includes("design") && this.activeDesign;
        const artOn = types.includes("art") && this.activeArt;

        const isOn = devOn || designOn || artOn;
        if (!isOn) this.items.splice(i, 1);
      }
    }
  }
};
</script>

<style scoped>
.titleAccent {
  color: #6c86a1;
  margin-left: 0.3em;
}
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
  position: absolute;
  top: 0%;
  left: 92%;
}

.design1 {
  position: absolute;
  top: 4%;
  left: 8%;
}
</style>

<style>
.home {
  overflow-x: auto;
}
@media all and (min-width: 750px) {
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
}

@media all and (max-width: 750px) {
  .v-btn {
    height: 45px !important;
    margin: 10px;
    border: 5px solid;
    border-radius: 10px;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .v-btn__content {
    padding: 8px;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
  }
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
  margin-top: 60px;
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
