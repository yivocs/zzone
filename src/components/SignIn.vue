<template>
  <div class="signin-box">
    <br>
    <br>
    <el-form :label-position="labelPosition" label-width="0px" :model="formLabelAlign">
      <el-form-item>
        <el-input v-model="formLabelAlign.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" round class="signin-btn">登陆</el-button>
    <br>
    <br>
    <el-button type="success" round class="signin-btn">注册用户</el-button>
    <div class="forget-pw-div">
      <router-link to="/">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    props: {
      msg: String
    },
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          password: '',
        }
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
  .signin-box {
    position: relative;
    height: 300px;
    width: 300px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  .signin-btn {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: cornflowerblue;
}
  .router-link-active {
    text-decoration: none;
    color: palevioletred;
}
  .forget-pw-div {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
</style>
