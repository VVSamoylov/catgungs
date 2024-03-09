<template>
<div class="container">
  <nav>
    <Menu/>
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
  },
  mounted(){
    let url='https://jsonplaceholder.typicode.com/users';
    fetch(url).then(resusult=> resusult.json())
    .then(res => res.map(a=> {
      this.$store.commit('addWorker',  { id: a.id, nickname: a.username, street: a.address.street})
    })).catch(e => alert("Что то пошло не так!! "));
  }
}
</script>
<style scoped>

</style>
