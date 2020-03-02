<template>
  <nav class="text-center">
    <nuxt-link to="/">Projects</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/search">Search</nuxt-link>
  </nav>
</template>

<style lang="postcss" scoped>
nav a {
  @apply p-2 text-sm  p-2 inline-block text-gray-900 no-underline
}

nav a:hover {
  @apply underline
}

nav a:sm {
  @apply text-lg
}
</style>
