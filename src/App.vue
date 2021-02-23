<template>
  <div class="bg-gray-700 font-mono mx-auto overflow">
    <Header />
    <AboutMe />
    <Experience />
    <Contributions />
    <Skills />
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

<style>
#app {
  color: white;
}
</style>
