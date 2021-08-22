<template>
  <div>
    <p>{{state.food}}</p>
  </div>
</template>

<script lang="ts">
import {  defineComponent,useContext ,reactive, onMounted, useRoute } from '@nuxtjs/composition-api'
import { FoodType } from '~/pages/index.vue'

export interface StateType{
  food: FoodType | null
}

export default defineComponent({
  setup() {
    const route = useRoute()
    const state = reactive<StateType>({
      food: null,
    })
    const {$supabase} = useContext()
    onMounted(async ()=>{
      const { data } = await $supabase.from("foods").select("*").match({id: route.value.params.id})
      if(data[0]){
        state.food = data[0]
      }
    })
    return { state }
  },
})
</script>
