<template>
  <div class="about">
    <Header msg="Welcome to Your Vue.js App"/>
    <h1>This is a todo page</h1>
    <TodoDrawer msg="Welcome to Your Vue.js App"/>
      <div class="todo-app">
          <TodoApp msg="Welcome to Your Vue.js App"/>
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import TodoDrawer from '@/components/todo/TodoDrawer.vue'
  import TodoApp from '@/components/todo/TodoApp.vue'

  export default {
    name: 'Todo',
    components: {
      Header,
      TodoDrawer,
      TodoApp,
    }
  }
</script>

<style lang="scss" scoped>
  .todo-app {
    width: 50%;
    margin: 0 auto;
    height: 200px;
  }
</style>
