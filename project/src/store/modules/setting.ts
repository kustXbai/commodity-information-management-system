//小仓库：layout 组件相关配置仓库
import { defineStore } from 'pinia';

let userLayOutSettingStore = defineStore('SettingStore',{
    state:()=>{
        return{
            fold:false,//用户控制菜单折叠还是收起控制
            refresh:false,//仓库这个属性用于控制刷新效果
        }
    }
})

export default userLayOutSettingStore;