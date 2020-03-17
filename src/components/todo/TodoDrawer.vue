<template>
  <div>
    <el-button type="text" @click="table = true">Todo Drawer</el-button>
    <el-drawer
      title="Todos"
      :with-header="false"
      :visible.sync="table"
      direction="ltr"
      size="25%">
      <div class="todo-title"> Todos </div>
      <div class="todo-box">
        <div class="todo-item">
          <el-row>
            <el-col :span="2"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="16"><div class="grid-content todo-content">
              do something
            </div></el-col>
            <el-col :span="6"><div class="grid-content">
              yz
            </div></el-col>
          </el-row>

          <el-row>
            <el-col :span="10"><div class=" todo-time">
              <i class="el-icon-time"> 2/8/2020</i>
            </div></el-col>
            <el-col :span="14"><div class="">
            </div></el-col>
          </el-row>
        </div>

        <div class="todo-item">
          <el-row>
            <el-col :span="2"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="16"><div class="grid-content todo-content">
              do something
            </div></el-col>
            <el-col :span="6"><div class="grid-content">
              yz
            </div></el-col>
          </el-row>

          <el-row>
            <el-col :span="10"><div class=" todo-time">
              <i class="el-icon-time"> 2/8/2020</i>
            </div></el-col>
            <el-col :span="14"><div class="">
            </div></el-col>
          </el-row>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: 'TodoDrawer',
    props: {
      msg: String
    },
    data() {
      return {
      table: false,
      dialog: false,
      loading: false,
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
  .todo-item {
    height: 62px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .grid-content {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .todo-content {
    text-align: left;
  }
  .todo-time {
    font-size: 0.8rem;
  }
  .todo-title {
    height: 50px;
    line-height: 50px;
    font-size: 1.2rem;
  }
</style>
