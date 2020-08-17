import Vue from 'vue'
import VueRouter from 'vue-router'
import Shouye from '../views/Shouye/shouye.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Shouye',
		component: Shouye
	},
	{
		path: '/youtaxiang',
		name: 'Youtaxiang',
		component: () => import('../views/Youtaxiang/youtaxiang.vue')
	},
	{
		path: '/cunyouluxian',
		name: 'Cunyouluxian',
		component: () => import('../views/Youtaxiang/cunyouluxian.vue')
	},
	{
		path: '/meilipaihang',
		name: 'Meilipaihang',
		component: () => import('../views/Youtaxiang/meilipaihang.vue')
	},
	{
		path: '/minsu',
		name: 'Minsu',
		component: () => import('../views/Youtaxiang/minsu.vue')
	},
	{
		path: '/quganji',
		name: 'Quganji',
		component: () => import('../views/Quganji/quganji.vue')
	},
	{
		path: '/wode',
		name: 'Wode',
		component: () => import('../views/Wode/wode.vue')
<<<<<<< HEAD
<<<<<<< HEAD
	},
	{
		path: '/denglu',
		name: 'Denglu',
		component: () => import('../views/Wode/denglu.vue')
	},
	{
		path: '/shezhi',
		name: 'Shezhi',
		component: () => import("../views/Wode/shezhi.vue"),
		children:[
			{
				name:'/shimingyanzheng',
				path:'Shimingyanzheng',
				component:()=>import('../views/Wode/shezhi/shimingyanzheng.vue')
			},
			{
				name:'/guanyu',
				path:'Guanyu',
				component:()=>import('../views/Wode/shezhi/guanyu.vue')
			},
			{
				name:'/shoujibangding',
				path:'Shoujibangding',
				component:()=>import('../views/Wode/shezhi/shoujibangding.vue')
			},
			{
				path:'/shezhi/*',
				redirect:'/shezhi'
			}
		]
	},
	{
		path: '/bianjiziliao',
		name: 'Bianjiziliao',
		component: () => import('../views/Wode/bianjiziliao.vue')
	},
	{
		path: '/guanzhu',
		name: 'Guanzhu',
		component: () => import('../views/Wode/guanzhu.vue')
	},
	{
		path: '/fensi',
		name: 'Fensi',
		component: () => import('../views/Wode/fensi.vue')
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
	}
]

const router = new VueRouter({
	mode: 'history',//hash
	base: process.env.BASE_URL,
	routes
})

export default router
