<template>
  <div class="bg-gray-700 font-mono mx-auto overflow text-white">
    <Header />
    <AboutMe />
    <Experience />
    <Contributions />
    <Skills />
  </div>
  <div class="background">
    <div class="shape-1"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Contributions from "./components/Contributions.vue";
import Skills from "./components/Skills.vue";

@Options({
  components: {
    Header,
    AboutMe,
    Experience,
    Contributions,
    Skills,
  },
})
export default class App extends Vue {}
</script>
