<template>
  <div class="home wrapper" ref="wrapper">
    <scroll ref="scroll" class="wrapper-content" :bounce="false">
      <div class="content">
        <top-banner></top-banner>
        <home-classify></home-classify>
        <home-center></home-center>
        <div class="line"></div>
        <hot-activity></hot-activity>
        <home-activity></home-activity>
      </div>
    </scroll>
  </div>
</template>

<script>
import topBanner from '@/components/topBanner/topBanner'
import homeClassify from '@/containers/homeClassify/homeClassify'
import homeCenter from '@/containers/homeCenter/homeCenter'
import hotActivity from '@/containers/hotActivity/hotActivity'
import homeActivity from '@/containers/homeActivity/homeActivity'
import Scroll from './scroll/scroll'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  components: {
    'top-banner': topBanner,
    'home-classify': homeClassify,
    'home-center': homeCenter,
    'hot-activity': hotActivity,
    'home-activity': homeActivity,
    'scroll': Scroll
  },
  methods: {
  },
  watch: {}
}
</script>

<style lang='scss' scoped>
  @import '../../assets/style/mixin';
  .home,.wrapper{
    width: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
  }
  .wrapper{
    position: fixed;
    top: 0;
    bottom: 45px;
  }
  .wrapper-one{
    height: 200px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column
  }
  .line{
    height: 5px;
    width: 100%;
    background: #ecf2f7;
  }
  .wrapper .wrapper-content{
    height: 100%;
  }
</style>
