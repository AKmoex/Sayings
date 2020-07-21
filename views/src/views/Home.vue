h<template>
  <div class="home">
    om
    <div class="info">
      <img
        src="https://i.loli.net/2020/07/21/AHNdSXEf68s5Coi.jpg"
        class="avatar"
      />
      <h2>Hello</h2>
    </div>
    <div class="saying">
      <div class="left">
        『
      </div>
      <div class="center">遥知不是雪，为有暗香来</div>
      <div class="right">』</div>
    </div>
  </div>
</template>
<style>
body {
  background: #ebedee;
}
.home {
  width: 550px;
  height: 200px;
  background: #fff;
  margin: 200px auto;
  border-radius: 15px;
}
.info {
  width: 180px;
  height: 200px;
  color: #fff;
  float: left;
  background: rgba(0, 0, 0, 0.6)
    url(https://i.loli.net/2020/07/21/A3qMfCoZLYjstIO.jpg);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  text-align: center;
  border-radius: 15px 0 0 15px;
}
.saying {
  width: 370px;
  height: 200px;
  color: #7c8891;
  float: left;
}
.avatar_wall {
  width: 120px;
  height: 120px;
  background: purple;
  margin: 35px auto;
}
.avatar {
  widows: 100px;
  height: 100px;
  margin: 25px 40px 0 40px;
  border-radius: 50px;
}
.left {
  font-size: 25px;
  margin-top: 30px;
}
.center {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.right {
  margin-top: 20px;
  font-size: 25px;
  text-align: right;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    async fetch() {
      await this.$http.get("/saying");
    }
  },
  created() {
    this.fetch();
  }
};
</script>