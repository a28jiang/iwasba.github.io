<template>
    <div>
        <v-row :style="{ height: '100px' }" />
        <v-row>
            <v-col
                cols="2"
                class="hidden-sm-and-down"
                :style="{ position: relative }"
            >
                <v-img
                    class="design1"
                    width="10vw"
                    src="../assets/design1.svg"
                />
            </v-col>

            <v-col class="centered slowFade" md="5" sm="12">
                <v-img
                    :max-width="$vuetify.breakpoint.smAndDown ? '55vw' : '32vw'"
                    src="../assets/animation_full.svg"
                />
            </v-col>
            <v-col
                md="4"
                sm="12"
                class="left slowFade"
                :style="{ paddingLeft: 0 }"
                :order="$vuetify.breakpoint.smAndDown ? 'first' : ''"
            >
                <v-col>
                    <h1
                        :style="
                            $vuetify.breakpoint.smAndDown
                                ? { fontSize: '10vw' }
                                : ''
                        "
                    >
                        <span>aaron</span>
                        <span class="titleAccent">jiang.</span>
                    </h1>
                    <div class="typerContainer">
                        <VueTyper
                            :text="[
                                'Software Developer 🧑‍💻',
                                'Product Designer 🧑‍🎨',
                                'Photographer & Artist 📷',
                                'Aspiring Pokemon Trainer 🤠',
                            ]"
                        />
                    </div>
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
            class="sectionPadding fadeIn"
            :justify="$vuetify.breakpoint.smAndDown ? 'center' : 'end'"
            :style="
                $vuetify.breakpoint.smAndDown ? '' : { paddingRight: '12vw' }
            "
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
            <v-col
                sm="12"
                md="6"
                class="top smoothTransition"
                v-for="item in items"
                :key="item.key"
            >
                <ProjectCard v-bind="item" :key="item.key" />
            </v-col>
            <v-row
                class="fadeIn"
                :style="{ minHeight: '500px' }"
                v-if="!activeDev && !activeDesign && !activeArt"
                key="alt"
            >
                <v-col cols="6" class="right">
                    <h3
                        :style="
                            $vuetify.breakpoint.smAndDown
                                ? { fontSize: '20px' }
                                : ''
                        "
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
import ProjectCard from '../components/ProjectCard'
import Projects from '../projects.json'
import { VueTyper } from 'vue-typer'

export default {
    name: 'Home',
    components: { ProjectCard, VueTyper },
    data: function() {
        return {
            selectedVals: [],
            activeDev: true,
            activeDesign: true,
            activeArt: false,
            lampOn: false,

            allItems: Projects.projects,
            items: [],
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        if (this.activeDev) this.addItems('dev')
        if (this.activeDesign) this.addItems('design')
        if (this.activeArt) this.addItems('art')
        this.items.sort((a, b) => (a.key > b.key ? 1 : -1))
    },
    methods: {
        toggleLamp: function() {
            this.lampOn = !this.lampOn
        },
        handleChange: function(type) {
            let isAdd
            if (type === 'dev') {
                this.activeDev = !this.activeDev
                isAdd = this.activeDev
            }
            if (type === 'design') {
                this.activeDesign = !this.activeDesign
                isAdd = this.activeDesign
            }
            if (type === 'art') {
                this.activeArt = !this.activeArt
                isAdd = this.activeArt
            }

            if (isAdd) this.addItems(type)
            else this.removeItems(type)
            this.items.sort((a, b) => (a.key > b.key ? 1 : -1))
        },

        addItems: function(type) {
            this.allItems.forEach(item => {
                if (item.type.includes(type) && !this.items.includes(item))
                    this.items.push(item)
            })
        },
        removeItems: function(type) {
            for (var i = this.items.length - 1; i >= 0; i--) {
                const types = this.items[i].type

                const devOn = types.includes('dev') && this.activeDev
                const designOn = types.includes('design') && this.activeDesign
                const artOn = types.includes('art') && this.activeArt

                const isOn = devOn || designOn || artOn
                if (!isOn) this.items.splice(i, 1)
            }
        },
    },
}
</script>

<style scoped>
.typerContainer {
    min-height: 50px;
}
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
    animation: fade-in-left 1s;
    animation-delay: 1s;
    color: white;
    animation-fill-mode: both;
    top: 5%;
    left: 8%;
}
.lamp {
    position: absolute;
    opacity: 0;
    animation: fade-in-down 1s;
    animation-delay: 1s;
    animation-fill-mode: both;
    top: 100%;
    left: 25%;
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
    color: #d07b7b !important;
}
.designOn {
    background-color: #d07b7b !important;
    color: white !important;
    border: 5px solid #d07b7b !important;
}
.designOff {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #d07b7b !important;
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
