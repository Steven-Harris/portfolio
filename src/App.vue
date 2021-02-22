<template>
  <Header/>
  <Picture/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from './components/Header.vue';
import Picture from './components/Picture.vue';

@Options({
  components: {
    Header,
    Picture
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
