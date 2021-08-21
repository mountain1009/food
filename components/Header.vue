<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div>
          <p class='text-xl font-black'>
          <span class="w-10 h-10 text-white p-2 bg-yellow-600 rounded-full">食</span>
            ログ
          </p>
        </div>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <nuxt-link to="/" class="mr-5 hover:text-gray-900">hoge</nuxt-link>
        <nuxt-link to="/" class="mr-5 hover:text-gray-900">foo</nuxt-link>
        <nuxt-link to="/" class="mr-5 hover:text-gray-900">bar</nuxt-link>
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
