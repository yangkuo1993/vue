<template>
    <div class="loginContainer">
      <form @submit.prevent>
        <div>1234</div>
        <login-input class="out" v-bind:value="username"
                     v-on:input="username = arguments[0]"></login-input>
        <login-input class="out"  v-bind:value="password"
                     v-on:input="password = arguments[0]"></login-input>
        <login-button text="登录" @click.native="login"></login-button>
      </form>
    </div>
</template>

<script>
  import { XInput } from 'vux'
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
      'login-input': () => import('@/components/loginInput/loginInput'),
      'login-button': () => import('@/components/loginInput/loginButton'),
      XInput
    },
    computed: {
    },
    methods: {
      login () {
        this.$store.dispatch('showLoading', true)
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        }).then((data) => {
          this.$store.dispatch('showLoading', false)
          if (data.status === 200 && data.data.status === 1) {
            this.$router.push({path: '/'})
          }
        }).catch((e) => {
          console.log(e)
        })
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
    background: #00cca1;
  }
</style>
