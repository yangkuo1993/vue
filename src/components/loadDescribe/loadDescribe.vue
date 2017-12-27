<template>
    <p>
      <slot></slot>
      {{text}}
    </p>
</template>

<script>
  export default {
    name: 'loadDescribe',
    props: {
      text: {
        type: String
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>

</style>
