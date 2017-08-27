<template lang="html">
<div class="pro-section "  data-type="product" >


    <div class="main">
        <div class="container">
     <ul class="breadcrumb">
                <li><a href="?r=site/index">首页</a></li>
                <li><a href="?r=view-product/top-list">检测类型</a></li>
                <li class="active">香水、古龙水 QB/T 1858</li>

            </ul>

            <div id="pro_detail_cont">

            <div class=" margin-bottom-40">
<div id="product-pop-up">
   <div class="product-page product-pop-up">
   <div class="row">
               <div class="col-md-5 col-sm-5 col-xs-12">
               <div class="product-main-image" style="position: relative; overflow: hidden;">
                         <img src="http://mall.lccert.com/test/upload/goods_images/20170622/1498126288569942959.jpg" alt="香水、古龙水 QB/T 1858" class="img-responsive">
                      <img src="http://mall.lccert.com/test/upload/goods_images/20170622/1498126288569942959.jpg" class="zoomImg" style="position: absolute; top: 43.6013px; left: 159.402px; opacity: 0; width: 290px; height: 300px; border: none; max-width: none;">
                      </div>
                    </div>


                                  <div class="col-md-7 col-sm-7 col-xs-12">
                                  <h1 class="pd_title">香水、古龙水 QB/T 1858</h1>
                                   <h3 class="tc_title">产品属性</h3>
                                   <div class="specs row " id="specs_box">
                                 <p>
 <span class="checkbox_span"  data-spec_name="ww"  data-spec_id="2">
      <input   class="i-checks item_check_list" data-is_risk_item="55" data-item_risk_price="77" data-item_spec_price="77" value="66" type="checkbox"/><span class="oitem-name-span">fdfd</span></span>
                                                                    </p>
                                </div>
                      </div>


   </div>
</div>
</div>
</div>



  </div>
        </div>
        <div class="container">
<div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">

                   <div class="more_product_box">
                   <h3 class="tit_h3">更多服务</h3>
                       <div class="more_se_box" id="more_se_box">
<div class="product-item-more product-item">
             <div class="">
                 <a href="?r=view-product/detail&amp;gid=134&amp;category_id=81&amp;c_type=2">
                     <img src="http://mall.lccert.com/test/upload/goods_images/20170622/1498126288569942959.jpg" class="img-responsive" alt="">                                </a>                            </div>                            <h3><a href="?r=view-product/detail&amp;gid=134&amp;category_id=81&amp;c_type=2">花露水  QB/T 1858.1</a></h3>
       <div class="pi-price">￥800.00</div>                         </div>

                       </div>
                   </div>


            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <ul class="nav nav-tabs" id="myTab">
                    <li class="active"><a href="javascript:void" data-toggle="tab">用户须知</a></li>
<!--                    <li class=""><a href="#par" data-toggle="tab">参数</a></li>-->
                </ul>
                <div class="tab-content">
                jfkjdkjgkjfkjg
                </div>

            </div>

        </div>
        </div>
    </div>
</div>
</template>



<style lang="css"  scoped>
    @import '../../../../static/js/iCheck/custom.css';
</style>
<script>
    import 'jquery'
    import '../../../../static/js/iCheck/icheck.min.js'

    export default {

    created () {

        this.iCheckSet("#specs_box", function (e1) {





        }, function (e2) {


        })





    },
    updated(){

    },

    methods: {
        ///////iCheck插件
        iCheckSet: function (obj, callback1, callback2) {
           // console.log( $(obj + " .i-checks"));
            $(obj + " .i-checks").iCheck({checkboxClass: "icheckbox_square-green", radioClass: "iradio_square-green",})
            $(obj + " .i-checks").on('ifChecked', function (event) {
                //  var item_id=$(this).val();

                if (typeof callback1 == "function") {
                    callback1($(this));

                }

                //alert(event.type + ' callback');
            });
            $(obj + " .i-checks").on('ifUnchecked', function (event) {
                // var item_id=$(this).val();
                callback2($(this));

            });


        }
    }

}


</script>