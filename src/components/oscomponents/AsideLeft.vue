<template>
    <el-col>
        <el-menu default-active="2">
            <el-menu-item index="1">
                <router-link to="/">聊天</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/cook">做菜</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <span>游戏</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span>视频</span>
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
.el-menu {
    border: 0 !important;
}
.router-link-active:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: green;
}


</style>