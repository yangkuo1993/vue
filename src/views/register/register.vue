<template>
    <div class="register">
      <form>
        <div class="form">
          <div class="out-input under-line">
            <label for="username"></label>
            <input type="text" id="username" placeholder="用户名">
            <i class="iconfont icon-yonghuming icon-position"></i>
          </div>
          <div class="out-input under-line">
            <label for="phone"></label>
            <input type="number" id="phone" placeholder="请输入正确的手机号">
            <i class="iconfont icon-shoujihao icon-position"></i>
          </div>
          <div class="out-input under-line">
            <label for="code"></label>
            <input type="number" id="code" placeholder="请输入短信验证码">
            <i class="iconfont icon-shoujiyanzheng icon-position"></i>
            <span class="code-send">发送验证码</span>
          </div>
          <div class="out-input">
            <label for="password"></label>
            <input type="password" id="password" placeholder="密码，6-10位字母或数字">
            <i class="iconfont icon-zhucemima icon-position"></i>
          </div>
        </div>
        <div class="button-out">
          <button class="register-button">注册并登录</button>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .register{
    width: 100%;
    height: 100%;
    background: url("../../assets/images/login/login-bk.png") no-repeat;
    background-size: 100%;
    padding-top: 63px;
  }
  .form{
    width: 291px;
    background: #ecf5fd;
    margin: auto;
    border-radius: 5px;
  }
  .out-input{
    position: relative;
    height: 45px;
    margin: 0 14px;
  }
  .out-input input{
    width: 100%;
    background: rgba(255, 255, 255, 0);
    font-size: 13px;
    padding: 14px 0 14px 40px;
    vertical-align: top;
    border: none;
  }
  .under-line{
    position: relative;
  }
  .under-line:after{
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #b3dafe;
    bottom: 0;
    left: 0;
  }
  .register-button{
    width: 291px;
    height: 45px;
    background: rgba(255, 255, 255, 0);
    border: 1px solid #fff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 16px;
  }
  .button-out{
    text-align: center;
    margin-top: 32px;
  }
  .icon-position{
    color: #95cfef;
    position: absolute;
    top: 6px;
    font-size: 22px;
    left: 8px;
  }
  .code-send{
    position: absolute;
    display: inline-block;
    font-size: 13px;
    text-decoration: underline;
    color: blue;
    right: 0px;
    top: 12px;
  }
</style>
