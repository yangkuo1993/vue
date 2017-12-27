<template>
  <input class="input" type="text" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
</template>

<script>
  export default {
    name: 'loginInput',
    props: {
      value: {
        type: [String, Number]
      }
    },
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
    width: 318px;
    font-size: 13px;
    padding: 13px 0 13px 40px;
    color: #333;
    background: rgba(255, 255, 255, 0);
    border: 1px solid #fff;
    /*box-shadow: 0px 0px 1px 1px #fff;*/
    /*-moz-box-shadow: 0px 0px 1px 1px #fff;*/
    /*-webkit-box-shadow: 0px 0px 1px 1px #fff;*/
    border-radius: 5px;
    -webkit-appearance: none;
    position: relative;
  }
</style>
