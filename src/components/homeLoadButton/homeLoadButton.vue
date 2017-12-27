<template>
    <button class="button" :style="{'color': color, 'background-color': background}">
      {{text}}
      <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'homeLoadButton',
    props: {
      text: {
        type: String
      },
      color: {
        type: String
      },
      background: {
        type: String
      },
      link: {
        type: String
      }
    },
    data () {
      return {}
    },
    methods: {
    }
  }
</script>
<style scoped>
.button{
  width: 130px;
  height: 45px;
  display: inline-block;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 25px;
  font-size: 15px;
  line-height: 45px;
  margin: 0 20px;
}
</style>
