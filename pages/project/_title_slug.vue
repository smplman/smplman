<template>
  <section>
    <article class="">
      <div class="article-header">
        <div v-if="post.image.mime == 'video/mp4'" class="relative -mx-4 -mt-4 md:-mx-8 md:-mt-8">
          <video autoplay muted loop class="float-left h-48 w-full">
            <source :src="'https://cockpit.smplman.com/storage/uploads' + post.image.path" type="video/mp4"/>
          </video>
        </div>

        <img v-if="post.image.mime == 'image/jpeg'" :src="'https://cockpit.smplman.com/storage/uploads' + post.image.path" type="jpeg" class="h-48 w-full"/>

      </div>


      <h1>
        {{ post.title }}
      </h1>

      <tags :tags="post.tags" />

      <div class="mt-4">
        {{ post.excerpt }}
      </div>

      <div class="mt-4 markdown" v-html="$options.filters.parseMd(post.content)"></div>

    </article>
  </section>
</template>

<script>
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Tags
  },

  async asyncData ({ app, params, error, payload }) {

    // let { data } = await app.$axios.post(process.env.POSTS_URL,
    let { data } = await app.$axios.post('/api/projects/',
      JSON.stringify({
        filter: { published: true, title_slug: params.title_slug },
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' },
      rejectUnauthorized: false
    })
    .catch((error) => {
      return { post: {} };
    })

    return { post: data.entries[0] }

  }
}
</script>

<style>
  video {
    object-fit: fill !important;
  }
</style>
