<template lang="html">

<div class="center-sec">
  <div class="page-slider margin-bottom-35">
    <!--LayerSlider begin-->
    <m-swipe swipeid="swipe01" :autoplay="3000" effect="cube"> </m-swipe>


    <!--LayerSlider end-->
  </div>

<div class="container">
  <!-- 服务项目 -->
  <div class="row  margin-bottom-40">

    <ul class="top-type_ul">

      <li v-for="aa in itemsAds" class="col-md-3 col-md-3 col-sm-12 col-xs-12"><a :title=aa.title  :href=aa.img class="top-type_a "><img :src=aa.img ><p class="adv-mast-p">{{aa.title}}</p></a></li>

    </ul>


  </div>
  <!-- 限时特惠 -->
  <div class="row  margin-bottom-40">
    <!--<m-slider :mSliderData="itemSilde"> </m-slider>-->
    <m-slider infiniteLoop="true"> </m-slider>
  </div>

</div>
  </div>
</template>
<script>

import mSwipe from './swipe'
import mSlider from './slider.vue'

var path = require('path');
export default {

//  props: ['price', 'title', 'img']   /*  props是子组件获取父组件数据用的 */
  components: {
    mSwipe,
    mSlider
  },

  data () {
    return {
  /* 定义一个空数组数据items */
      itemsAds: []
    }

  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
    //debugger;

   // console.log(this)

    //拿到查询字段，商品的id后进行http请求
 // this.$http.get('../goods.json').then(response => {
   this.$http.get('/api/info').then(response => {
     this.itemsAds = response.body.data.smallAds;
//    this.itemSilde = response.body.data.Records;
  }, error => {
      console.log(error);
    });
   // console.log(this.itemSilde)
  },
  mounted(){

  //  console.log(2)
    //debugger;
   // console.log(5)
  },
  updated(){
    // console.log(this.itemSilde)

    $(".top-type_ul li").hover(function(){
      $(this).find(".top-type_a .adv-mast-p").hide();
    },function(){
      $(this).find(".top-type_a .adv-mast-p").show();
    })
  }


}
</script>

<style lang="css"  scoped>

  /*分类*/
  .top-type_ul{ width: 100%;  overflow: hidden;}
  .top-type_ul li{  text-align: center;border-radius: 5px; margin-bottom: 2px; }
  .top-type_ul li img{ width: 100%;border-radius: 5px;}
  .top-type_ul li a{ display: block; width: 100%; margin: 0 auto; position: relative; color: #fff;}
  .top-type_ul li a .adv-mast-p{ font-size: 18px; position: absolute; background: #000000; width: 100%; top: 0; left: 0;
    height: 100%; filter:alpha(opacity=70);opacity: 0.7;border-radius: 5px;padding: 20% 0; }
  .top-type_ul li:hover{}
  .top-type_ul li a:hover{ }
  .top-type_ul li.active{}
  #top_type_show_ul .product-item h3 a{ text-align: center; display: block;}
  #top_type_show_ul .pi-price{    color: #e84d1c;  font: 18px '微软雅黑';  float: none; text-align: center;  }
  #top_type_show_ul .product-item h3{  padding-bottom: 0; margin-bottom: 0; }

  .xsth-product h2{ background: #132c4b; padding: 15px 10px; color: #fff; text-align: center;}
  .xsth-product h2 .goods-box-more{ position: absolute; right: 20px;}
</style>
