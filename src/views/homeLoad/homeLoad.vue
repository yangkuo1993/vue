<template>
    <div class="background">
      <div class="out">
        <load-describe class="describe-font">现在决定未来·知识改变命运</load-describe>
        <div>
          <load-button color="#ffffff" background="#459dcb" @click.native="register">注&nbsp;&nbsp;册</load-button>
          <load-button color="#0c87c6" background="#b7d9ec" @click.native="login">登&nbsp;&nbsp;录</load-button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'homeLoad',
    data () {
      return {}
    },
    components: {
      'load-describe': () => import('@/components/loadDescribe/loadDescribe'),
      'load-button': () => import('@/components/homeLoadButton/homeLoadButton')
    },
    methods: {
      // 登录
      login () {
        this.$router.push({path: '/login'})
      },
      // 注册
      register () {
        this.$router.push({path: '/register'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/style/mixin';
  .background{
    height: 100%;
    width: 100%;
    background: url("../../assets/images/login/app-login.png") no-repeat;
    background-size: 100%;
    position: relative;
  }
  .describe-font{
    font-size: 16px;
    color: #ffffff;
    position: relative;
    text-align: center;
    margin-bottom: 130px;
  }
  .out{
    position: absolute;
    width: 100%;
    bottom: 85px;
    text-align: center;
  }
</style>
