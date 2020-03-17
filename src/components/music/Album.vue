<template>
  <div class="music-controls">
      <el-carousel :interval="2000" type="card" height="200px">
        <el-carousel-item v-for="img in images">
            <img :src=img alt="">
            <span>{{img}}</span>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Album',
    props: {
      msg: String
    },
    data() {
      return {
          images: [
              require('@/assets/album/1.jpg'),
              require('@/assets/album/2.jpg'),
              require('@/assets/album/3.jpg'),
          ],
      }
    },
    mounted: function() {
    },
    methods: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .music-controls {
      /*width: 800px;*/
  }
</style>
