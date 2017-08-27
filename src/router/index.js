import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/home'
import ProList from '@/components/pages/frontend/proList'
import List from '@/components/pages/frontend/List'
import Login from '@/components/pages/backend/Login'
import AdminHome from '@/components/common/adminHome'
import PersonInfo from '@/components/pages/backend/personInfo'
Vue.use(Router);
//var About = Vue.extend({
//  template: '<div><h1>5655656</h1><p>This is the tutorial about vue-router.</p></div>'
//})
export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,

      children:[
        {
          path: '/',
          name: 'index',

          component: List
    },
        {
          path: '/pro-list',


          name: 'pro-list',
          component: resolve => require(['@/components/pages/frontend/proList.vue'],resolve)
          //component:About
        },
          {
              path: '/pro-detail',


              name: 'pro-list',
              component: resolve => require(['@/components/pages/frontend/proDetail.vue'],resolve)
              //component:About
          },
          {
              path: '/query',


              name: 'query',
              component: resolve => require(['@/components/pages/frontend/zw.vue'],resolve)
              //component:About
          },
          {
              path: '/about',


              name: 'about',
              component: resolve => require(['@/components/pages/frontend/about.vue'],resolve)
              //component:About
          }

            ]
    },
    {
      path: '/admin',
      name: 'admin',
      component:Login

    },
    {
      path: '/admin-home',
      name: 'aa',
      component:AdminHome,
      children:[

        {
          path: '/person-info',
          name: 'aa',
          component:PersonInfo

        },
        {
          path: '/member-list',
          name: 'aa1',
          component:PersonInfo

        }
      ]

    },


]

})
