<template>
  <section>
    <article class="">
      <div class="article-header relative -mx-4 -mt-4 md:-mx-8 md:-mt-8">

        <video autoplay muted loop class="float-left h-48 w-full">
          <source :src="'https://cockpit.smplman.com/storage/uploads' + post.image.path" type="video/mp4">
        </video>

        <h1 class="mt-2 absolute pin-t text-white">
          {{ post.title }}
        </h1>

      </div>

      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <a v-for="(tag, key) in post.tags" :key="key" :href="'/category/'+tag" class="ml-1 no-underline">{{ tag }}</a>
      </div>

      <div>
        {{ post.excerpt }}
      </div>

      <div class="mt-4 markdown" v-html="$options.filters.parseMd(post.content)"></div>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      let { data } = await app.$axios.post(process.env.POSTS_URL,
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

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { post: data.entries[0] }
    }
  }
}
</script>

<style>
  video {
    object-fit: fill !important;
  }
</style>
