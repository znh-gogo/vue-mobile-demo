<template>
    <div style="height:100%">
        <router-view></router-view>
        <div class="footer">
        <router-link class="nav-link" tag="div" to="/home"><div :class="{'current': $route.path === '/home/one'}">我的首页</div></router-link>
        <router-link class="nav-link" tag="div" to="/plan"><div :class="{'current': $route.path === '/plan'}">计划管理</div></router-link>
        <router-link class="nav-link" tag="div" to="/mine"><div :class="{'current': $route.path === '/mine'}">个人中心</div></router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .footer{
        height: 5rem;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #ccc; 
        display: flex;
        background-color: #fff;
        div {
            text-align: center;
            line-height: 5rem;
            flex: 1;
            // cursor: pointer;
        }
    }
    .current {
        color: #3385ff;
    }
</style>
