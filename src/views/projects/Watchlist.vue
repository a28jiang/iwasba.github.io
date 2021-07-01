<template>
    <div>
        <Hero
            :heroSize="675"
            name="Watchlist"
            subtitle="Binging Simplified"
            product="https://watch-list-app.web.app/"
            title="Watchlist"
            :designVar="[2]"
        />
        <Inspiration
            name="Watchlist"
            :designVar="[1, 2]"
            :offSetX="5"
            :offSetY="-2"
            :imgSize="550"
        >
            <template v-slot:description>
                <p class="mt-6">
                    With all the shows and movies we're consuming nowadays, it
                    may be hard to keep track of upcoming seasons and highly
                    anticipated releases. I designed this app to provide an
                    easy-to-use, centralized hub where users can easily keep
                    track of their favourite shows, share lists and set
                    reminders.
                </p>
            </template>
        </Inspiration>
        <Stack :stack="stack" name="Watchlist">
            <template v-slot:description>
                <p class="mt-6">
                    Currently in active development, I've implemented my initial
                    Figma designs using React, Firestore, TMDb and TVMaze APIs.
                    I plan on expanding the app's sharing and notifcation
                    features in the upcoming months. Stay tuned!
                </p>
            </template>
        </Stack>
        <Product
            title="In Progress"
            :designVar="[1]"
            :imgSize="450"
            name="Watchlist"
        >
            <template v-slot:description>
                <p class="mt-6">
                    My initial user screens and flows. Some of my priorities
                    while designing the prototypes included responsiveness,
                    accessibility and scalability.
                </p>
            </template>
        </Product>
        <v-row class="centered pa-12 clickable" @click="$router.push('/')">
            <h4>Return Home</h4>
            <v-icon class="icon" large> mdi-exit-to-app </v-icon>
        </v-row>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Inspiration from '@/components/Inspiration.vue'
import Stack from '@/components/Stack.vue'
import Product from '@/components/Product.vue'
import TextBlock from '@/components/TextBlock.vue'
import ImageBlock from '@/components/ImageBlock.vue'

export default {
    name: 'Watchlist',
    components: { Hero, Inspiration, Stack, Product },
    data: function () {
        return {
            stack: ['firebase', 'react', 'figma'],
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>

<style scoped></style>
