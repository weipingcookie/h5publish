import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue' //登录页
import temlist from '../views/templatelist/templatelist.vue' //模板列表页
import informationpage from '../views/informationpage/informationpage.vue' //模板信息页
import settingpage from '../views/settingpage/settingpage.vue' //模板基本信息设置页
import editpage from '../views/editpage/editpage.vue' //模板编辑页
import preview from '../views/preview/preview.vue' //预览页
import store from '../store/index.js'
import test from '../views/randerTest/randertest.vue' //测试页
import publish from '../views/publish/publish.vue' //发布页

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		component: login
	},
	{
		path: '/list',
		name: 'templatelist',
		component: temlist
	},
	{
		path: '/informationpage',
		name: 'information',
		component: informationpage
	},
	{
		path: "/settingpage",
		name: 'settingpage',
		component: settingpage
	},
	{
		path: "/editpage",
		name: 'editpage',
		component: editpage
	},
	{
		path: "/preview",
		name: 'preview',
		component: preview
	},
	{
		path: '/test',
		name: 'test',
		component: test
	},
	{
		path: '/vue',
		name: 'vue',
	},
	{
		path:'/publish',
		name:'publish',
		component:publish
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {  //全局路由跳转守卫
	console.log(to, from)
	next()
})

export default router
