<script setup>
import AsideLeft from '../components/oscomponents/AsideLeft.vue'
import Aside2 from '../components/Aside2-2.vue'
import Header from '../components/oscomponents/Header.vue'
import Cook from '../components/cook/Cook.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header><Header/></el-header>
            <el-container>
                <el-aside width="100px"><AsideLeft/></el-aside>
<!--                <el-aside width="160px"><Aside2/></el-aside>-->
                <el-main ><Cook/></el-main>
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

