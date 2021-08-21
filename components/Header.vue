<template>
  <header class="text-gray-600 body-font bg-yellow-600">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <nuxt-link to='/'>
          <p class='text-xl font-bold text-white'>
          <span class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600">食</span>
            日記
          </p>
        </nuxt-link>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <nuxt-link to="/hoge" class="mr-5 hover:text-gray-900 text-white">hoge</nuxt-link>
        <nuxt-link to="/foo" class="mr-5 hover:text-gray-900 text-white">foo</nuxt-link>
        <nuxt-link to="/bar" class="mr-5 hover:text-gray-900 text-white">bar</nuxt-link>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
  },
})
</script>
