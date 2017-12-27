<template>
    <p class="courseTitle">
      <slot></slot>
    </p>
</template>

<script>
  export default {
    name: 'courseName',
    data () {
      return {}
    }
  }
</script>
<style scoped>
.courseTitle{
  font-size: 12px;
  color: #333333;
  padding: 7px 0 19px 0;
}
</style>
