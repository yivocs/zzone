<template>
  <div class="about">
    <Header msg="Welcome to Your Vue.js App"/>

    <div class="signin-box">
      <SignIn msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import SignIn from '@/components/SignIn.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      SignIn,
    }
  }
</script>

<style scoped lang="scss">
  .signin-box {
    margin: 0 auto;
    top: 50px;
    left: 25%;
  }
</style>