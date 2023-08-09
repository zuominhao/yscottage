<template>
    <el-col>
      <el-menu default-active="2">
        <el-menu-item index="1">
          <span>One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>Two</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <span>Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "Aside1"
}
</script>

<style scoped>
.el-menu{
  border: 0!important;
}
</style>