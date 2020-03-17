<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <br>
    <br>
    <div class="blog-content">
      <el-tabs tab-position="top">
        <el-tab-pane label="All"></el-tab-pane>
        <el-tab-pane label="Web"></el-tab-pane>
        <el-tab-pane label="Life"></el-tab-pane>
        <el-tab-pane label="Game"></el-tab-pane>
        <el-tab-pane label="Movie"></el-tab-pane>
      </el-tabs>

    <Article msg="Welcome to Your Vue.js App"/>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Article from '@/components/blog/Article.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Article,
    }
  }
</script>

<style scoped lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .blog-content {
    padding-left: 100px;
    padding-right: 100px;
  }
</style>