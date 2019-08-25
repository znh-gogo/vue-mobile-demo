<template>
    <div style="width: 100%;height: 100vh;background-color: #fafafa;">
        <mt-header title="修改名称" style="background-color:#fafafa;color: #222222;font-size: 1.2rem;height:4rem">
            <router-link to="/mine/myinfo" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right" style="font-size:1.3rem;color:#222222" @click="change">
                完成
            </div>
        </mt-header>
        <mt-field placeholder="请输入名称" v-model="nickname"></mt-field>
    </div>
</template>

<script>
import api from '../../../api'
import { Toast } from 'mint-ui'
export default {
    data (){
        return{
            nickname:''
        }
    },
    methods: {
        change(){
            api.changeNickname({id:this.$route.query.id,nickname:this.nickname}).then((res)=>{
                Toast(res.message)
                this.$router.go(-1)
            })
        }
    },
    created (){
        this.nickname = this.$route.query.nickname
        // console.log(this.$route.query)
    }
}
</script>