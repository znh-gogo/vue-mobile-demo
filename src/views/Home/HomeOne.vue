<template>
  <div class="home">

    <swiper :options="swiperOption">
      <swiper-slide >
        <img class="w-100" style="height:180px" src="../../assets/p1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" style="height:180px" src="../../assets/p2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" style="height:180px" src="../../assets/p3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
      swiperOption:{
        pagination:{
          el:".pagination-home"
        }
      }
    }
  },
  mounted (){
    // console.log(this.$route.query)
  }

}
</script>

<style lang="scss" scoped>
.pagination-home{
}
</style>

