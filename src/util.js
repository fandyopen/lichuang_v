
import 'jquery'
import '../static/js/iCheck/icheck.min.js'
import '../static/js/zoom/jquery.zoom.js'
const MyPlugin = {
    install(Vue, options) {
        ////////产品列表鼠标移动效果
        Vue.prototype.MouseFu= function (obj,callback) {

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
        //     ///////iCheck插件
        // Vue.prototype.iCheckSet= function (obj,callback) {
        //
        //
        //
        //         $(obj + " .i-checks").iCheck({checkboxClass: "icheckbox_square-green", radioClass: "iradio_square-green",})
        //         $(obj + " .i-checks").on('ifChecked', function (event) {
        //             //  var item_id=$(this).val();
        //
        //             if (typeof callback1 == "function") {
        //                 callback1($(this));
        //
        //             }
        //
        //             //alert(event.type + ' callback');
        //         });
        //         $(obj + " .i-checks").on('ifUnchecked', function (event) {
        //             // var item_id=$(this).val();
        //             callback2($(this));
        //
        //         });
        //     }
        Vue.prototype.initImageZoom= function (callback) {

                $('.product-main-image').zoom({url: $('.product-main-image img').attr('data-BigImgSrc')});

        }
    }
}
    export default MyPlugin;
