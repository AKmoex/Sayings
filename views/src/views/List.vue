<template>
  <div>
    <h1>列表</h1>
    <el-table
      :data="sayings.slice((cur_page - 1) * page_num, cur_page * page_num)"
      border
      style="width:100%"
    >
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
    <el-pagination
      background
      hide-on-single-page
      :total="sayings.length"
      :page-size="page_num"
      :current-page="cur_page"
      :page-sizes="[5, 10, 15, 20]"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="total,sizes,prev, pager, next"
      style="margin-top:1.5rem"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur_page: 1,
      page_num: 10,
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
      this.sayings = res.data;
    },

    async deleteSaying(val) {
      const res = await this.$http.delete(`/delete/${val._id}`);
      console.log(res);
    },
    handleCurrentChange(page) {
      this.cur_page = page;
    },

    handleSizeChange(size) {
      this.page_num = size;
    },
    dateFormatter(row, column, cellValue) {
      if (cellValue) {
        return cellValue.substring(0, 10);
      }
    }
  },
  mounted() {
    this.fecthSayings();
  }
};
</script>
