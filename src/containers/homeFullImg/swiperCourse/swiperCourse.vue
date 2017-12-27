<template>
    <div class="course-item">
      <router-link to="/course">
        <img :src="img" :class="imgClass">
        <course-name>
          <slot></slot>
        </course-name>
      </router-link>
    </div>
</template>

<script>
  import courseName from '@/components/courseName/courseName'
  export default {
    name: 'swiperCourse',
    props: {
      img: String,
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
  .course-item{
    display: inline-block;
  }
  .course-item a{
    display: inline-block;
    overflow: hidden;
  }
  .course-item img {
    vertical-align: top;
  }
  .normal-size{
    width: 170px;
    height: 81px;
  }
</style>
