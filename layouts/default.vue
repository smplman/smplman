<template>
  <div>
    <site-header/>

    <div class="flex flex-row justify-center w-screen bg-grey-lighter">
      <div class="overflow-hidden content p-4 md:p-8 bg-white rounded shadows">
        <nuxt/>
      </div>
    </div>

    <site-footer/>
  </div>
</template>

<script>
import SiteHeader from '~/components/Header.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
