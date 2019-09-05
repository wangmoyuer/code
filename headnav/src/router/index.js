import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index'
import Content from '@/page/content'
import Zixun from '@/page/zixun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/zixun',
      name:'Zixun',
      component:Zixun
    },
    {
      // path:'/content',
      path:'/content/:id',//动态路由
      name: 'Content',
      component:Content
    }
  ]
})
