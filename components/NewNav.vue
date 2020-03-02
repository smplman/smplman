<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">

    <nuxt-link class="no-underline flex items-center flex-shrink-0 text-white mr-6" to="/">
      <img class="fill-current h-8 w-8 mr-2" src="~assets/images/FourLeafClover.svg">
      <span class="text-gray-300">smplman Project Site</span>
    </nuxt-link>

    <div class="block md:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="toggleMenu()">
        <font-awesome-icon class="fill-current h-3 w-3" title="Menu" :icon="['fas', 'bars']"/>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex md:items-center md:w-auto">
      <div class="text-sm md:flex-grow" v-show="showNav">
        <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
    </div>

    <div class="flex items-center">
      <input type="search" name="search" id="search" placeholder="search" class="border rounded">
      <font-awesome-icon class="w-6 h-6 mx-1" :icon="['fas', 'search']"/>
      <a href="https://github.com/smp4488/" target="_blank" class="flex mx-1">
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'github']"/>
      </a>
      <a href="https://twitter.com/smp4488/" target="_blank" class="flex mx-1">
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'twitter']"/>
      </a>
    </div>

  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      showNav: true
    }
  },
  methods: {
    toggleMenu(){
      this.showNav = !this.showNav;
    }
  }
}
</script>
