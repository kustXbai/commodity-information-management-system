<template>
    <div class="layout_container">
        <!-- 左侧菜单 通过LayOutSettingStore.fold?true:false 判断三个区域是否是折叠的效果， -->
        <!-- 当fold为true的时候，就代表，是折叠，然后该区域的宽度会随之发生变化。 -->
        <div class="layout_slider" >
            <logo></logo>
            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <el-menu :collapse="LayOutSettingStore.fold?true:false" :default-active="$route.path" background-color="#001529" text-color="white" active-text-color="yellow">
                    <!-- 根据路由动态生成菜单 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{fold:LayOutSettingStore.fold?true:false}">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{fold:LayOutSettingStore.fold?true:false}">
            <!-- <router-view></router-view> -->
            <Main></Main>
        </div>
    </div>
</template>
  
<script setup lang="ts">
//获取路由对象 useRoute返回当前的路由地址。相当于在模板中使用 $route。useRouter返回路由器实例。相当于在模板中使用 $router。
import {useRoute}  from 'vue-router';
//引入左侧菜单logo子组件
import logo from './logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//右侧内容展示区域
import Main from './main/index.vue'
//引入顶部tabbar组件
import Tabbar from './tabbar/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user';
import useLayOutSettingStore from '@/store/modules/setting';
let userStore =useUserStore()
//获取layout配置仓库
let LayOutSettingStore = useLayOutSettingStore();

//获取路由  对象
let $route = useRoute(); 

</script>
<script lang="ts">
export default{
    name:"layout"
}
</script>
  
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        // background-color: blue;
        transition:all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100% - $base-menu-logo-height);
            .el-menu{
                border-right: none;
            }
        }
        &.fold{
        width: $base-menu-min-width; 
    }
    }


    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        background-color: white;
        transition:all 0.3s;
        &.fold{
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
    }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        // background-color: yellowgreen;
        left: $base-menu-width ;
        top: $base-tabbar-height ;
        padding: 20px;
        overflow: auto;
        transition:all 0.3s;
        &.fold{
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
        }
    }
}</style>