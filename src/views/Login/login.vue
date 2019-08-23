<template>
    <div class="login-warp">
        <mt-field label="邮箱/电话" placeholder="请输入邮箱/电话" v-model="account"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
        <img src="" height="45px" width="100px">
        </mt-field>
        <div class="loginBtn">
            <mt-button type="primary" size="large" @click="$router.push({path:'/home',query:{account}})">登陆</mt-button>
        </div>
        <div class="d-flex jc-between px-2 py-3">
            <a @click="$router.push('/register')">还没有账号？去注册</a>
            <a>忘记密码</a>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            account:'',
            email:'',
            password:'',
            phone:'',
            captcha:''
        }
    }
}
</script>

<style lang="scss" scoped>
.login-warp{
    // padding: 1.2rem;
    background-color: #fff;
    height: 100%;
    .loginBtn{
        padding: 1rem;
    }
}
</style>
