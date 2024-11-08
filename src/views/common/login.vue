<template>
  <div class='form-wrapper'>
    <h3 class="login-title">管理者ログイン</h3>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="ユーザー名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="パスワード" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('ユーザーネームを入力してください'));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('パスワードを入力してください'));
      }  else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassWord, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            url: '/api/users/login',
            method: 'post',
            data: {
              'username': this.ruleForm.username,
              'password': this.ruleForm.password
            }
          }).then(({data}) => {
            if(data && data.code == 0){
              window.alert("login sucess");
            }else{
              window.alert('test2');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang='scss'>
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    background-image: url(../../assets/img/login_bg.jpg);
  }
  .form-wrapper{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .login-title{
    padding: 0 0 10px 60px;
  }
</style>