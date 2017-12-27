<template>
    <div class="center-swiper">
      <class-swiper :selectIndex="selectIndex" @swiper-class-change="swiperChange">
        <home-full-img slot="0" tag="normal">计算机三维设计</home-full-img>
        <home-full-img slot="1" tag="normal">计算机三维设计</home-full-img>
        <home-full-img slot="2" tag="normal">计算机三维设计</home-full-img>
        <home-full-img slot="3" tag="normal">计算机三维设计</home-full-img>
        <swiper-course slot="0" v-for="(item, index) of img" :img="item.src" :key="item.id" tag="normal" :class="[ index % 2 !== 0 ? 'left-margin' : '']">计算机三维设计</swiper-course>
        <swiper-course slot="1" v-for="(item, index) of img" :img="item.src" :key="item.id" tag="normal" :class="[ index % 2 !== 0 ? 'left-margin' : '']">计算机三维设计</swiper-course>
        <swiper-course slot="2" v-for="(item, index) of img" :img="item.src" :key="item.id" tag="normal" :class="[ index % 2 !== 0 ? 'left-margin' : '']">计算机三维设计</swiper-course>
        <swiper-course slot="3" v-for="(item, index) of img" :img="item.src" :key="item.id" tag="normal" :class="[ index % 2 !== 0 ? 'left-margin' : '']">计算机三维设计</swiper-course>
      </class-swiper>
    </div>
</template>

<script>
  import homeFullImg from '../../homeFullImg/homeFullImg.vue'
  import swiperCourse from '../../homeFullImg/swiperCourse/swiperCourse'
  import classSwiper from '@/components/classSwiper/classSwiper'
  export default {
    name: 'centerSwiper',
    props: {
      selectIndex: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        img: [
          {
            src: require('../../../assets/images/home/class-one.png'),
            id: 1
          },
          {
            src: require('../../../assets/images/home/class-two.png'),
            id: 2
          },
          {
            src: require('../../../assets/images/home/class-three.png'),
            id: 3
          },
          {
            src: require('../../../assets/images/home/class-four.png'),
            id: 4
          }
        ]
      }
    },
    components: {
      'home-full-img': homeFullImg,
      'swiper-course': swiperCourse,
      'class-swiper': classSwiper
    },
    methods: {
      swiperChange (data) {
        this.$emit('swiper-change', data)
      }
    }
  }
</script>
<style scoped>
  .center-swiper{
    overflow: hidden;
  }
  .left-margin{
    margin-left: 11px;
  }
</style>
