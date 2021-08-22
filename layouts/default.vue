<template>
  <main class='min-h-screen relative'>
    <Header/>
    <Nuxt class='max-w-7xl  mx-auto'/>
    <SignInModal v-if='modalFlag' />
  </main>
</template>

<script lang="ts">
import {  defineComponent, computed } from '@nuxtjs/composition-api'
import Header from '~/components/Header.vue'
import SignInModal from '~/components/SignInModal.vue'
import { authModal } from '~/utils/store-accessor'



export default defineComponent({
  components:{Header,SignInModal},
  setup() {
    const modalFlag = computed<boolean>(()=>{
      return authModal.data
    })

    return {modalFlag}
  },
})
</script>

