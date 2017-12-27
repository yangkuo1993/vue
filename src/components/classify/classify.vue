<template>
    <span class="span" :style="{backgroundColor: color}">
      <slot></slot>
    </span>
</template>

<script>
  export default {
    name: 'classify',
    props: {
      color: {
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
  .span{
    width: 2.133333rem;
    display: table;
    height: 0.96rem;
    position: relative;
    text-align: center;
    border-radius: 0.133333rem;
  }
  .span > i{
    display: table-cell;
    vertical-align: middle;
  }
</style>
