<template>
  <div class="block w-full p-5 md:p-32">
    <div class="block md:flex md:flex-row md:mx-48 h-full md:h-96">
      <Picture />
      <div>
        <h1
          class="md:mx-10 text-4xl md:text-6xl col-span-2 text-center md:text-left"
        >
          Steven Harris
        </h1>
        <h4
          class="px-10 text-1xl text-gray-400 mb-2 col-span-2 text-center md:text-left"
        >
          Software Engineer
        </h4>
        <p class="px-10 text-gray-300 text-justify md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          vulputate ligula, vitae commodo tellus. Vivamus a ex sit amet odio
          euismod vestibulum et sed orci. Etiam rutrum at mauris vitae
          pellentesque. Morbi pulvinar nibh et velit rutrum tristique.
          Pellentesque vulputate, libero vel dictum porta, augue tortor
          ullamcorper lectus, et rutrum tortor erat et dui. Donec mattis nulla a
          tempor bibendum. Phasellus placerat nisl ultrices dolor volutpat
          sollicitudin. In nec magna ornare, eleifend urna vel, consequat est.
          Phasellus sit amet tellus non felis semper bibendum. Morbi elit urna,
          malesuada sed arcu quis, condimentum congue enim. Nunc at egestas
          nisl. Mauris tincidunt purus et mauris fermentum, eget porttitor ipsum
          pharetra. Nam maximus purus ultrices consectetur iaculis.
        </p>
        <div class="px-7 pt-6 text-center md:text-left">
          <button
            class="mx-3 mt-3 rounded-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
          >
            Download CSV
          </button>
          <button
            class="mx-3 mt-3 shadow border-blue-500 border-2 rounded-full px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Picture from "./Picture.vue";
@Options({
  components: {
    Picture,
  },
})
export default class AboutMe extends Vue {}
</script>

<style></style>
