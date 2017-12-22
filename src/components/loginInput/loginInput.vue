<template>
  <input class="input" type="text" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
</template>

<script>
  export default {
    name: 'loginInput',
    props: ['value'],
    data () {
      return {
        currentValue: this.value
      }
    },
    methods: {
      updateValue (data) {
        this.$emit('input', data)
      }
    }
  }
</script>
<style scoped>
  .input{
    width: 80%;
    margin-left: 10%;
    height: 40px;
    background: #fff;
    padding-left: 10px;
    font-size: 18px;
    color: #333;
  }
</style>
