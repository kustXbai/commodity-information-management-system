<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <!-- //登录的表单 -->
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到商品信息管理系统</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default"
                            @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

        </el-row>
    </div>
</template>
  
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter,useRoute} from 'vue-router';
import { ElNotification } from 'element-plus';
//引入获取当前时间的函数
import { getTime } from '@/utils/time'
//引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
let useStore = useUserStore();
//获取el-form组件
let loginForms = ref();
//获取路由器
let $router = useRouter();
//获取路由对象
let $route = useRoute();
//定义变量控制按钮加载效果
let loading = ref(false)

//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: 'atguigu123' })
//登录按钮回调
const login = async () => {
    //保证全部表单校验通过后在发送请求
    await loginForms.value.validate();
    //点击登录按钮以后干什么？
    loading.value = true;

    try {
        //保证登录成功
        await useStore.userLogin(loginForm);
        //登陆成功跳转到数据首页。
        //判断登录的时候，路由路径当中是否有query参数，如果有就往query参数跳转，没有就跳转至首页。
        let redirect:any = $route.query.redirect;
        //可以看出跳转的话用的是router对象
        $router.push({path:redirect||'/'});
        //登陆成功提示信息
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `HI,${getTime()}好`
        })
        //登录成功加载效果消失
        loading.value = false;
    } catch (error) {
        //登录失败加载效果消失
        loading.value = false;
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }

}
const validatorUsername = (rule: any, value: any, callback: any) => {
    if (value.length >= 5) {
        callback()
    } else {
        callback(new Error('账号长度至少是五位'))
    // console.log(rule)

    }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
    // rule：校验规则对象
    // value：表单元素文本内容
    // 函数：如果符合条件callback放行
    // 如果不符合条件callback方法，注入错误提示信息。
    if (value.length >= 6) {
        callback()
    } else {
        callback(new Error('密码长度至少是六位'))
    }
    // console.log(rule)
}
//定义表单校验需要配置对象   校验用户名和密码应该满足的规则
const rules = {
    //规则对象属性；
    // requierd,代表这个字段是务必要校验的
    // min：文本的长度最少是多少位
    // max：文本的长速最多是多少位
    //message ： 错误的提示信息
    //trigger ： 触发校验表单的时机 change：文本发生变化的时候触发校验，blur：失去焦点的时候触发校验规则。
    username: [
        // {required:true,min:5,max:10,message:'账号长度至少6位,至多10位',trigger:'change'}
        {trigger:'change',validator:validatorUsername}
    ],
    password: [
        // {required:true,min:6,max:15,message:'密码长度至少6位,至多15位',trigger:'change'}
        {trigger:'change',validator:validatorPassword}
    ]
}

</script>
  
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/R-C.jpg') no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
        color: white;
        font-size: 40px;
    }

    h2 {
        font-size: 20px;
        color: white;
        margin: 20px 0px;
    }

    .login_btn {
        width: 100%;
    }
}</style>