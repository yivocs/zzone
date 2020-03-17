<template>
  <div class="music-controls">
    <audio ref='audio' src="@/assets/music/MoveMe.mp3" loop></audio>
    <div class="music-btns">
      <i :class="iconType" @click="handlePlayButton"></i>
      <i class="el-icon-refresh"></i>
      <i class="el-icon-refresh-right"></i>
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="block">
      <el-slider @change="handleSlider" v-model="sliderValue" :format-tooltip="formatTooltip"></el-slider>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Controller',
    props: {
      msg: String
    },
    data() {
      return {
          table: false,
          dialog: false,
          loading: false,
          input: '',
          iconType: 'el-icon-video-play',
          sliderValue: 0,
          musicTime: 0,
      }
    },
    mounted: function() {
      this.setDynamicSlider()
    },
    methods: {
      handlePlayButton(event) {
        if (this.iconType === 'el-icon-video-play') {
            this.iconType = 'el-icon-video-pause'
            this.$refs.audio.play()
            console.log('xxx', this.$refs.audio.duration)
        } else {
          this.iconType = 'el-icon-video-play'
          this.$refs.audio.pause()
        }
      },
      handleSlider(val) {
        let duration = this.$refs.audio.duration
        let timePos = val / 100 * duration
        console.log('handleSlider', timePos, this.sliderValue)
        this.$refs.audio.currentTime = timePos
        this.$refs.audio.play()
      },
      formatTooltip(val) {
        let musicTime = val / 100 * this.$refs.audio.duration
        let ffvs = Math.floor(musicTime / 60)
        let mcvs = Math.floor(musicTime % 60)
        console.log('formatTooltip', ffvs, mcvs)
        let tip = ffvs.toString() + 'm' + mcvs.toString() + 's'
        return tip
      },
      setSliderValue() {
        let currentTime = this.$refs.audio.currentTime
        let duration = this.$refs.audio.duration
        this.sliderValue = 100 * currentTime / duration
        console.log('setSliderValue')
      },
      setDynamicSlider() {
        setInterval(this.setSliderValue, 500)
      }
    },
    watch: {
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
  }
  .my-talk {
    text-align: right;
  }
  .music-btns {
    font-size: 50px;
  }
  .music-controls {
    width: 300px;
    margin: 0 auto;
  }
  .block {
    display: inline-block;
    width: 200px;
  }
</style>
