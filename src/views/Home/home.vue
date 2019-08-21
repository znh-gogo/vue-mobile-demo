<template>
    <div>
        <div class="bg-black text-white py-2 px-3 d-flex ai-center">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <img src="../../assets/123.png" height="30" alt="">
        <div class="px-2 flex-1">
            <div class="text-white">展示平台</div>
            <div class="text-grey-1 fs-xss">展示成就更多</div>
        </div>
        <button type="button" class="btn bg-primary">欢迎参观</button>
        </div>
        <div class=" bg-primary pt-3 pb-2">
            <div class="nav d-flex text-white jc-around pb-1">
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/home/one">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/about">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
                </div>
            </div> 
        </div>
        <router-view></router-view>
    </div>
</template>
