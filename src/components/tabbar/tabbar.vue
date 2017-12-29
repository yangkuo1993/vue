<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'tabbar',
    props: {
      value: Number
    },
    data () {
      return {
        index: -1,
        currentIndex: this.index,
        number: this.$children.length
      }
    },
    methods: {
      updateIndex () {
        if (!this.$children || !this.$children.length) return
        this.number = this.$children.length
        let children = this.$children
        for (let i = 0; i < children.length; i++) {
          children[i].currentIndex = i
          if (children[i].currentSelected) {
            this.index = i
          }
        }
      }
    },
    mounted () {
      if (this.value >= 0) {
        this.currentIndex = this.value
      }
      this.updateIndex()
    },
    watch: {
      currentIndex (val, oldVal) {
        oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
        val > -1 && this.$children[val] && (this.$children[val].currentSelected = true)
        this.$emit('input', val)
        this.$emit('on-index-change', val, oldVal)
      },
      index (val) {
        this.currentIndex = val
      },
      value (val) {
        this.index = val
      }
    }
  }
</script>
<style scoped>
.tabbar{
  display: flex;
  position: absolute;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
}
</style>
