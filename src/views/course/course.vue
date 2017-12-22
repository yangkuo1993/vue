<template>
    <div>
      <button @click="change">change   {{value}}</button>
      <login-button v-if="show" :text="value" @click.native="change"></login-button>
      <hr>
      <button @click="hideButton">隐藏按钮</button>
    </div>
</template>

<script>
  export default {
    name: 'course',
    data () {
      return {
        value: 1,
        text: '测试按钮',
        show: true
      }
    },
    methods: {
      change () {
        this.value++
        console.log(this.value)
      },
      hideButton () {
        this.show = !this.show
      }
    },
    components: {
      'login-button': () => import('@/components/loginInput/loginButton')
    }
  }
</script>
<style>

</style>
