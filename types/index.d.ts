declare module '*.vue' {
  import Vue from 'vue'
  export default Vue

  module '@nuxt/types' {
    interface Context {
      $supabase: any
    }
  }
}
