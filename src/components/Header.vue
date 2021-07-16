<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div class="rounded-full bg-gray-700 w-11">
        <a
          class="text-lg font-bold inline-block py-2 pl-4 whitespace-no-wrap uppercase"
          href="#pablo"
        >
          S
        </a>
      </div>
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
          href="#pablo"
        >
          Steven Harris
        </a>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center hover:opacity-75"
              href="#pablo"
            >
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center hover:opacity-75"
              href="#pablo"
            >
              Experience
            </a>
          </li>

          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center hover:opacity-75"
              href="#pablo"
            >
              Contributions
            </a>
          </li>

          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center hover:opacity-75"
              href="#pablo"
            >
              Skills
            </a>
          </li>
          <li class="nav-item">
            <button
              class="px-3 py-2 flex items-center hover:opacity-75"
              href="#pablo"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
