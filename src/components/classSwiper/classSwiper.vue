<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of 4" :key="index">
          <slot :name="index"></slot>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  let vueThis = {}
  export default {
    name: 'classSwiper',
    props: {
      selectIndex: {
        type: Number
      }
    },
    data () {
      return {
        choose: 0,
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
          },
          on: {
            slideChangeTransitionEnd: function () {
              vueThis.choose = this.activeIndex
              vueThis.$emit('swiper-class-change', vueThis.choose)
            }
          },
          spaceBetween: 10
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    beforeCreate () {
      vueThis = this
    },
    mounted () {
    },
    updated () {
      this.swiper.slideTo(this.selectIndex, 300, false)
    },
    components: {
      swiper,
      swiperSlide
    },
    watch: {
    }
  }
</script>
<style scoped>
  .swiper-slide {
    width: 100% !important;
    background: #fff;
    text-align: center;
  }
  .swiper-slide:nth-child(1) {
  }
  .swiper-slide:nth-child(2) {
  }
  .swiper-container{
    margin: 0;
  }
  .swiper-pagination{
    text-align: center;
    bottom: -5px;
  }
</style>
