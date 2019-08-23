<template>
    <transition name="fade">
        <div style="width: 100%;height: 100vh;background-color: #eeeeee;">
            <mt-header title="个人信息" style="background-color:#fafafa;color: #222222;font-size: 1.2rem">
                <router-link to="/mine" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <!--            <mt-button icon="more" slot="right"></mt-button>-->
            </mt-header>
            <mt-cell title="头像" is-link style="padding: 0.8rem 0;border-bottom: 1px solid #eee">
                <img src="../../../assets/p2.jpg" alt="" style="width: 3.3rem;height: 3.3rem;">
            </mt-cell>
            <mt-cell title="名字" is-link style="border-bottom: 1px solid #eee">
                <span>无尽电刀</span>
            </mt-cell>
            <mt-cell title="账号" style="border-bottom: 1px solid #eee">
                <span>aa12345</span>
            </mt-cell>
            <mt-cell title="邮箱" is-link style="border-bottom: 1px solid #eee">
                <span>123456@qq.com</span>
            </mt-cell>
            <mt-cell title="个性签名" is-link>
                <!--            <span>123456@qq.com</span>-->
            </mt-cell>
            <mt-cell title="修改密码" is-link style="margin: 1rem 0;">
                <!--            <span>123456@qq.com</span>-->
            </mt-cell>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "myinfo",
        data (){
            return {
                show: true
            }
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
        transition: all 0.3s linear;
        transform: translateX(100%);
    }
    .moveR-enter,  .moveR-leave ,.moveR-leave-to{
        transform: translateX(0);
    }
    /*.moveR-leave-to{*/
    /*    transform: translateX(100%);*/
    /*}*/
    .slide-right{
        animation: .5 sliderMove;
    }
    @keyframes sliderMove{
        0%{
            /*transform: translateX(100%);*/
            opacity: 0;
        }
        100%{
            /*transform: translateX(0);*/
            opacity: 100%;
        }
    }
    @-webkit-keyframes sliderMove{
        0%{
            /*transform: translateX(100%);*/
            opacity: 0;
        }
        100%{
            /*transform: translateX(0);*/
            opacity: 100%;
        }
    }
</style>
