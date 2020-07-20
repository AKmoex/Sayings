<template>
  <div>
    <h1>{{ id ? "更新" : "新增" }}</h1>
    <el-form label-width="100px" @submit.native.prevent="add" :model="model">
      <el-form-item label="一言">
        <el-col :span="12">
          <el-input type="textarea" :rows="4" v-model="model.saying"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="model.date"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          >>
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{
          id ? "更新" : "添加"
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        saying: "",
        date: new Date()
      }
    };
  },
  methods: {
    async add() {
      let res;
      if (this.id) {
        res = await this.$http.post(`/rest/add/${this.id}`, this.model);
        console.log(res);
      } else {
        res = await this.$http.post("/rest/add", this.model);
        console.log(res);
      }
    },
    async fetch() {
      const res = await this.$http.get(`/rest/add/${this.id}`);
      this.model.saying = res.data.saying;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
