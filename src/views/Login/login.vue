<template>
    <div class="login-warp">
        <div class="login-top">
            Zz综合应用App
        </div>
        <mt-field label="账号" placeholder="请输入账号" v-model="model.account"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="model.password"></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="model.verify">
        <img :src="vetifyNum" height="45px" width="100px" @click="changeVerify">
        </mt-field>
        <div class="loginBtn">
            <mt-button type="primary" size="large" @click="handleLogin">登陆</mt-button>
        </div>
        <div class="d-flex jc-between px-2 py-3">
            <a @click="$router.push('/register')">还没有账号？去注册</a>
            <a>忘记密码</a>
        </div>
    </div>
</template>

<script>
import api from '../../api/index'
import { Toast } from 'mint-ui'
export default {
    data (){
        return {
            model:{},
            vetifyNum:''
        }
    },
    methods:{
        handleLogin(){
            api.login(this.model).then((res)=>{
                // console.log(res)
                if(res.user){
                window.sessionStorage.setItem('token',res.token)
                window.sessionStorage.setItem('id',(res.user._id))
                // this.$store.commit('GET_ACCOUNT',res.user)
                Toast(res.message)
                this.$router.push({path:'/home'})
                }
            })
            // this.$router.push({path:'/home',query:{account}})
        },
        changeVerify(){
            this.vetifyNum = 'http://localhost:3000/photoVerify?'+Math.random();
        }
    },
    mounted (){
        this.changeVerify()
    }
}
</script>

<style lang="scss" scoped>
.login-warp{
    // padding: 1.2rem;
    background-color: #fff;
    height: 100%;
    .login-top{
        width: 100%;
        height: 14rem;
        line-height: 14rem;
        text-align: center;
        font-size: 2rem;
    }
    .loginBtn{
        padding: 1rem;
    }
}
</style>
