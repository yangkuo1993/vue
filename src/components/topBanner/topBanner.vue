<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiperOne">
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/images/home/banner-two.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/home/banner-one.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/home/banner-two.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/home/banner-one.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination-one" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'topBanner',
    data () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.swiper-pagination-one',
            clickable: true,
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'bullet-top',
            bulletActiveClass: 'bullet-top-active'
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiperOne.swiper
      }
    },
    mounted () {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped>
  .swiper-slide {
    height: 164px;
  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-container{
    margin: 0;
  }
  .swiper-pagination-one{
    text-align: right;
    padding-right: 20px;
    position: absolute;
    z-index: 10;
    bottom: 0;
  }
</style>
