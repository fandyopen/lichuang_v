<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">

      <div v-for="item in ads" class="swiper-slide" >

        <img  :data-src="item.img"  :src="item.img"  :alt="item.img">
      </div>

    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>
<script>
  import '../../../../static/js/swiper/swiper.js'
  export default {
    props: {
      swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 1000
      },
      paginationType: {
        type: String,
        default: 'bullets'
      }
    },
    data () {
      return {
      /* 定义一个空数组数据items */
        ads: []
      }
    },
    created () {
      //debugger;

      //拿到查询字段，商品的id后进行http请求
      var id = this.id;
//      this.$http.get('../goods.json').then(response => {
      this.$http.get('/api/info').then(response => {
      this.ads = response.body.data.ads;
    }, error => {
        console.log(error);
      });


      this.loading = false;
    },
      mounted() {
    // debugger;

    },
       updated(){

         var That = this;
         new Swiper('.'+That.swipeid, {
           //循环
           loop: That.loop,
           //分页器
           pagination: '.swiper-pagination',
           //分页类型
           paginationType: That.paginationType, //fraction,progress,bullets
           //自动播放
           autoplay: That.autoplay,
           //方向
           direction: That.direction,
           speed:1000,
           //特效
           effect: That.effect, //slide,fade,coverflow,cube

         })
    }
  }

</script>
<style>
  @import '/static/js/swiper/swiper-3.4.2.min.css';
  .swiper-pagination-bullet-active {
    background: #fff;
  }

</style>