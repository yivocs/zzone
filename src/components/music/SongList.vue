<template>
  <div class="song-list">
    <el-card class="box-card">
      <div v-for="song in songList" :key="song" class="text item">
        {{ song }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'SongList',
    props: {
      msg: String
    },
    data() {
      return {
        'songList': [
                'Move Me',
                'My Girl',
                'Beautiful',
        ]
      }
    },
    mounted: function() {
    },
    methods: {
    },
    watch: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .text {
    font-size: 1.5rem;
  }
  .item {
    padding: 18px 0;
    border-bottom: powderblue dotted;
  }
  .item:nth-last-child(1) {
    border: none;
  }
  .box-card {
    /*width: 480px;*/
  }
</style>
