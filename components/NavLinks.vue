<template>
  <nav class="w-full block flex-grow lg:flex md:items-center md:w-auto">
    <div class="text-sm md:flex-grow">
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/">Projects</nuxt-link>
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/about">About</nuxt-link>
      <nuxt-link class="block mt-4 md:inline-block md:mt-0 text-green-700 hover:text-white mr-4 no-underline font-bold" to="/search">Search</nuxt-link>
    </div>
    <div class="mt-4 md:mt-0 flex items-center">
      <div class="relative mr-2">
        <input type="search" name="search" id="search" placeholder="search" class="border rounded">
        <font-awesome-icon class="w-6 h-full absolute right-0 top-0 cursor-pointer rounded-r" :icon="['fas', 'search']"/>
      </div>

      <a href="https://github.com/smp4488/" target="_blank" class="flex mx-2">
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'github']"/>
      </a>

      <a href="https://twitter.com/smp4488/" target="_blank" class="flex mx-2">
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'twitter']"/>
      </a>
    </div>
  </nav>
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
  @apply underline;
}

nav a:sm {
  @apply text-lg;
}
</style>
