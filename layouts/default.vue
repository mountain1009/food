<template>
  <main>
    <Header/>
    <Nuxt/>
  </main>
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
