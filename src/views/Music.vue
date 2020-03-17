<template>
  <div class="about">
    <Header msg="Welcome to Your Vue.js App"/>
    <div class="album-box">
      <Album msg="Welcome to Your Vue.js App"/>
    </div>
    <Controller msg="Welcome to Your Vue.js App"/>
    <div class="song-list">
      <SongList msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Controller from '@/components/music/Controller.vue'
  import Album from '@/components/music/Album.vue'
  import SongList from '@/components/music/SongList.vue'

  export default {
    name: 'Music',
    components: {
      Header,
      Controller,
      Album,
      SongList,
    }
  }
</script>

<style lang="scss" scoped>
  .album-box {
    width: 60%;
    margin: 0 auto;
  }
  .song-list {
    width: 60%;
    margin: 0 auto;
  }
</style>
