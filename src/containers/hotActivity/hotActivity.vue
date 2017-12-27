<template>
    <div>
      <activity-title text="热门活动" link="/activities">
        <i class="iconfont icon-remenhuodong icon-position-font"></i>
      </activity-title>
    </div>
</template>

<script>
  import activityTitle from '@/components/activityTitle/activityTitle'
  export default {
    name: 'hotActivity',
    data () {
      return {}
    },
    components: {
      'activity-title': activityTitle
    }
  }
</script>
<style scoped>

</style>
