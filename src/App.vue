<template>
<div class="container">
  <nav>
  <Menu/>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style scoped>

</style>
