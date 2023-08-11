<template>
    <div class="tabbar">
        <!-- 顶部左侧 -->
        <div class="tabbar_left">
            <Breadcubmb></Breadcubmb>
        </div>
        <!-- 顶部右侧 -->
        <div class="tabbar_right">
            <Setting/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Breadcubmb from './breadcubmb/index.vue';
import Setting from './setting/index.vue';
</script>
<script lang="ts">
export default{
    name:"tabbar"
}
</script>
  
<style scoped>
.tabbar{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .tabbar_left{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .tabbar_right{
        display: flex;
        align-items: center;
    }
}
</style>