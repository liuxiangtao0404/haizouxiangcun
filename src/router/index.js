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
	}
]

const router = new VueRouter({
	mode: 'history',//hash
	base: process.env.BASE_URL,
	routes
})

export default router
