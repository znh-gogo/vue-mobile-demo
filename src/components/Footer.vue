<template>
    <div class="footer">
        <router-link class="nav-link" tag="div" to="/home">我的首页</router-link>
        <router-link class="nav-link" tag="div" to="/plan">计划管理</router-link>
        <router-link class="nav-link" tag="div" to="/mine">个人中心</router-link>
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
        div {
            text-align: center;
            line-height: 5rem;
            flex: 1;
            // cursor: pointer;
        }
    }
</style>
