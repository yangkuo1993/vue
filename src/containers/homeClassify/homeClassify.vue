<template>
  <div class="homeClassify">
    <router-link to="/notices">
      <div>
        <classify color="#2be1b1">
          <i class="iconfont icon-tongzhigonggao icon-position"></i>
        </classify>
        <p>通知公告</p>
      </div>
    </router-link>
    <router-link to="/activities">
      <div>
        <classify color="#67d0ff">
          <i class="iconfont icon-remenhuodong icon-position"></i>
        </classify>
        <p>热门活动</p>
      </div>
    </router-link>
    <router-link to="/news">
      <div>
        <classify color="#fee06b">
          <i class="iconfont icon-xinwenzixun icon-position"></i>
        </classify>
        <p>新闻资讯</p>
      </div>
    </router-link>
  </div>
</template>

<script>
  import classify from '../../components/classify/classify.vue'
  export default {
    name: 'homeClassify',
    data () {
      return {}
    },
    components: {
      classify
    }
  }
</script>
<style scoped>
  .homeClassify{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0 14px 0;
    background: #ecf8fd;
  }
  .icon-position{
    color: #ffffff;
  }
  .homeClassify p{
    font-size: 12px;
    padding-top: 5px;
    color: #26293a;
  }
  .homeClassify > a{
    margin: 0 15px;
  }
</style>
