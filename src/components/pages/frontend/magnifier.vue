<template>
  <!-- 限时特惠 -->
    <div class="col-md-12 sale-product xsth-product">
      <h2>限时特惠<a href="?r=view-product/top-list" class="goods-box-more">更多>></a></h2></h2>
      <div id="xsth-product-section">

        <div class="bxslider-wrapper" >
          <ul id="xsth-product-ul" class="bxslider " data-slides-phone="1" data-slides-tablet="2" data-slides-desktop="4" data-slide-margin="15">
            <li v-for="(item,index) in items" class='pro-list-li'>
              <div class="product-item">
                <div class="pi-img-wrapper">
                  <a href="#">
                    <img :src="item.goods_img" class="lazy img-responsive" :alt="item.goods_name">

                  </a>

                </div>



              </div>
              <div class="pro-mast-p">
                <a class='pro-mast-p-a1' href="#">
              {{item.goods_name}}

                </a>
                <a class='pro-mast-p-a2' style='display:none;' href="#">
                  <p>{{item.goods_name}}</p>
                  <p>￥{{item.goos_price}}</p>
                </a>
              </div>
            </li>

          </ul>
        </div>

      </div>





    </div>
</template>
<script>
  import 'jquery'
  import '../../../../static/js/bxslider/jquery.bxslider.js'
  export default {
    props: {
      infiniteLoop: {
        type: String,
        default: 'false'
      },

    },
    data () {
      return {
      /* 定义一个空数组数据items */
        items: []
      }
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
     // debugger;

      this.GetData();


    },
      mounted() {

    // debugger;
      //  console.log(4)

    },
    updated(){

      this.MouseFu("#xsth-product-ul .pro-list-li");
      this.initBxSlider("#xsth-product-ul");/////内容滑动插件
    },
      methods: {
     initBxSlider: function (obj) {
     // debugger;
//       $(obj).each(function(){
//       });
         var width = $(window).width();

         var slides=0;
         var slideMargin = parseInt($(obj).attr("data-slide-margin"));
         var slideContainerWidth = $(obj).closest('.bxslider-wrapper').width();
         //var slideWidth = 66;


         if (width <= 480) {
           slides = $(obj).attr("data-slides-phone");
         }
         else if (width > 480 && width <= 992) {
           slides = $(obj).attr("data-slides-tablet");
         }
         else {
           slides = $(obj).attr("data-slides-desktop");
         }

         var slideWidth = parseFloat(slideContainerWidth) / parseFloat(slides) ;
         slides = parseInt(slides);

         console.log($(obj));

        // debugger;

         var slider = $(obj).bxSlider({
           minSlides: slides,
           maxSlides: slides,
           slideWidth: slideWidth,
           slideMargin: slideMargin,
           moveSlides:5,
           responsive:true,
           infiniteLoop:this.infiniteLoop//无限循环
         });
         $(obj).data("bxslider", slider);

         //  }

      },
        ////////产品列表鼠标移动效果
      MouseFu: function (obj,callback) {
          $(obj).hover(function(){
            $(this).find(".pro-mast-p").stop(true,true);
            $(this).find(".pro-mast-p-a1").hide();
            $(this).find(".pro-mast-p-a2").show();
            $(this).find(".pro-mast-p").animate({"bottom":"0px"},"1000",function(){});

          },function(){
            $(this).find(".pro-mast-p").stop(true,true);
            $(this).find(".pro-mast-p-a1").show();
            $(this).find(".pro-mast-p-a2").hide();
            $(this).find(".pro-mast-p").animate({"bottom":"-215px"},"1000",function(){

            });
          })
        },
        GetData: function (obj,callback) {
          this.$http.get('/api/info').then(response =>{
            //  this.$http.get('/api/info').then(response => {
            // this.$http.get('../api/frontend/web/index.php?r=api-goods/get-goods').then(response => {
            this.items = response.body.data.Records; console.log( this.items)
        }, error => {
            console.log(error);
          });
        }
    }

  }

</script>
<style>
  @import '/static/js/bxslider/jquery.bxslider.css';


</style>