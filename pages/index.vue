<template>
  <div>
    <div v-for='(food, i) in state.foods' :key='i'>
      <nuxt-link :to='`/foods/${food.id}`' class='text-blue-800'>{{food.name}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent,useContext ,reactive, onMounted } from '@nuxtjs/composition-api'

export interface FoodType{
  name: string
  content: string
  id: number
}

export default defineComponent({
  setup() {
    const state = reactive({
      foods: []
    })
    const {$supabase} = useContext()
    onMounted(async ()=>{
      const { data } = await $supabase.from("foods").select("*")
      console.log(data)
      state.foods = data
    })
    return { state }
  },
})
</script>
