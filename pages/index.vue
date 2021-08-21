<template>
  <p>{{data}}</p>
</template>

<script lang="ts">
import {  defineComponent,useContext ,ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = ref({})
    const {$supabase} = useContext()
    useFetch(async ()=>{
      const result = await $supabase.from("foods").select("*")
      data.value = result
    })
    return { data}
  },
})
</script>
