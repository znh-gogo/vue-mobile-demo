<template>
    <div style="width: 100%;height: 100vh;background-color: #fafafa;">
        <mt-header title="修改邮箱" style="background-color:#fafafa;color: #222222;font-size: 1.2rem;height:4rem">
            <router-link to="/mine/myinfo" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div slot="right" style="font-size:1.3rem;color:#222222" @click="change">
                完成
            </div>
        </mt-header>
        <div style="background:#fff;text-align:center;padding-bottom:1rem">
            <img :src="headImg" alt="" style="width:15rem;height:15rem"><br>
            <label for="file" style="display:inline-block;font-size:1.5rem;width:10rem;height:3rem;line-height:3rem;
            background-color:#26a2ff;color:#ecf6fb;border-radius:1rem">更改头像</label>
            <input type="file" name="file" id="file" @change="getfile" style="display:none">
        </div>
    </div>
</template>

<script>
import api from '../../../api'
import { Toast } from 'mint-ui'
export default {
    data (){
        return{
            headImg:''
        }
    },
    methods: {
        change(){
            api.changeHeadimg({id:this.$route.query.id,headImg:this.headImg}).then((res)=>{
                Toast(res.message)
                this.$router.go(-1)
            })
        },
        getfile(e){
            // console.log(e.target.files[0])
            let form = new FormData()
            form.append('file',e.target.files[0])
            api.uploadImg(form).then((res)=>{
                this.headImg = res.url
            })

        }
    },
    created (){
        this.headImg = this.$route.query.headImg
        // console.log(this.$route.query)
    }
}
</script>