<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <h1 style="font-size: 24px;float: left;margin-left: 20px;">LOGO</h1>
        </el-col>
        <el-col :span="6">
            <h1 style="font-size: 24px;float: left;margin-left: 20px;">标题</h1>
        </el-col>
        <el-col :span="6">
            <h1 style="font-size: 24px;float: right;">用户名：{{ userName }}</h1>
        </el-col>
        <el-col :span="6">
            <h1 style="font-size: 24px;float: right;margin-right: 60px;">userId：{{ userId }}</h1>
        </el-col>

    </el-row>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '',
            userId: localStorage.getItem('currentUserId'),
            userName: localStorage.getItem('currentUserName'),
            Token: localStorage.getItem('localJwt')
        }
    },
}
</script>

<style scoped>

</style>