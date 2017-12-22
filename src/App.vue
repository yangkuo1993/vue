<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-show="showTabbar" v-model="selectBarIndex">
      <tabbar-item link="/home">
        <img slot="icon" src="./assets/images/homepage.png">
        <img slot="icon-active" src="./assets/images/homepage_fill.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/course">
        <img slot="icon" src="./assets/images/order.png">
        <img slot="icon-active" src="./assets/images/order_fill.png">
        <span slot="label">课程</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" src="./assets/images/people.png">
        <img slot="icon-active" src="./assets/images/people_fill.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
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
    Tabbar,
    TabbarItem
  },
  methods: {
  },
  watch: {
    '$route' (to) {
      to.name === 'login' ? this.showTabbar = false : this.showTabbar = true
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
</style>
