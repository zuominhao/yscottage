<template>
    <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
        <el-tab-pane label="早餐"> 
            <div v-for="breakfast in breakfasts" :key="breakfast" class="block">
            <span class="demonstration">{{ breakfast }}</span>
        </div>
        </el-tab-pane>
        
        <el-tab-pane label="中餐">
            <div v-for="lunch in lunchs" :key="lunch" class="block">
                <span class="demonstration">{{ lunch }}</span>
            </div>
        </el-tab-pane>
        
        <el-tab-pane label="晚餐">
            <div v-for="dinner in dinners" :key="dinner" class="block">
                <span class="demonstration">{{ dinner }}</span>
            </div>
        </el-tab-pane>

        <el-tab-pane label="宵夜">
            <div v-for="nightfat in nightfats" :key="nightfat" class="block">
                <span class="demonstration">{{ nightfat }}</span>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="js" setup>

import {ref} from 'vue'
const tabPosition = ref('left')

const breakfasts = ref(['1',])
const lunchs = ref(['1','2',])
const dinners = ref(['1','2','3',])
const nightfats = ref(['1','2','3','4',])

</script>

<style>

.el-tabs--left .el-tabs__content {
    height: 100%;
}

.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
