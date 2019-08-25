<template>
    <div style="width: 100%;height: 100vh;background-color: #fafafa;">
        <mt-header title="修改个性签名" style="background-color:#fafafa;color: #222222;font-size: 1.2rem;height:4rem">
            <router-link to="/mine/myinfo" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right" style="font-size:1.3rem;color:#222222" @click="change">
                完成
            </div>
        </mt-header>
        <mt-field placeholder="请输入名称" v-model="description"></mt-field>
    </div>
</template>

<script>
import api from '../../../api'
import { Toast } from 'mint-ui'
export default {
    data (){
        return{
            description:''
        }
    },
    methods: {
        change(){
            api.changeDescription({id:this.$route.query.id,description:this.description}).then((res)=>{
                Toast(res.message)
                this.$router.go(-1)
            })
        }
    },
    created (){
        this.description = this.$route.query.description
        // console.log(this.$route.query)
    }
}
</script>