<template>
    <transition name="moveR">
        <!-- <div class="slide-right"> -->
        <div style="width: 100%;height: 100vh;background-color: #eeeeee;">
            <mt-header title="个人信息" style="background-color:#fafafa;color: #222222;font-size: 1.2rem;height:4rem">
                <router-link to="/mine" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!--            <mt-button icon="more" slot="right"></mt-button>-->
            </mt-header>
            <div @click="$router.push({path:'/mine/myinfo/changeheadimg',query:{id:accountId,headImg:accountInfo.headImg}})">
            <mt-cell title="头像" is-link style="padding: 0.8rem 0;border-bottom: 1px solid #eee">
                <img :src="accountInfo.headImg" alt="" style="width: 3.3rem;height: 3.3rem;">
            </mt-cell>
            </div>
            <div @click="$router.push({path:'/mine/myinfo/changenickname',query:{id:accountId,nickname:accountInfo.nickname}})">
            <mt-cell title="名字" is-link style="border-bottom: 1px solid #eee">
                <span>{{accountInfo.nickname}}</span>
            </mt-cell>
            </div>
            <mt-cell title="账号" style="border-bottom: 1px solid #eee">
                <span>{{accountInfo.account}}</span>
            </mt-cell>
            <div @click="$router.push({path:'/mine/myinfo/changeemail',query:{id:accountId,email:accountInfo.email}})">
            <mt-cell title="邮箱" is-link style="border-bottom: 1px solid #eee">
                <span>{{accountInfo.email}}</span>
            </mt-cell>
            </div>
            <div @click="$router.push({path:'/mine/myinfo/changedescription',query:{id:accountId,description:accountInfo.description}})">
            <mt-cell title="个性签名" is-link>
                 <span style="width:12rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{accountInfo.description}}</span>
            </mt-cell>
            </div>
            <div @click="$router.push({path:'/mine/myinfo/changepassword',query:{id:accountId,account:accountInfo.account}})">
            <mt-cell title="修改密码" is-link style="margin: 1rem 0;">
                <!--            <span>123456@qq.com</span>-->
            </mt-cell>
            </div>
        </div>
        <!-- </div> -->
    </transition>
</template>

<script>
import api from '../../../api';
    export default {
        name: "myinfo",
        data (){
            return {
                accountId:'',
                accountInfo: ''
            }
        },
         methods:{
            getUser(){
                    api.showAccount(this.accountId,null).then((res)=>{
                        this.accountInfo = res
                    })
                },
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .moveR-enter-active,  .moveR-leave-active {
        transition: all 0.8s linear;
        transform: translateX(100%);
    }
    .moveR-enter,  .moveR-leave ,.moveR-leave-to{
        transition: all 0.3s linear;
        transform: translateX(-100%);
    }


        .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }
    /*.moveR-leave-to{*/
    /*    transform: translateX(100%);*/
    /*}*/
    .slide-right{
        animation: .5 sliderMove;
    }
    @keyframes sliderMove{
        0%{
            transform: translateX(100%);
            // opacity: 0;
        }
        100%{
            transform: translateX(0);
            // opacity: 100%;
        }
    }
    @-webkit-keyframes sliderMove{
        0%{
            transform: translateX(100%);
            // opacity: 0;
        }
        100%{
            transform: translateX(0);
            // opacity: 100%;
        }
    }
</style>
