<template>
  <div>
    <v-row :style="{ height: '5vw' }" />
    <v-row>
      <v-col
        cols="2"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img class="design1" width="10vw" src="../assets/design1.svg" />
      </v-col>

      <v-col class="centered" md="5" sm="12">
        <v-img
          :max-width="$vuetify.breakpoint.smAndDown ? '55vw' : '32vw'"
          src="../assets/hero.svg"
        />
      </v-col>
      <v-col
        md="4"
        sm="12"
        class="left"
        :style="{ paddingLeft: 0 }"
        :order="$vuetify.breakpoint.smAndDown ? 'first' : ''"
      >
        <v-col>
          <h1
            :style="$vuetify.breakpoint.smAndDown ? { fontSize: '10vw' } : ''"
          >
            <span>aaron</span>
            <span class="titleAccent">jiang.</span>
          </h1>
          <h3
            :style="$vuetify.breakpoint.smAndDown ? { fontSize: '20px' } : ''"
          >
            Product <b>designer</b> and <b>developer</b>
          </h3>
        </v-col>
      </v-col>
      <v-col
        cols="1"
        class="hidden-sm-and-down"
        :style="{ position: relative }"
      >
        <v-img
          class="semiCircle"
          width="15vw"
          :src="require(`@/assets/ellipse.svg`)"
        />
      </v-col>
    </v-row>

    <v-row
      class="sectionPadding"
      :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'end'"
      :style="$vuetify.breakpoint.smAndDown ? '' : { paddingRight: '12vw' }"
    >
      <v-spacer class="hidden-sm-and-down" />

      <v-col class="hidden-sm-and-down right">
        <h3 class="">Filter by:</h3>
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

    <transition-group tag="div" name="list" class="row projects">
      <v-col sm="12" md="6" class="top" v-for="item in items" :key="item.key">
        <ProjectCard v-bind="item" :key="item.key" />
      </v-col>
      <v-row
        :style="{ minHeight: '500px' }"
        v-if="!activeDev && !activeDesign && !activeArt"
        key="alt"
      >
        <v-col cols="6" class="right">
          <h3
            :style="$vuetify.breakpoint.smAndDown ? { fontSize: '20px' } : ''"
          >
            No projects currently selected
          </h3>
        </v-col>
        <v-col cols="6" class="left">
          <v-img max-width="25vw" src="../assets/althero.svg" />
        </v-col>
      </v-row>
    </transition-group>
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
    this.items.sort((a, b) => (a.key > b.key ? 1 : -1));
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
      this.items.sort((a, b) => (a.key > b.key ? 1 : -1));
    },

    addItems: function(type) {
      this.allItems.forEach(item => {
        if (item.type.includes(type) && !this.items.includes(item))
          this.items.push(item);
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
.projects {
  padding: 0 12vw 0 12vw;
}

.titleAccent {
  color: #6c86a1;
  margin-left: 0.3em;
}
.design1 {
  position: absolute;
  opacity: 0;
  animation: fade-in-down 1s;
  animation-delay: 1s;
  animation-fill-mode: both;
  top: 4%;
  left: 8%;
}

.semiCircle {
  position: absolute;

  opacity: 0;
  animation: fade-in-left 1s;
  animation-fill-mode: both;
  animation-delay: 1.5s;
  top: 0%;
}
</style>

<style>
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
    height: 40px !important;
    margin: 10px;
    border: 5px solid;
    border-radius: 10px;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .v-btn__content {
    padding: 8px;
    font-weight: 600;
    font-size: 14px;
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
  margin-bottom: 20px;
}
</style>
