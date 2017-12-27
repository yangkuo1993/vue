<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isUpdate: true,
      bkData: {},
      routerTo: '',
      selectBarIndex: 0,
      showTabbar: false
    }
  },
  mounted () {
  },
  components: {
  },
  methods: {
  },
  watch: {
    '$route' (to) {
      (to.name === 'login' || to.name === 'homeLoad') ? this.showTabbar = false : this.showTabbar = true
      if (to.path === '/course') {
        this.selectBarIndex = 1
      } else if (to.path === '/home') {
        this.selectBarIndex = 0
      } else if (to.path === '/my') {
        this.selectBarIndex = 2
      }
    }
  }
}
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
<style lang="scss">
  @import 'assets/style/mixin';
  @import 'assets/style/common';
  @import 'assets/iconfont/iconfont.css';
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/iconfont/iconfont.eot');
    src: url('./assets/iconfont/iconfont.eot') format('embedded-opentype'),
    url('./assets/iconfont/iconfont.woff') format('woff'),
    url('./assets/iconfont/iconfont.ttf') format('truetype'),
    url('./assets/iconfont/iconfont.svg') format('svg');
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html{
    background: #ffffff;
  }
  #app{
    width: 100%;
    height: 100%;
    background: #ffffff;
    -moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout:none
  }
  .active{
    color: red;
  }
  .bullet-top{
    background: #0b77ce;
    width: .21333333rem;
    height: .21333333rem;
    border-radius: .10666667rem;
    transition: all .3s;
    opacity: 1;
    display: inline-block;
    margin: 0 5px;
  }
  .bullet-top-active{
    width: .85333333rem;
    background: #0970c3;
  }
  .class-bullet-top{
    background: #e8eff5;
    width: .21333333rem;
    height: .21333333rem;
    border-radius: .10666667rem;
    transition: all .3s;
    opacity: 1;
    display: inline-block;
    margin: 0 5px;
  }
  .class-bullet-top-active{
    width: .85333333rem;
    background: #e8eff5;
  }
</style>
