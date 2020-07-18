<template>
  <div>
    <h1>列表</h1>
    <el-table :data="sayings" border style="width:100%">
      <el-table-column
        prop="date"
        label="日期"
        width="140"
        align="center"
        :formatter="dateFormatter"
      >
      </el-table-column>
      <el-table-column prop="saying" label="一言" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="deleteSaying(scope.row)"
            size="small"
            >修改</el-button
          >
          <el-button type="danger" @click="deleteSaying(scope.row)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sayings: [
        {
          date: "",
          saying: ""
        }
      ]
    };
  },

  methods: {
    async fecthSayings() {
      const res = await this.$http.get("/list");
      console.log(res);
      this.sayings = res.data;
    },
    dateFormatter(row, column, cellValue) {
      if (cellValue) {
        return cellValue.substring(0, 10);
      }
    }
  },
  created() {
    this.fecthSayings();
  }
};
</script>
