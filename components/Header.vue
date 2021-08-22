<template>
  <header class="text-gray-600 body-font bg-yellow-600">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <nuxt-link to='/'>
          <p class='text-xl font-bold text-white'>
          <span class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600 mx-1">勤</span>
          <span class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600 mx-1">怠</span>
          <span class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600 mx-1">管</span>
          <span class="w-10 h-10 text-white p-2 bg-white rounded-full text-yellow-600 mx-1">理</span>
          </p>
        </nuxt-link>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <button @click='functions.login(true)' class="mr-5 hover:text-gray-900 text-white">ログイン</button>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import {  defineComponent,reactive } from '@nuxtjs/composition-api'
import { authModal } from '~/utils/store-accessor'

export default defineComponent({
  setup() {
    const functions = reactive({
      login(data: boolean){
        authModal.SET_DATA(data)
      }
    })
    return {functions}
  },
})
</script>
