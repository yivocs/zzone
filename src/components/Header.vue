<template>
  <div class="hello">
    <el-row>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">
          <router-link to="/">
            <img class='logo-img' src="@/assets/logo-rb.png" alt="">
          </router-link>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
<!--      <el-col :span="2"><div class="grid-content bg-purple-light">-->
<!--          <router-link to="/todo">Weibo</router-link>-->
<!--      </div></el-col>-->
      <el-col :span="2"><div class="grid-content bg-purple-light">
          <router-link to="/todo">Todo</router-link>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">
          <router-link to="/chat">Chat</router-link>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">
        <router-link to="/music">Music</router-link>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">
        <router-link to="/about">About</router-link>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">
        <router-link to="/signin">Sign In</router-link>
      </div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    },
    data() {
      return {
        headerLinkMap: {
          xxx: 'xxx',
      },
      }
    },
    methods: {
      handleLink() {
        let x = 1
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    /*background: #99a9bf;*/
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 50px;
    line-height: 50px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  a {
    text-decoration: none;
    color: cornflowerblue;
}
  .router-link-active {
    text-decoration: none;
    color: palevioletred;
}
  .logo-img {
    width: 80%;
    height: 50px;
  }
</style>
