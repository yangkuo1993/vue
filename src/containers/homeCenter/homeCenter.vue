<template>
    <div>
      <activity-title text="精品课程" link="/courseClassify">
        <i class="iconfont icon-jingpinkecheng icon-position-font"></i>
      </activity-title>
      <tab style="margin: 0 20px;"
           items="menu"
           :line-width="1"
           bar-active-color="#3893f9"
           custom-bar-width="48px"
           active-color="#3893f9"
           font-size="12px"
           bottom="12px">
        <tab-item :selected="index === chooseIndex" @on-item-click="changeSelect" v-for="(item, index) of menu" :key="item.id">{{item.name}}</tab-item>
      </tab>
      <center-swiper @swiper-change="swiperChange" :selectIndex="chooseIndex"></center-swiper>
    </div>
</template>

<script>
  import activityTitle from '@/components/activityTitle/activityTitle'
  import tab from '@/components/tab/tab'
  import tabItem from '@/components/tabItem/tabItem'
  import centerSwiper from './centerSwiper/centerSwiper.vue'
  export default {
    name: 'homeCenter',
    data () {
      return {
        menu: [
          {
            name: '基础教育',
            id: 1
          },
          {
            name: '高等教育',
            id: 2
          },
          {
            name: '学历教育',
            id: 3
          },
          {
            name: '终身教育',
            id: 4
          }
        ],
        chooseIndex: 0
      }
    },
    components: {
      'activity-title': activityTitle,
      tab,
      'tab-item': tabItem,
      'center-swiper': centerSwiper
    },
    methods: {
      changeSelect (index) {
        this.chooseIndex = index
      },
      swiperChange (select) {
        this.chooseIndex = select
      }
    }
  }
</script>
<style scoped>

</style>
