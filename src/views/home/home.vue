<template>
  <div class="home">
    <swiper :list="baseList" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <div>
      <tab :animate="false" v-model="index">
        <tab-item class="vux-center" :selected="tabSelect === item" v-for="(item, index) in list" @click="tabSelect = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="500px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">{{item}}</div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, Tab, TabItem, SwiperItem, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'home',
  data () {
    return {
      baseList: [{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg'
      }],
      demo01_index: 0,
      list: ['基础教育', '高等教育', '学历教育', '终身教育'],
      tabSelect: '基础教育',
      index: 0
    }
  },
  created () {
    this.$emit('hideFooter', true)
  },
  mounted () {
  },
  components: {
    Swiper,
    Tab,
    TabItem,
    SwiperItem,
    Tabbar,
    TabbarItem
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  },
  watch: {}
}
</script>

<style lang='scss' scoped>
  @import '../../assets/style/mixin';
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column
  }
  .wrapper-one{
    height: 200px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column
  }
</style>
