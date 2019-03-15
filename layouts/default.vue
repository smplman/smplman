<template>
  <div>
    <page-header/>

    <div class="flex flex-row justify-center w-screen bg-grey-lighter py-20">
      <div class="overflow-hidden content p-4 md:p-8 bg-white rounded shadows">
        <nuxt/>
      </div>
    </div>

    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>