import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import baojianxinxi from '@/views/modules/baojianxinxi/list'
    import baojianyuding from '@/views/modules/baojianyuding/list'
    import shangpingoumai from '@/views/modules/shangpingoumai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import zhangdanxinxi from '@/views/modules/zhangdanxinxi/list'
    import huiyuanxinxi from '@/views/modules/huiyuanxinxi/list'
    import messages from '@/views/modules/messages/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '优惠资讯',
        component: news
      }
      ,{
	path: '/baojianxinxi',
        name: '包间信息',
        component: baojianxinxi
      }
      ,{
	path: '/baojianyuding',
        name: '包间预订',
        component: baojianyuding
      }
      ,{
	path: '/shangpingoumai',
        name: '商品购买',
        component: shangpingoumai
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/zhangdanxinxi',
        name: '账单信息',
        component: zhangdanxinxi
      }
      ,{
	path: '/huiyuanxinxi',
        name: '会员信息',
        component: huiyuanxinxi
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
