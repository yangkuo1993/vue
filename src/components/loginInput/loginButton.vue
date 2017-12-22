<template>
  <button class="button">测试按钮{{text}}</button>
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
    width: 80%;
    margin-left: 10%;
    height: 40px;
    background: #fff;
    padding-left: 10px;
    font-size: 18px;
    color: #333;
  }
</style>
