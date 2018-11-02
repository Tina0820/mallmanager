<template>
  <div class="login-wrap">
     <el-form  class="login-form" label-position="top" label-width="80px">
         <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button  class="login-button" type="primary" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
   async handleLogin(){ 
      const res = await this.$http.post('login',this.formData)
      const {meta}= res.data
               if(meta.status===200){
                    const token = res.data.data.token
                     sessionStorage.setItem('token', token)
                   //提示框
                  this.$message.success(meta.msg)                   //跳转
                  this.$router.push({name:'home'})
              }else{
                //提示框
                   this.$message.error(meta.msg)
              }
            }
//       handleLogin(){
//           //获取表单数据
//           //发送请求
//           this.$http.post('login',this.formData)
//           .then((res)=>{
//               //const data = res.data
//               const {meta}= res.data
//               if(meta.status===200){
//                   // const token = data.data.token
//                   // sessionStorage.setItem('token', token)
//                   //提示框
//                   this.$message.success(meta.msg)
//                   //跳转
//                   this.$router.push({name:'home'})
//               }else{
//                 //提示框
//                   this.$message.error(meta.msg)
//               }
//           })

//       }
  }
 };
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-form .login-button {
  width: 100%;
}

</style>