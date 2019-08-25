<template>
    <div>
        <div class="login-top">
            Zz综合应用App
        </div>
        <mt-field label="账户名" placeholder="请输入账户名" v-model="model.account"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="model.email"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="model.telephone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="model.password"></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="model.verify">
        <img :src="veritifyNum" height="45px" width="100px" @click="changeVerify">
        </mt-field>
        <!-- <mt-field label="验证码" placeholder="请输入邮箱验证码" v-model="captcha">
        <mt-button type="primary" v-show="sendAuthCode" plain @click="getAuthCode">发送验证码</mt-button>
        <span v-show="!sendAuthCode" style="font-size:13px；"> <span class="auth_text_blue" style="color: #1296db;">{{auth_time}} </span>秒后重新发送验证码</span>
        </mt-field> -->
        <div class="loginBtn">
            <mt-button  type="primary" size="large" @click="register">注册</mt-button>
        </div>
        <div style="text-align:right;padding-right:10px"><a @click="$router.push('/login')">已有账号，返回登陆</a></div>
    </div>
</template>

<script>
import api from '../../api/index'
import { Toast } from 'mint-ui'
export default {
    data (){
        return{
            model:{},
            sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
            auth_time: 0, /*倒计时 计数器*/
            veritifyNum:''
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
        },
        changeVerify(){
            this.veritifyNum = 'http://localhost:3000/photoVerify?'+Math.random();
        },
        register(){
            if(this.model.account===undefined||this.model.email===undefined||this.model.telephone===undefined||
            this.model.password===undefined||this.model.verify===undefined){
                Toast('请输入完整信息')
                return
            } else
            api.register(this.model).then((res)=>{
                // console.log(res)
                Toast(res.message)
                this.$router.push('/login')
            })
        }

    },
    mounted (){
        this.changeVerify()
    }
}
</script>

<style scoped>
    .loginBtn{
        padding: 1rem;
    }
    .mint-field .mint-cell-title {
    width: 70px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}
    .login-top{
        width: 100%;
        height: 14rem;
        line-height: 14rem;
        text-align: center;
        font-size: 2rem;
    }
</style>
