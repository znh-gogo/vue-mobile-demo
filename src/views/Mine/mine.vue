<template>
    <div style="width: 100%;height: 100vh;background-color: #eeeeee;">
        <div class="head">
            <div class="head-detail" @click="$router.push('/mine/myinfo')">
                <img :src="accountInfo.headImg" alt="">
                <div style="display: flex;;flex-direction: column;justify-content: space-between;width: 100%;">
                    <div style="font-weight: 700;font-size: 1.8rem;margin-top: 0.5rem">{{this.accountInfo.nickname}}</div>
                    <div style="display: flex;margin-bottom: 0.2rem; color: #aaa;font-size: 1.4rem;justify-content: space-between;width: 100%;">
                        <div style="vertical-align: middle;display: inline-block;line-height: 2rem">账号：{{accountInfo.account}}</div>
                        <img src="../../assets/left.png" alt="" style="width: 1.2rem;height: 1.2rem;margin-right: 0;margin-top: 0.5rem">
                    </div>
                </div>
            </div>
        </div>
        <mt-cell title="我的支付" style="margin: 1rem 0;" is-link>
<!--            <img src="../../assets/left.png" alt="" style="width: 1.8rem;height: 1.8rem;margin-right: 0;vertical-align: middle;display: inline-block">-->
            <img slot="icon" src="../../assets/pay.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的收藏" style="border-bottom: 1px solid #eee" is-link>
<!--            <img src="../../assets/left.png" alt="" style="width: 1.8rem;height: 1.8rem;margin-right: 0;vertical-align: middle;display: inline-block">-->
            <img slot="icon" src="../../assets/box.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的购物车" style="border-bottom: 1px solid #eee" is-link>
<!--            <img src="../../assets/left.png" alt="" style="width: 1.8rem;height: 1.8rem;margin-right: 0;vertical-align: middle;display: inline-block">-->
            <img slot="icon" src="../../assets/shopcar1.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的反馈" style="" is-link>
<!--            <img src="../../assets/left.png" alt="" style="width: 1.8rem;height: 1.8rem;margin-right: 0;vertical-align: middle;display: inline-block">-->
            <img slot="icon" src="../../assets/feedback.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的设置" style="margin: 1rem 0;" is-link>
<!--            <img src="../../assets/left.png" alt="" style="width: 1.8rem;height: 1.8rem;margin-right: 0;vertical-align: middle;display: inline-block">-->
            <img slot="icon" src="../../assets/setting.png" width="24" height="24">
        </mt-cell>
        <div style="width: 100%;text-align: center;margin-top: 2rem;">
            <mt-button type="primary" @click="logout" style="width: 90%;">退出登陆</mt-button>
        </div>
    </div>
</template>

<script>
import api from '../../api'
export default {
    data(){
        return{
            accountId:'',
            accountInfo:''
        }
    },
    methods:{
        getUser(){
            api.showAccount(this.accountId,null).then((res)=>{
                this.accountInfo = res
            })
        },
        logout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    },
    mounted (){
        this.getUser()
  },
  created(){
    this.accountId = window.sessionStorage.getItem('id')
  }
}
</script>

<style lang="scss" scoped>
    .head{
        background-color: #fff;
        padding: 3rem 1.1rem;
        .head-detail{
            display: flex;
            img {
                width: 6rem;
                height: 5rem;
                margin-right: 2rem;
            }
        }
    }


</style>
