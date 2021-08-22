<template>
  <div>
    <p v-if='state.isLoading'>Loading.....</p>
    <p v-else>{{state.food}}</p>
  </div>
</template>

<script lang="ts">
import {  defineComponent,useContext ,reactive, useFetch, useRoute } from '@nuxtjs/composition-api'
import { FoodType } from '~/pages/index.vue'

export interface StateType{
  food: FoodType | null
  isLoading: boolean
}

export default defineComponent({
  setup() {
    const route = useRoute()
    const state = reactive<StateType>({
      food: null,
      isLoading: true
    })
    const {$supabase} = useContext()
    useFetch(async ()=>{
      const { data } = await $supabase.from("foods").select("*").match({id: route.value.params.id})
      if(data[0]){
        state.food = data[0]
      }
      state.isLoading = false
    })
    return { state }
  },
})
</script>
