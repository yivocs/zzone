<template>
  <div class="about">
    <Header msg="Welcome to Your Vue.js App"/>
    <h1>This is a signup page</h1>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    components: {
      Header
    }
  }
</script>
