<template>
    <div class="tabbar-item" @click="itemClick">
      <div class="tabbar-icon" :class="[iconClass]">
        <keep-alive>
          <slot name="icon" v-if="!(hasActiveIcon && isActive)"></slot>
        </keep-alive>
        <keep-alive>
          <slot name="icon-active" v-if="hasActiveIcon && isActive"></slot>
        </keep-alive>
      </div>
      <p class="tabbar-p" :class="[(hasActiveIcon && isActive) ? 'color-active' : 'color']">
        <slot name="tabname"></slot>
      </p>
    </div>
</template>

<script>
  export default {
    name: 'tabbarItem',
    props: {
      iconClass: String,
      selected: {
        type: Boolean,
        default: false
      },
      link: String
    },
    beforeMount () {
      if (this.$slots['icon-active']) {
        this.hasActiveIcon = true
      }
    },
    data () {
      return {
        hasActiveIcon: false,
        currentIndex: -1,
        currentSelected: this.selected
      }
    },
    computed: {
      isActive () {
        return this.$parent.index === this.currentIndex
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
    methods: {
      itemClick () {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$router.push({path: this.link})
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
    }
  }
</script>
<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    padding: 5px 0 0;
    font-size: 0;
  }
  .tabbar-icon{
    display: inline-block;
    width: 27px;
    height: 27px;
    position: relative;
    margin-bottom: 4px;
  }
  .tabbar-icon > img{
    width: 100%;
    height: 100%;
  }
  .tabbar-p{
    line-height: 0.8;
  }
  .color{
    color: #999999;
  }
  .color-active{
    color: #098aff;
  }
</style>
