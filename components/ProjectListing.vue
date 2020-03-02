<template>
  <div class=my-8>
    <ul class="flex flex-col w-full p-0">
      <li class="mb-6 w-full list-reset" v-for="(project, key) in projects" :key="key">

        <tags :tags="project.tags" />

        <nuxt-link :to="{name: 'project-title_slug', params:{title_slug: project.title_slug}}">
          <h2 class="my-2 text-grey-800 text-lg lg:text-xl">
            {{ project.title }}
          </h2>
        </nuxt-link>

        <div class="page-content hidden md:block text-base mb-2" v-html="project.excerpt"></div>

        <nuxt-link class="text-sm text-blue-300 no-underline" :to="{name: 'project-title_slug', params:{title_slug: project.title_slug}}">
          Read more
        </nuxt-link>

      </li>
    </ul>
  </div>
</template>

<script>
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Tags
  },

  props: ['projects']
}
</script>
