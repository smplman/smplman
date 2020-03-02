<template>
    <div>
        <h1>Category {{$route.params.category_slug}}</h1>
        <project-listing :projects="projects"></project-listing>
    </div>
</template>

<script>
import ProjectListing from '~/components/ProjectListing.vue'

export default {
  components: {
    ProjectListing
  },
  async asyncData ({ app, params }) {
    try {
      const { data } = await app.$axios.post('/api/projects/', {
        filter: { published: true, tags: { $has: params.category_slug } },
        sort: { _created:-1 },
        populate: 1
      })

      return { projects: data.entries }

    } catch (error) {
      return { projects: [] };
    }
  }
}
</script>
