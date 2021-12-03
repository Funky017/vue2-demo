<template>
  <div class="login">
    <div class="login-form-layout">
      <el-card type="flex" justify="center">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          status-icon
          label-position="left"
        >
          <div style="text-align: center">
            <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
          </div>
          <h2 class="login-title color-main">登录</h2>
          <el-form-item prop="username">
            <el-input type="text"
                      name="username"
                      autoComplete="on"
                      v-model="loginForm.username"
                      placeholder="请输入用户名">
              <span slot="prefix">
                <svg-icon  icon-class="user" class="color-main"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input name="password"
                      v-model="loginForm.password"
                      :type="pwdType"
                      @keyup.enter.native="handleLogin"
                      autoComplete="on"
                      placeholder="请输入密码">
              <span slot="prefix">
                <svg-icon icon-class="password" class="color-main"></svg-icon>
              </span>
              <span slot="suffix" @click="showPwd">
                <svg-icon icon-class="eye" class="color-main"></svg-icon>
              </span>
            </el-input>
          </el-form-item>
<!--          <el-form-item prop="code">-->
<!--            <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码"-->
<!--                      style="width: 63%" @keyup.enter.native="handleLogin"></el-input>-->
<!--            <div class="login-code">-->
<!--              <img :src="codeUrl" @click="getCode">-->
<!--            </div>-->
<!--          </el-form-item>-->
<!--          <router-link to="/findPassword">找回密码</router-link>-->
<!--          <el-checkbox v-model="loginForm.remember" style="margin: 0 0 25px 0">记住我</el-checkbox>-->
          <el-form-item style="margin-bottom: 60px">
            <el-button :loading="loading"
                       style="width: 100%"
                       @click.native.prevent="handleLogin">
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </el-button>
          </el-form-item>
<!--          <e-form-itme>-->
<!--                      <router-link to="/register">注册</router-link>-->
<!--          </e-form-itme>-->
        </el-form>
      </el-card>
<!--      <img :src="login_center_bg" class="login-center-layout">-->

    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// import login_center_bg from '@/assets/images/login_center_bg.png'
export default {
  name: "login",
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!isvalidateUsername)
    // };
    return {
      codeUrl:"",
      cookiePass:'',
      loading: false,
      redirect: undefined,
      pwdType: "password",
      loginForm: {
        username: "admin",
        password: "123456",
        code:"",
        remember: false,
      },
      // login_center_bg,
      loginRules: {
        username:[{required: true, trigger: 'blur', message: '用户名不能为空'}],
        password:[{required: true, trigger: 'blur', message: '密码不能为空'}],
        // code:[{required: true, trigger: 'blur', message: '验证码不能为空'}],
      }
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      }
    }
  },
  created() {
    // 验证码
    // this.getCode()
    // // cookie
    // this.getCookie()
    // // token过期提示
    // this.point()
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
          .dispatch("Login", this.loginForm)
          .then(response => {
            this.loading = false;
            let code = response.data.code;
            if (code == 200) {
              this.$route.push({
                path:'/success',
                query:{data: response.data.data}
              });
            } else  {
              this.$route.push({
                path:'/error',
                query:{message: response.data.message}
              });
            }
          })
          .catch(() =>{
            this.loading = false;
          })
        } else {
          console.log('参数验证不合法')
          return false;
        }
      })
    },
    getCode() {
      this.codeUrl = "";
      this.loginForm.uuid = '11'
    },
    getCookie(){
      const loginFormname = Cookies.get('loginFormname');
      const password = Cookies.get('password');
      const remember = Cookies.get('remember');
      this.cookiePass = password === undefined ? '': password;

    },
    point(){
      const point = Cookies.get('point') !== undefined
      if (point) {
        this.$notify({
          title:'提示',
          message:'当前登录状态已过期，请重新登录',
          type:'warning',
          duration: 5000
        })
        Cookies.remove('point')
      }
    },
  }
};
</script>

<style scoped>
/* 背景 */
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409EFF;


  /* 背景图自适应*/
  /*background-image: url("../assets/bizhi.jpg");*/
  /*background-attachment: fixed;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*-moz-background-size: cover;*/
  /*-webkit-background-size: cover;*/
}

/* 标题 */
.login-title {
  text-align: center;
  /*color: #303133;*/
  /*font-size: 24px;*/
  /*margin: 0 auto 30px auto;*/
}

.login-center-layout {
  background: #409EFF;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}

/*
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}

a:hover {
  color: coral;
}

.el-button {
  width: 80%;
  margin-left: -50px;
}
*/

</style>
