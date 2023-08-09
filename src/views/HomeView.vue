<script setup>
import Aside1 from '../components/Aside1.vue'
import Aside2 from '../components/Aside2.vue'
import Aside3 from '../components/Aside3.vue'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>

      <el-header><Header/></el-header>

      <el-container>
        <el-aside width="100px"><Aside1/></el-aside>
        <el-aside width="160px"><Aside2/></el-aside>
        <el-main ><Main/></el-main>
        <el-aside width="260px"><Aside3/></el-aside>
      </el-container>

    </el-container>
  </div>
</template>

<style>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
body{
  margin: 0;
}
.el-header{
  --el-header-padding: 0!important;
}
.el-main{
  --el-main-padding: 0!important;
}
</style>

