<template>
    <div class="title-activity" :class="{'border-bottom': bottom}">
      <router-link to="/course">
        <div class="describe" style="float: left">
          <h6 class="title">这是一个神奇的故事你不在公司广东省地方伺机反击得手反抗集散地空间的说法散地空间的说法</h6>
          <div class="inline">
            <class-tie text="200人">已参加人数:</class-tie>
            <class-tie text="30000">
              <i class="iconfont icon-liulan icon-position"></i>
            </class-tie>
            <class-tie text="2017-11-28">
              <i class="iconfont icon-shijian icon-position"></i>
            </class-tie>
          </div>
        </div>
        <div class="class-img" style="float: right">
          <img src="../../../assets/images/home/activity-one-left.png" alt="">
        </div>
      </router-link>
    </div>
</template>

<script>
  import classTie from '@/components/classTie/classTie'
  export default {
    name: 'titleActivity',
    props: {
      imgPosition: String,
      describePosition: String,
      bottom: Boolean
    },
    data () {
      return {}
    },
    components: {
      'class-tie': classTie
    }
  }
</script>
<style scoped>
  .title-activity{
    width: 351px;
    margin: auto;
    overflow: hidden;
    padding: 18px 0;
  }
  .title{
    font-size: 13px;
    color: #333333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .class-img{
    width: 113px;
    height: 69px;
  }
  .class-img img{
    width: 100%;
    height: 100%;
  }
  .describe{
    width: 226px;
    height: 69px;
    position: relative;
    overflow: hidden;
  }
  .inline{
    position: absolute;
    left: 0;
    bottom: -10px;
  }
  .icon-position{
    font-size: 9px;
  }
  .border-bottom{
    border-bottom: 1px solid #ecf2f7;
  }
</style>
