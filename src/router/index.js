import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/views/miancontent/subject')
  },
  {
    path: '/fenlei',
    component: () => import('@/views/classify/fenlei')
  },
  {
    path: '/gouwuche',
    component: () => import('@/views/shoppingtrolley/gouwuche')
  },
  {
    path: '/wodi',
    component: () => import('@/views/my/wodi'),
	beforeEnter: (to, from, next)=>{
		if (localStorage.getItem("longon")) {
			next()
		} else{
			next({path: '/login'})
		}
	}
  },
  {
    path: '/goodsindetali',
    component: () => import('@/components/goodsindetali/goodsindetali'),
	redirect: '/productsIntroduction',
	children: [
		{
		  path: '/productsIntroduction',
		  component: () => import('@/components/introduce/productsIntroduction/productsIntroduction')
		},
		{
		  path: '/specificationParameter',
		  component: () => import('@/components/introduce/specificationParameter/specificationParameter')
		},
		{
		  path: '/after-salePuarantee',
		  component: () => import('@/components/introduce/after-salePuarantee/after-salePuarantee')
		}
	]
  },
  {
    path: '/login',
    component: () => import('@/components/login/login'),
  },
  {
    path: '/register',
    component: () => import('@/components/register/register'),
  },
  {
    path: '/setsettingupinstall',
    component: () => import('@/components/setsettingupinstall/setsettingupinstall'),
  },
  {
    path: '/personal',
    component: () => import('@/views/personal/personal'),
  },
  {
    path: '/site',
    component: () => import('@/views/site/site'),
  }, 
  {
    path: '/xiugai',
    component: () => import('@/views/xiugai/xiugai'),
  },
  {
    path: '/Alipay',
    component: () => import('@/components/Alipay/Alipay'),
  },
  {
    path: '/addresslist',
    component: () => import('@/components/addresslist/addresslist'),
  },
  {
    path: '/orderprocessing',
    component: () => import('@/components/orderprocessing/orderprocessing'),
	children: [
		{
		  path: '/obligation',
		  component: () => import('@/components/orderprocessing/paging/obligation/obligation')
		},
		{
		  path: '/receiving',
		  component: () => import('@/components/orderprocessing/paging/receiving/receiving')
		},
		{
		  path: '/salesreturn',
		  component: () => import('@/components/orderprocessing/paging/salesreturn/salesreturn')
		},
		{
		  path: '/clothingorders',
		  component: () => import('@/components/orderprocessing/paging/clothingorders/clothingorders')
		}
	]
  },
  {
    path: '/comment',
    component: () => import('@/components/comment/comment')
  },
  {
    path: '/pinglunlie',
    component: () => import('@/components/pinglunlie/pinglunlie')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass:'active',
  scrollBehavior(to,from,savedPosition){
	  return {
		  x:0,
		  y:0
	  }
  }
})

export default router
