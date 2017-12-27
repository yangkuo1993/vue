<template>
    <div class="tab-item" @click="itemClick" :style="style">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'tabItem',
    props: {
      selected: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentIndex: -1,
        currentSelected: this.selected
      }
    },
    mounted () {
      this.$parent.updateIndex()
    },
    beforeDestroy () {
      const $parent = this.$parent
      this.$nextTick(() => {
        $parent.updateIndex()
      })
    },
    methods: {
      itemClick () {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
    },
    watch: {
      currentSelected (val) {
        if (val) {
          this.$parent.index = this.currentIndex
        }
      },
      selected (val) {
        this.currentSelected = val
      }
    },
    computed: {
      style () {
        return {
          borderWidth: this.$parent.lineWidth + 'px',
          borderColor: this.$parent.activeColor,
          color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
          border: this.$parent.animate ? 'none' : 'auto',
          fontSize: this.$parent.fontSize
        }
      }
    }
  }
</script>
<style scoped>

</style>
