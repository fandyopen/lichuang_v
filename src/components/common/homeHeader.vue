<template lang="html">
<div class="header-section">
     <nav class="nav-section">
         <div class="container">
                   <ul class="nav-section-ul">
                                    <li class="nav-img-li" >  <a href="?r=site/index" class=""><img src="/static/images/logo.png" alt="立创检测商城"></a><!-- LOGO --></li>
                                    <li style="width: 10%;" data-nav="index" >

                                        <router-link  active-class="active"   to="/"exact >首页</router-link>
                                    </li>
                                    <li  data-nav="pro-list">
                                        <router-link active-class="active"   to="/pro-list" exact>服务项目 </router-link>

                                    </li>
                                    <li data-type="query" class="">
                                           <router-link active-class="active"   to="/query" exact>真伪查询 </router-link>


                                    </li>
                                    <li data-type="about" class="dropdown">

                                            <router-link active-class="active"   to="/about" exact>关于立创 </router-link>

                                        <ul class="dropdown-menu">
                                            <li class=""><a href="?r=view-company/introduction&amp;type=1">公司介绍</a></li>
                                            <li class=""><a href="?r=view-company/certificate&amp;type=2">荣誉证书</a></li>
                                            <li class=""><a href="?r=view-company/laboratory&amp;type=3">实验室</a></li>
                                            <li class=""><a href="?r=view-company/contact&amp;type=4">联系我们</a></li>
                                            <li class="active"><a href="?r=view-company/partner&amp;type=5">合作伙伴</a></li>
                                        </ul>
                                        <!-- END DROPDOWN MENU -->
                                    </li>


                                </ul>
</div>
                    </nav>

</div>
</template>

<script>
    import global from './global.vue'

    export default {
    name: 'app',
     data(){return{

         ActiveName:"",
        pathnameurl:"",
     }

    },


    created () {

        global.pathname=this.$route.name;
       // console.log( global.pathname);




    },
    updated(){

    },

    methods: {
        //////返回顶部

        getNav:function (pathname) {


              //  if( $(".nav-section-ul li[data-nav='"+global.pathname+"']")){
              // $(event.currentTarget).addClass("active").siblings().removeClass("active");

          // }



        }
    }

}


</script>
