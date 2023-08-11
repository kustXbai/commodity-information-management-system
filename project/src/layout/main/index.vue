<template>
    <!-- 、路由组件出口的位置 -->
        <router-view v-slot="{Component}">
            <transition name="fade">
                <component :is="Component" v-if="flag"/>
            </transition>
        </router-view>
</template>
  
<script setup lang="ts">
import {watch,ref,nextTick} from 'vue';
//获取骨架的小仓库
import userLayOutSettingStore from '@/store/modules/setting';
let layoutSettingStore = userLayOutSettingStore();

//控制当前组件是否销毁重建
let flag = ref(true);

//监听仓库内部数据是否发生变化，如果发生变化，说明用户点击过刷新按钮。
watch(()=>layoutSettingStore.refresh,()=>{
    //点击按钮刷新按钮：路由组件销毁
    flag.value = false;
    nextTick(()=>{
        flag.value = true;
    })
})

</script>
<script lang="ts">
export default{
    name:"main"
}
</script>
  
<style scoped>
.fade-enter-from{
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active{
    transition: all .4s;
}

.fade-enter-to{
    opacity: 1;
    transform: scale(1);
}
</style>