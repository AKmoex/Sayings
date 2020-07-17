<template>
  <div>
    <h1>添加</h1>
    <el-form label-width="100px" @submit.native.prevent="add" :model="model">
      <el-form-item label="一言">
        <el-col :span="12">
          <el-input type="textarea" :rows="4" v-model="model.saying"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        saying: "",
      },
    };
  },
  methods: {
    add() {
      console.log("test");
    },
  },
};
</script>
