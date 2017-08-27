<template lang="html">

<div class="center-sec">

<div class="container">

<div class="pro-section" data-type="product">

    <div class="main">
        <div class="container">


            <div class="row ">


                <div class="col-md-12 col-sm-12">
                    <div class=" list-view-sorting clearfix">

                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12   select_con_box">
                            <div class="pull-left ">
                                <input type="text" name="order_express_number" id="s_search_input"
                                       placeholder="执行标准" style="margin-right: 1px;"
                                       class="com_left  form-control w40">

                            </div>
                            <div class="pull-left ">
                                <a id="submit-key-i" style="padding: 0 15px;" class="com_left  btn-com"><i class="fa fa-search"></i>查询</a>
                            </div>



                        </div>
                            <div class="col-lg-8  col-md-8 col-sm-12 col-xs-12 select_con_box">
                                <div class=" pull-left ">
                                    <label class="control-label">数量:</label>
                                    <select class="form-control input-sm" id="pageSize">
                                        <option value="9" selected="selected">9</option>
                                        <option value="15">15</option>
                                        <option value="21">21</option>
                                        <option value="21">27</option>
                                    </select>
                                </div>

                                <div class=" pull-left ">
                                    <label class="control-label">排序:</label>
                                    <select class="form-control input-sm" id="sort">
                                        <option value="goods_id  desc" selected="selected">默认最新</option>
                                        <option value="goos_price  desc">商品价格高到低</option>
                                        <option value="goos_price  asc">商品价格低到高</option>
                                        <option value="update_time  desc">最新上架</option>
                                    </select>
                                </div>
                            </div>


                    </div>
                    <div id="pro_list_right">
  <div class=" margin-bottom-40">



                        <div   class="row product-list">

                            <div v-for="(item,index) in items" class="col-md-3 col-sm-6 col-xs-12 list-pro-div">
                                <div class="product-item">

                                    <div class="pi-img-wrapper">

                                      <router-link  to="/pro-detail">
                                        <img :src="item.goods_img"  class="img-responsive" :alt="item.goods_name">
                                     </router-link>

                                    </div>

                                  <div class="pro-mast-p">

                                                 <router-link class="pro-mast-p-a1" to="/pro-detail">
                                            {{item.goods_name}}
                                             </router-link>



                                                     <router-link style='display:none;' class="pro-mast-p-a2" to="/pro-detail">
                                            <p>{{item.goods_name}}</p>
                                                 <p>￥{{item.goos_price}}</p>
                                           </router-link>
                                            </div>
                                </div>

                            </div>


                        </div>
  </div>
                    </div>
                    <div class="row" id="pageagen">
                        <div class="col-md-4 col-sm-4 items-info">Items 1 to 9 of 10 total</div>
                        <div class="col-md-8 col-sm-8 ">
                            <div class="M-box3" id="M-box3">

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <!-- END SIDEBAR & CONTENT -->
        </div>
    </div>
</div>
</div>
  </div>
</template>

<script>
var path = require('path');
import '../../../../static/js/pagination/jquery.pagination.min'

export default {
//  props: ['price', 'title', 'img']   /*  props是子组件获取父组件数据用的 */
  components: {

  },

  data () {
    return {
  /* 定义一个空数组数据items */
        items: []
    }

  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
     this.GetData(1);


  },
  mounted(){


  },
  updated(){
      this.MouseFu(".product-list .list-pro-div");
  },
    methods:{
        GetData: function (pageIndex) {
            var self=this;
            this.$http.get('/api/info').then(response =>{
                this.items = response.body.data.Records;
                var datajson=this.items;

                var pageSize=10;
                    var pn = Math.ceil(datajson.length  / pageSize);

                    $(".items-info").html("<span style='color: #cc0000'>" + datajson.length + " </span>条数据 共<span style='color: #cc0000'> " + pn + "  </span>页 ")
                    $('#M-box3').pagination({
                        pageCount: pn,
                        current: pageIndex,
                        jump: true,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (index) {
                            self.GetData(index.getCurrent());
                        }
                    });

            }, error => {
                console.log(error);
            });
        },
    }

}
</script>

<style lang="css"  scoped>
    @import '/static/js/pagination/pagination.css';
    #pageagen{ padding: 10px 0;}
</style>
