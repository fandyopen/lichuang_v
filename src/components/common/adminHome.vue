<template>
    <div class="wrapper">
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <!--<img class="user-logo" src="../../../static/img/img.jpg">-->
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>

     </div>



</template>

<script>
    import vSidebar from '../pages/backend/Sidebar.vue';
    export default {
        data() {
            return {
                name: 'fandy'
            }
        },
        components:{
            vSidebar
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                //alert(command)
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                   // this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    @import "/static/css/backend/main.css";
    @import "/static/css/backend/color-dark.css";     /*深色主题*/
    /*@import "/static/css/backend/theme-green/color-green.css";*/
    @import '/static/css/admin.css';
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
