<template>
  <header class="flex items-center justify-between flex-wrap bg-gray-800 p-4 border-b-1 border-black shadow">

    <nuxt-link class="no-underline flex items-center flex-shrink-0 text-white mr-6" to="/">
      <img class="fill-current h-8 w-8 mr-2" src="~assets/images/FourLeafClover.svg">
      <span class="text-gray-300">smplman Project Site</span>
    </nuxt-link>

    <div class="block md:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white" @click="toggleMenu()">
        <font-awesome-icon class="fill-current h-3 w-3" title="Menu" :icon="['fas', 'bars']"/>
      </button>
    </div>

    <nav-links :class="{ hidden: !showNav }" class="md:block md:flex" />

  </header>
</template>

<script>
import NavLinks from '~/components/NavLinks.vue'

export default {
  components: {
    NavLinks
  },
  data: () => {
    return {
      showNav: false
    }
  },
  methods: {
    toggleMenu(){
      this.showNav = !this.showNav;
    }
  }
}
</script>
