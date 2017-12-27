<template>
    <div class="loginContainer">
      <form @submit.prevent>
        <!--<i class="iconfont icon-iconfont-mima1"></i>-->
        <div class="input-out">
          <label for="username"></label>
          <i class="iconfont icon-iconfont-yonghu icon-position"></i>
          <login-input id="username" class="out" v-bind:value="username"
                       v-on:input="username = arguments[0]" placeholder="手机号码/用户名/邮箱" type="text"></login-input>
        </div>
        <div class="input-out">
          <label for="password"></label>
          <i class="iconfont icon-iconfont-mima1 icon-position"></i>
          <login-input id="password" class="out"  v-bind:value="password"
                       v-on:input="password = arguments[0]" placeholder="密码" type="password"></login-input>
        </div>
        <div class="input-out">
          <login-button class="out" @click.native="login" style="color: #098aff">登&nbsp;&nbsp;录</login-button>
        </div>
      </form>
      <div class="register-input">
        <span class="line" @click.stop="register">马上注册</span><span @click="forgetPassword">忘记密码</span>
      </div>
    </div>
</template>

<script>
  import loginInput from '@/components/loginInput/loginInput'
  import loginButton from '@/components/loginInput/loginButton'
  export default {
    data () {
      return {
        username: 'yangkuo',
        password: '123456'
      }
    },
    created () {
    },
    mounted () {
    },
    components: {
      'login-input': loginInput,
      'login-button': loginButton
    },
    computed: {
    },
    methods: {
      // 登录
      login () {
        this.$store.dispatch('showLoading', true)
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        }).then((data) => {
          this.$store.dispatch('showLoading', false)
          if (data.status === 200 && data.data.status === 1) {
            this.$router.push({path: '/home'})
          }
        }).catch((e) => {
          console.log(e)
        })
      },
      // 注册
      register () {
        this.$router.push({path: '/register'})
      },
      // 忘记密码
      forgetPassword () {
        this.$router.push({path: '/forgetPassword'})
      }
    },
    watch: {
    }
  }
</script>

<style scoped>
  .out{
    margin: 10px 0;
  }
  .loginContainer{
    width: 100%;
    height: 100%;
    background: url("../../assets/images/login/login-bk.png") no-repeat;
    background-size: 100%;
  }
  .input-out{
    text-align: center;
    position: relative;
    width: min-content;
    margin: 16px auto;
  }
  .icon-position{
    position: absolute;
    font-size: 30px;
    color: #fff;
    top: 10px;
    left: 2px;
    z-index: 10;
  }
  form{
    padding-top: 71px;
  }
  .register-input{
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  .register-input span{
    display: inline-block;
    margin: 0 10px;
  }
  .register-input span:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .line{
    position: relative;
  }
  .line:after{
    content: '';
    width: 1px;
    height: 12px;
    position: absolute;
    background: #ffffff;
    right: -10px;
    top: 4px;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }
  input:-ms-input-placeholder {
    color: #fff;
  }
  input:-moz-placeholder {
    color: #fff;
  }
  input::-moz-placeholder {
    color: #fff;
  }
</style>
