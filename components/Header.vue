<template>
  <!-- <header class="flex bg-white border-b-1 border-black shadow fixed pin-t pin-x z-100 opacity-97 z-10 h-12 px-5">

    <div class="w-1/3" >
        <nuxt-link class="no-underline text-gray-900" to="/">
          <span>smplman Project Site</span>
          <img src="~assets/images/FourLeafClover.svg" class="w-12 h-12 align-middle">
        </nuxt-link>
    </div>

    <div class="w-1/3">
      <nav-links/>
    </div>

    <div class="w-1/3">
        <div class="float-left">
          <input type="search" name="search" id="search" placeholder="search" class="border rounded">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'search']"/>
        </div>
        <a href="https://github.com/smp4488/" target="_blank">
          <font-awesome-icon class="w-6 h-6" :icon="['fab', 'github']"/>
        </a>
        <a href="https://twitter.com/smp4488/" target="_blank">
          <font-awesome-icon class="w-6 h-6" :icon="['fab', 'twitter']"/>
        </a>
    </div>

  </header> -->
  <new-nav/>
</template>

<script>
import NewNav from '~/components/NewNav.vue'
import NavLinks from '~/components/Nav.vue'

export default {
  components: {
    NewNav,
    NavLinks
  }
}
</script>
