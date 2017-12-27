<template>
    <header class="header">
      <span class="header-title">
        {{text}}
        <slot></slot>
      </span>
      <router-link :to="link">
        <i class="iconfont icon-iconfont-fanhui icon-position"></i>
      </router-link>
    </header>
</template>

<script>
  export default {
    name: 'activityTitle',
    props: {
      text: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .header{
    text-align: center;
    position: relative;
    background: #ffffff;
  }
  .header-title{
    font-size: 14px;
    color: #333333;
    position: relative;
    padding: 18px 0;
    display: inline-block;
  }
  .icon-position{
    display: inline-block;
    transform: rotate(180deg);
    font-size: 30px;
    position: absolute;
    right: 20px;
    color: #999999;
    top: 5px;
  }
  .icon-position-font{
    position: absolute;
    color: #098aff;
    font-size: 20px;
    top: 13px;
    left: -25px;
  }
</style>
