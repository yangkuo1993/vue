<template>
    <div class="home-activity">
      <router-link to="/course">
        <div style="text-align: center">
          <img class="normal-size" src="../../assets/images/home/activity-one.png" alt="">
        </div>
      </router-link>
      <title-activity :bottom="true"></title-activity>
      <title-activity :bottom="true"></title-activity>
      <title-activity></title-activity>
    </div>
</template>

<script>
  import titleActivity from './titleActivity/titleActivity'
  export default {
    name: 'homeActivity',
    data () {
      return {}
    },
    components: {
      'title-activity': titleActivity
    }
  }
</script>
<style scoped>
  .home-activity{
    /*text-align: center;*/
  }
  .normal-size{
    width: 351px;
    height: 80px;
  }
</style>
