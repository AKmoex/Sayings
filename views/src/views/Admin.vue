<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>一言</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/sayings/add">添加一言</el-menu-item>
            <el-menu-item index="/sayings/list">一言列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script></script>
