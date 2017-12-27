<template>
  <button class="button">
    {{text}}
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'loginButton',
    props: {
      text: {
        require: true,
        type: [String, Number]
      }
    },
    beforeCreate () {
      console.log('beforeCreate')
    },
    created () {
      console.log('created')
    },
    beforeMount () {
      console.log('beforeMount')
    },
    mounted () {
      console.log('mounted')
    },
    beforeUpdate () {
      console.log('beforeUpdate')
    },
    updated () {
      console.log('updated')
    },
    beforeDestroy () {
      console.log('beforeDestroy')
    },
    destroyed () {
      console.log('destroyed')
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .out{
    margin: 10px 0;
  }
  .button{
    width: 318px;
    height: 45px;
    line-height: 45px;
    background: #fff;
    font-size: 16px;
    color: #333;
    border-radius: 5px;
  }
</style>
