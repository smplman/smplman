<template>
  <div class="tracking-wide">
    <a v-for="(tag, key) in tags" :key="key" :href="'/category/'+tag" class="text-gray-600 font-bold text-sm ml-1 no-underline">#{{ tag }}</a>
  </div>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style>

</style>
