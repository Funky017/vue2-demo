<template>
<!--  <h3>基本登录页面</h3>-->
  <div>
    <el-form ref="form" :model="form" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form:{
        name:"",
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  watch: {
  },
  created() {

  },
  methods: {
    // 验证
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          this.$router.push({name:'Main', params:{name:this.form.name}})   //跳转
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          });
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>
  .login-box{
    width: 350px;
    margin: 120px auto;
    border: 1px solid #DCDFE6;
    padding: 20px; /*内边距*/
    border-radius: 5px;
    box-shadow: 0 0 3px #DCDFE6; /*阴影*/
  }
  .login-title {
    text-align: center;
  }
</style>
