<template>
    <div class="tab">
      <slot ref="child"></slot>
      <div class="under-line" :style="barStyle" :class="barClass">
        <span class="bar-inner" :style="innerBarStyle" v-if="customBarWidth"></span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      lineWidth: {
        type: Number,
        default: 3
      },
      activeColor: {
        type: String
      },
      defaultColor: {
        type: String
      },
      barActiveColor: {
        type: String
      },
      animate: {
        type: Boolean,
        default: true
      },
      customBarWidth: {
        type: String
      },
      fontSize: {
        type: String
      },
      bottom: {
        type: String
      }
    },
    data () {
      return {
        index: -1,
        currentIndex: this.index,
        number: this.$children.length,
        hasReady: false,
        direction: 'forward'
      }
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.hasReady = true
          this.updateIndex()
        }, 0)
      })
    },
    computed: {
      barLeft () {
        return `${this.currentIndex * (100 / this.number)}%`
      },
      barRight () {
        return `${(this.number - this.currentIndex - 1) * (100 / this.number)}%`
      },
      innerBarStyle () {
        return {
          width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
          backgroundColor: this.barActiveColor || this.activeColor
        }
      },
      barStyle () {
        const commonStyle = {
          left: this.barLeft,
          right: this.barRight,
          display: 'block',
          height: this.lineWidth + 'px',
          transition: !this.hasReady ? 'none' : null,
          bottom: this.bottom
        }
        if (!this.customBarWidth) {
          commonStyle.backgroundColor = this.barActiveColor || this.activeColor
        } else {
          commonStyle.backgroundColor = 'transparent' // when=prop:custom-bar-width
        }
        return commonStyle
      },
      barClass () {
        return {
          'bar-transition-forward': this.direction === 'forward' && this.animate,
          'bar-transition-backward': this.direction === 'backward' && this.animate
        }
      }
    },
    watch: {
      currentIndex (val, oldVal) {
        this.direction = val > oldVal ? 'forward' : 'backward'
        oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
        val > -1 && this.$children[val] && (this.$children[val].currentSelected = true)
        this.$emit('input', val)
        this.$emit('on-index-change', val, oldVal)
      },
      index (val) {
        this.currentIndex = val
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
    }
  }
</script>
<style scoped>
  .tab{
    display: flex;
    position: relative;
    height: 45px;
    line-height: 45px;
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
  }
  .under-line{
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF9900;
    text-align: center;
  }
  .bar-inner{
    display: block;
    background-color: #FF9900;
    margin: auto;
    height: 100%;
    -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  }
  .bar-transition-forward {
    -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
    transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
    -moz-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
  }
  .bar-transition-backward {
    -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    -moz-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  }
</style>
