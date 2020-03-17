<template>
  <div>
    <div>
      <div class="todo-title">
        <el-row>
          <el-col :span="8" class="grid-content"></el-col>
          <el-col :span="8" class="grid-content">Chat</el-col>
          <el-col :span="4" class="grid-content"></el-col>
          <el-col :span="4" class="grid-content">
            <el-switch
              v-model="switchValue"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-col>
        </el-row>
      </div>
      <br>
      <div class="todo-box">
        <div class="talk-item">
          <el-row>
            <el-col :span="2"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="16"><div class="grid-content todo-content">
              yz
            </div></el-col>
            <el-col :span="6"><div class="grid-content"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="2"><div class="grid-content ">
            </div></el-col>
            <el-col :span="14"><div class="grid-content todo-content">
              chat with me
            </div></el-col>
            <el-col :span="6"><div class="grid-content todo-time">
            </div></el-col>
          </el-row>
        </div>
        <div class="talk-item">
          <el-row>
            <el-col :span="2"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="16"><div class="grid-content todo-content">
              yz
            </div></el-col>
            <el-col :span="6"><div class="grid-content"></div></el-col>
          </el-row>

          <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="2"><div class="grid-content ">
            </div></el-col>
            <el-col :span="14"><div class="grid-content todo-content">
              chat with me
            </div></el-col>
            <el-col :span="6"><div class="grid-content todo-time">
            </div></el-col>
          </el-row>
        </div>
        <div class="talk-item">
          <el-row>
            <el-col :span="2"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="18"><div class="grid-content todo-content"></div></el-col>
            <el-col :span="4"><div class="grid-content">me</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="4"><div class="grid-content"></div></el-col>
            <el-col :span="16"><div class="grid-content my-talk">
              ok ok
            </div></el-col>
            <el-col :span="4"><div class="grid-content todo-time">
            </div></el-col>
          </el-row>
        </div>
      </div>
      <br>
      <el-input
        placeholder="Chat with friends"
        v-model="input"
        clearable>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatApp',
    props: {
      msg: String
    },
    data() {
      return {
          table: false,
          dialog: false,
          loading: false,
          input: '',
          switchValue: true,
      }
    },
    mounted: function () {
      setInterval(this.open, 5000)
    },
    methods: {
      open() {
        if (this.switchValue === true) {
          this.$notify({
            title: 'Message',
            message: 'yz say: chat with me!',
            type: 'success',
            position: 'top-bottom',
          });
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .talk-item {
    height: 80px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .grid-content {
    padding-top: 10px;
    padding-bottom: 10px;
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
    margin: 0 auto;
  }
  .my-talk {
    text-align: right;
  }
</style>
