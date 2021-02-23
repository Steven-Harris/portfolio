<template>
  <section>
    <h1 class="text-center text-4xl">Experience</h1>
    <div class="relative container mx-auto px-6 flex flex-col space-y-8">
      <div
        class="absolute z-0 w-1 mt-10 bg-pink-400 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
      ></div>
      <div class="relative z-10">
        <div class="timeline-container timeline-container-left">
          <div
            class="timeline-pointer timeline-pointer-left"
            aria-hidden="true"
          ></div>
          <div
            class="bg-gradient-to-r from-yellow-400 to-pink-400 p-6 rounded-md shadow-md text-black"
          >
            <span class="font-bold text-sm tracking-wide">Jan 2021</span>
            <h1 class="text-2xl font-bold pt-1">An amazing travel</h1>
            <p class="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed autem.
            </p>
          </div>
        </div>
      </div>
      <div class="relative z-10">
        <div class="timeline-container">
          <div class="timeline-pointer" aria-hidden="true"></div>
          <div
            class="bg-gradient-to-r from-pink-400 to-blue-500 p-6 rounded-md shadow-md text-black"
          >
            <span class="font-bold text-sm tracking-wide">Jan 2021</span>
            <h1 class="text-2xl font-bold pt-1">An amazing travel</h1>
            <p class="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed autem.
            </p>
          </div>
        </div>
      </div>
      <div class="relative z-10">
        <div class="timeline-container timeline-container-left">
          <div
            class="timeline-pointer timeline-pointer-left"
            aria-hidden="true"
          ></div>
          <div
            class="bg-gradient-to-r from-yellow-400 to-pink-400 p-6 rounded-md shadow-md text-black"
          >
            <span class="font-bold text-sm tracking-wide">Jan 2021</span>
            <h1 class="text-2xl font-bold pt-1">An amazing travel</h1>
            <p class="pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste
              suscipit reiciendis, perferendis vel consequuntur cupiditate ad
              commodi provident, sapiente veniam sed autem.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Experience extends Vue {}
</script>

<style></style>
