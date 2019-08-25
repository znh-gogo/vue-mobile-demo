<template>
    <div style="width: 100%;height: 100vh;background-color: #fafafa;">
        <mt-header title="修改密码" style="background-color:#fafafa;color: #222222;font-size: 1.2rem;height:4rem">
            <router-link to="/mine/myinfo" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right" style="font-size:1.3rem;color:#222222" @click="change">
                完成
            </div>
        </mt-header>
        <mt-field label="账户名" v-model="account" readonly disableClear></mt-field>
        <mt-field placeholder="请输入原密码" type="password" v-model="oldpassword"></mt-field>
        <mt-field placeholder="请输入新密码" type="password" v-model="newpassword1"></mt-field>
        <mt-field placeholder="请再次输入新密码" type="password" v-model="newpassword2"></mt-field>
    </div>
</template>

<script>
import api from '../../../api'
import { Toast } from 'mint-ui'
export default {
    data (){
        return{
            oldpassword:'',
            newpassword1:'',
            newpassword2:'',
            account:''
        }
    },
    methods: {
        change(){
            if (this.newpassword1 !== this.newpassword2){
                Toast('输入的两次密码不一致')
                return
            }
            api.changePassword({id:this.$route.query.id,newpassword:this.newpassword1,oldpassword:this.oldpassword}).then((res)=>{
                Toast(res.message)
                this.$router.go(-1)
            })
        }
    },
    created (){
        this.account = this.$route.query.account
        // console.log(this.$route.query)
    }
}
</script>