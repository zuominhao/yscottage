<template>
    <el-row>
        <el-col>
            <el-menu default-active="2">
                <el-menu-item index="1">
                    <router-link to="/dinner">早餐</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <span>中餐</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <span>晚餐</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <span>宵夜</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Aside2"
}
</script>

<style scoped>
.el-menu {
    border: 0 !important;
}
</style>