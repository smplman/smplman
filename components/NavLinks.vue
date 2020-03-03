<template>
  <div class="w-full block flex-grow lg:flex md:items-center md:w-auto" v-show="showNav">
    <div class="text-sm md:flex-grow">
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/">Projects</nuxt-link>
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/about">About</nuxt-link>
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/search">Search</nuxt-link>
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
  </div>
</template>

<script>
export default {
  props: {
    showNav: true
  }
}
</script>

<style lang="postcss" scoped>

nav a:hover {
  @apply underline
}

nav a:sm {
  @apply text-lg
}
</style>
