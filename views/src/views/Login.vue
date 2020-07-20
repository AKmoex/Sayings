<template>
  <div>
    <el-card header="登录" class="loginCard">
      <el-form :model="user" @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item></el-form
      ></el-card
    >
  </div>
</template>
<style>
.loginCard {
  width: 30%;
  margin: 100px auto;
}
</style>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("/login", this.user);
      sessionStorage.token = res.data;
      this.$message({
        type: "success",
        message: "登陆成功"
      });
      this.$router.push("/admin");
    }
  }
};
</script>