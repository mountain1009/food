<template>
  <div class='absolute  right-1/2'>
    <div class="bg-white py-16 rounded-lg shadow-xl">
      <p class="text-center text-gray-700 font-bold text-4xl px-4">You are banned</p>
      <div class="flex justify-center items-center mt-6">
        <button class="bg-red-500 text-white font-bold px-8 py-2 rounded-lg hover:opacity-75">
          ログイン
        </button>
      </div>
      <div class='text-center pt-10'>
        <button @click='functions.close(false)'>閉じる</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {  defineComponent,reactive } from '@nuxtjs/composition-api'
import { authModal } from '~/utils/store-accessor'


export default defineComponent({
  setup() {
    const functions = reactive({
      close(data: boolean){
        authModal.SET_DATA(data)
      }
    })
    return {functions}
  },
})
</script>
