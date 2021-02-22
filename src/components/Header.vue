<template>
   <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase " href="#pablo">
        S
      </a>
    </div>
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase " href="#pablo">
        Steven Harris
      </a>
    </div>
    <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                About Me
            </a>
        </li>
        <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                Experience
            </a>
        </li>
        <li class="nav-item">
            <button class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
                Contact
                <i class="fa fa-envelope"></i>
            </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .initial {
        width: 20rem;
        background-color: skyblue;
    }
</style>
