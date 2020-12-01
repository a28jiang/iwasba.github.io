<template>
  <div>
    <Hero
      :heroSize="650"
      github="https://github.com/iwasba/LinkedInScraper"
      name="Linkedin"
      subtitle="Business trends and opportunities"
      title="Linkedin Scraper"
      :designVar="[3, 4]"
    />
    <Inspiration name="Linkedin" :designVar="[2]" :imgSize="500">
      <template v-slot:description>
        <p class="mt-6">
          Linkedin is a platform used by millions of, business-owners,
          entrepreneurs and professionals; it's a sea of opportunity. This sea
          represents a huge pool of data that can be used to quickly discern
          business trends and opportunities.
        </p>
      </template>
    </Inspiration>
    <Stack :stack="stack" :imgSize="6" name="Linkedin">
      <template v-slot:description>
        <p class="mt-6">
          The scraper was written in javascript with the help of NickJS. This
          allows for the control of a headless chrome browser that can scrape
          and store the comment values based on their selector. I later used
          VueJS to create the frontend and tied everything together.
        </p>
      </template>
    </Stack>

    <TextBlock
      title="Process"
      text="Comments are composed of a variety of components such as avatars, job descriptions, likes and much more. The most important data that this webscraper aims to capture is the content of each comment. The scraper searches for the following CSS selector when capturing content.

"
    />
    <ImageBlock name="Linkedin/Linkedin.gif" />

    <Product
      title="Working with CSS"
      :designVar="[1]"
      :imgSize="450"
      name="Linkedin"
    >
      <template v-slot:description>
        <p class="mt-6">
          For posts with large amounts of comments, not all comments may be
          initially loaded. To ensure a comprehensive collection of comments,
          the load more selector must be located and activated. After the user
          is satisfied, the content is outputted into a CSV file.
        </p>
      </template>
    </Product>
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
  name: "Linkedin",
  components: { Hero, Inspiration, Stack, TextBlock, ImageBlock, Product },
  data: function() {
    return {
      stack: ["vue", "nickjs"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
