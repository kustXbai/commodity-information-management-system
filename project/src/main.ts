import { createApp } from "vue";
import App from "@/App.vue";
//引入element-plus 插件与样式。
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
//导入注册svg矢量图
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import gloablComponent from '@/components';
//引入全局样式。
import '@/styles/index.scss'
import router from './router'
import pinia from "./store";



//获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
//安装element-plus插件
app.use(ElementPlus);
//安装gloablComponent
app.use(gloablComponent);
//安装仓库
app.use(pinia);
//注册模板路由
app.use(router);
// console.log(import.meta.env); 获取开发环境变量。
//引入路由鉴权文件
import './permission';
//引入自定义指令文件
import {isHasButton} from '@/directive/has'
isHasButton(app);
//将应用挂载到挂载点上
app.mount("#app");
