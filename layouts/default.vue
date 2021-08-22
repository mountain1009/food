<template>
  <no-ssr>
    <main class='min-h-screen'>
      <Header/>
      <Nuxt class='max-w-7xl  mx-auto'/>
    </main>
  </no-ssr>
</template>

<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/Header.vue'

export default defineComponent({
  components:{Header},
  setup() {
  },
})
</script>

