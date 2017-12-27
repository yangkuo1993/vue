<template>
    <div class="full">
      <router-link to="/course">
        <img src="../../assets/images/home/top-baner-one.png" :class="imgClass">
        <course-name>
          <slot></slot>
        </course-name>
      </router-link>
    </div>
</template>

<script>
  import courseName from '@/components/courseName/courseName'
  export default {
    name: 'homeFullImg',
    props: {
      tag: String
    },
    data () {
      return {}
    },
    components: {
      'course-name': courseName
    },
    computed: {
      imgClass () {
        const classValue = {
          'normal-size': this.tag === 'normal'
        }
        return classValue
      }
    }
  }
</script>
<style scoped>
.full img{
  vertical-align: top;
}
.normal-size{
  width: 351px;
  height: 80px;
}
</style>
