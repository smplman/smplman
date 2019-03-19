<template>
  <header class="flex bg-white border-b-1 border-black shadow fixed pin-t pin-x z-100 opacity-97 z-10 h-12">
    <div class="w-1/3" >
        <a class="no-underline text-grey-darkest" href="/">
          <span>smplman Project Site test 6</span>
          <img src="~assets/images/FourLeafClover.svg" class="w-12 h-12 align-middle">
        </a>

    </div>

    <div class="w-1/3">
      <page-nav/>
    </div>

    <div class="w-1/3">
        <div class="float-left">
          <input type="search" name="search" id="search" placeholder="search" class="border rounded">
          <font-awesome-icon class="w-6 h-6" :icon="['fas', 'search']" />
        </div>
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'github']" />
        <font-awesome-icon class="w-6 h-6" :icon="['fab', 'twitter']"  />
    </div>

  </header>
</template>

<script>
import PageNav from '~/components/PageNav.vue'

export default {
  components: {
    PageNav
  }
}
</script>
