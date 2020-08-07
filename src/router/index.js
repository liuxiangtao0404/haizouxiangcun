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
<<<<<<< HEAD
=======
		path: '/minsu',
		name: 'Minsu',
		component: () => import('../views/Youtaxiang/minsu.vue')
	},
	{
>>>>>>> f3598e9... haizouxiangcun
		path: '/quganji',
		name: 'Quganji',
		component: () => import('../views/Quganji/quganji.vue')
	},
	{
		path: '/wode',
		name: 'Wode',
		component: () => import('../views/Wode/wode.vue')
	}
]

const router = new VueRouter({
<<<<<<< HEAD
	mode: 'history',//hash
=======
	mode: 'hash',//history
>>>>>>> f3598e9... haizouxiangcun
	base: process.env.BASE_URL,
	routes
})

export default router
