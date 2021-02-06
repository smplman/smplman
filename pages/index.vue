<template>
  <section>
    <h1>Projects</h1>
    <project-listing :projects="projects"></project-listing>
  </section>
</template>

<script>
import ProjectListing from '~/components/ProjectListing.vue'

export default {
  components: {
    ProjectListing
  },
  async asyncData ({ app, env }) {

    try {
      const { data } = await app.$axios.post('/api/projects/', {
        filter: { published: true },
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
