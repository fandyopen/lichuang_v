<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">

                    <el-submenu :index="item.index">
                        <template slot="title"><i class="el-icon-menu"></i>{{ item.title }}{{item.index}}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>

                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i class="el-icon-setting"></i>{{ item.title }}
                    </el-menu-item>
                </template>

            </template>


        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [

                    {
                        index: '2',
                        title: '表单',
                        subs: [
                            {
                                index: 'person-info',
                                title: '个人资料'
                            },
                            {
                                index: 'member-list',
                                title: '会员列表'
                            }

                        ]
                    },
                    {
                        index: '4',
                        title: '表fgfgg单'

                    }

                ]
            }
        },
        computed:{
            onRoutes(){
            // alert( this.$route.path)
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

