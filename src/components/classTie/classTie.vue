<template>
    <span class="tie">
      <slot></slot>
      {{text}}
    </span>
</template>

<script>
  export default {
    name: 'classTie',
    props: {
      text: String
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
.tie{
  font-size: 9px;
  color: #999999;
  position: relative;
  margin-right: 10px;
}
</style>
