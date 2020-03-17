<template>
  <div class="about">
    <Header msg="Welcome to Your Vue.js App"/>
    <div class="chat-app">
      <ChatApp></ChatApp>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import ChatApp from '@/components/ChatApp.vue'

  export default {
    name: 'Chat',
    components: {
      Header,
      ChatApp,
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .chat-app {
    width: 46%;
    margin: 0 auto;
    height: 200px;
  }
</style>