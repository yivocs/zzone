<template>
  <div class="hello">
    <el-row>
      <el-col :span="2"><div class="grid-content article-board">
<!--        <el-tag>Computer</el-tag>-->
      </div></el-col>
      <el-col :span="22"><div class="grid-content article-title">
        article title
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content">
        <img src="@/assets/blog/as.jpg" class="article-img">
      </div></el-col>
      <el-col :span="18"><div class="grid-content">
        <div class="article-preview">
          article preview
          in this div, you can see some words of the whole article.
          welcome to look up more detail by click the detail button
        </div>
        <router-link to="/music" class="to-article-detail">查看全文</router-link>
      </div></el-col>
    </el-row>

    <el-row>
      <el-col :span="6"><div class="grid-content">
        <el-tag effect="plain" class="article-tag"># 前端</el-tag>
        <el-tag effect="plain" class="article-tag"># MVVM</el-tag>
        <el-tag effect="plain" class="article-tag"># Vue</el-tag>
      </div></el-col>
<!--      <el-col :span="2"><div class="grid-content bg-purple-dark">-->
<!--        tag/time/spot/thumbup/board-->
<!--      </div></el-col>-->
      <el-col :span="6"><div class="grid-content">
      </div></el-col>
      <el-col :span="3"><div class="grid-content">
        <i class="el-icon-time"> 2/8/2020</i>
      </div></el-col>
      <el-col :span="3"><div class="grid-content">
        <i class="el-icon-position"> Chang Sha</i>
      </div></el-col>
      <el-col :span="6"><div class="grid-content rate-div">
          <el-rate
                  class="rate-icon"
                  v-model="value2"
                  :colors="colors">
          </el-rate>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    props: {
      msg: String
    },
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
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
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
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
  .article-img {
    height: 200px;
    width: 100%;
  }
  .article-title {
    font-size: 3rem;
  }
  .article-preview {
    font-size: 1.5rem;
    padding: 20px;
  }
  .article-board {
    font-size: 2rem;
  }
  .article-tag {
    margin-left: 5px;
    border: none;
  }
  .rate-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .to-article-detail {
    position: absolute;
    right: 30px;
    bottom: 0px;
  }
</style>
