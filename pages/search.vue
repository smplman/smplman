<template>
  <section class="my-8">
    <div class="text-center">
      <h1 class="mb-6">Search Page</h1>
      <p>
        This is a live search example using Algolia and Cockpit!
      </p>

      <div class="my-8">

        <input type="text" name="searchTerm" v-model="searchTerm" placeholder="Search Posts..." class="text-center block mt-2 bg-grey-lighter rounded w-full py-2 px-3">

        <div v-if="results.length !==0" class="search-results">
          <a v-for='result in results' :key="result.title_slug" :href="'/'+result.title_slug" class="block text-grey-darkest no-underline p-3 text-left">
            {{ result.title }}
          </a>
        </div>

        <div v-else-if="searchTerm.length >= 3">
          <span class="block text-grey-darkest no-underline p-3 text-left">
            No results found
          </span>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      searchTerm: '',
      results: []
    }
  },

  watch: {
    searchTerm: 'search'
  },

  methods: {
    async search() {
      if(this.searchTerm.length < 3){
        return this.results = []
      }

      let {data} = await axios.get('https://cockpit.smplman.com/api/detektivo/collection/Projects?token=47e8c35a7917d21c5c86125ad32720&q=cnc',{
        params: {
          q: this.searchTerm
        }
      })

      console.log(data)
    }
  }
}
</script>
