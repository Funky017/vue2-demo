<template>
  <div class="register">
    <div class="register-container">
      <el-row type="flex" justify="center">
        <el-form ref="registerForm" :model="user" :rules="rules" status-icon label-width="80px">
          <h3 class="login-title">注册</h3>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="user.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" icon="el-icon-user-solid">
            <el-input v-model="user.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="设置密码" prop="password">
            <el-input v-model="user.password" show-password placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="再次确认密码" prop="cpassword">
            <el-input v-model="user.cpassword"show-password placeholder="密码"></el-input>
          </el-form-item>
<!--          <el-for-item label="验证码" prop="code">-->
<!--            <el-button size="mini" round @click="sendMsg">发送验证码</el-button>-->
<!--            <el-input v-model="code" maxlength="4"/>-->
<!--          </el-for-item>-->
          <el-form-item>
            <el-button type="primary" @click="dpRegister()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      user: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
      code: "",
      rules: {
        username: [{require: true, type: 'string', message: '请输入用户名', trigger: 'blur'}],
        email: [{require: true, type:'email',  message: '请输入邮箱', trigger: 'blur'}],
        password: [{require: true, message: '创建密码', trigger: 'blur'}],
        cpassword: [{require: true, message: '确认密码', trigger: 'blur'},{
          validator: (rule,value,callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码！'))
            } else if(value !== this.user.password) {
              callback(new Error('两次密码不一致！'))
            } else{ callback() }
          },
          trigger: 'blur'
        }],
      }
    };
  },
  created() {
  },
  methods: {
    sendMsg() {
      this.$axios.get("/sendMsg").then(res => {
        this.code = res.data;
      })
    },
    dpRegister() {
      // if (!this.user.username) {
      //   this.$message.error("请输入用户名!");
      //   return;
      // } else if (this.user.email != null) {
      //   let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+&/
      //   if (!reg.test(this.user.email)) {
      //     this.$message.error("请输入有效邮箱!");
      //     return;
      //   }
      // } else if (!this.user.password) {
      //   this.$message.error("请输入密码!");
      //   return;
      // } else {
      //   // 验证
      //   this.$axios
      //     .post("/register/", {
      //       name: this.user.username,
      //       password: this.user.password
      //     })
      //     .then(res => {
      //       if (res.data.status === 200) {
      //         this.$router.push({path: "/"});  // 跳转首页
      //       } else {
      //         this.$alert("用户名已存在！")
      //       }
      //     });
      // }
    }

  }
}
</script>

<style scoped>
/* 背景 */
.register {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 背景图自适应*/
  background-image: url("../assets/bizhi.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  overflow: hidden;
}

.register-container {
  width: 500px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgba(255, 255, 255, 0.3); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
  overflow: hidden;
}



/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
  font-size: 24px;
}

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
</style>