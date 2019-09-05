import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'//加载组件login
import Register from '@/components/register'
import Home from '@/components/home'
import HomeContent  from '@/components/tabbar/HomeContent.vue'
import Member from './../components/tabbar/MemberContent.vue'
import Search from './../components/tabbar/Search.vue'
import Shopcar from './../components/tabbar/ShopCarContent.vue'
import Setting from './../components/tabbar/Setting.vue'
import NewsList from './../components/news/newslist.vue'
import NewsInfo from './../components/news/newsinfo.vue'
import PhotoList from './../components/photos/photoList.vue'
import PhotoInfo from './../components/photos/photoinfo.vue'
import GoodsList from './../components/goods/goodslist.vue'
import GoodsInfo from './../components/goods/goodsinfo.vue'
Vue.use(Router)

var homeRouter = {
  path: '/home',
  component: Home,
  children: [{
      path: 'index',
      component: HomeContent
    },
    {
      path: 'member',
      component: Member
    },
    {
      path: 'shopcar',
      component: Shopcar
    },
    {
      path: 'search',
      component: Search
    },
    {
      path: 'newslist',
      component: NewsList
    },
    {
      path: '',
      redirect: 'index'
    },
    {
      path: 'setting',
      component: Setting
    },
     {
      path: 'newslist/:id',
      component: NewsInfo
    }, 
    {
      path: 'photolist',
      component: PhotoList
    }, 
    {
      path: 'photoInfo/:id',
      component: PhotoInfo
    },
    {
      path:'goodslist',
      component:GoodsList
    },
    {
      path:'goodsInfo/:id',
      component:GoodsInfo,
      name:'goodsinfo'
    }
  ]
};

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }, 
    {
      path: '/',
      redirect: '/login'
    },
    homeRouter, 
    {
      path: '/register',
      component: Register
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
});