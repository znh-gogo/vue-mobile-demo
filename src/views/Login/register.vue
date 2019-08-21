<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
        <mt-button type="primary" v-show="sendAuthCode" plain @click="getAuthCode">发送验证码</mt-button>
        <span v-show="!sendAuthCode" style="font-size:13px"> <span class="auth_text_blue" style="color: #1296db;">{{auth_time}} </span> 秒后重新发送验证码</span>
        </mt-field>
        <div class="loginBtn">
            <mt-button  type="primary" size="large">注册</mt-button>
        </div>
        <div style="text-align:right;padding-right:10px"><a @click="$router.push('/login')">已有账号，返回登陆</a></div>
    </div>
</template>

<script>
export default {
    data (){
        return{
            username:'',
            email:'',
            password:'',
            phone:'',
            captcha:'',
            sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
            auth_time: 0, /*倒计时 计数器*/
        }
    },
    methods :{
        getAuthCode(){
            this.sendAuthCode = false;
            this.auth_time = 10;
            let auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                this.sendAuthCode = true;
                clearInterval(auth_timetimer);
                }
            }, 1000);
        }

    }
}
</script>

<style scoped>
    .loginBtn{
        padding: 1rem;
    }
</style>
