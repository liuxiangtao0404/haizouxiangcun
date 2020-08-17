import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
<<<<<<< HEAD
		pdshow:true,
		erjiif:true,
		dluser:"点击登录"
	},
	getters:{
		//设置cookie
		setCookie(c_name, c_pwd, exdays) {
			var exdate = new Date(); //获取时间
			exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
			//字符串拼接cookie
			window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
			window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
			return c_name, c_pwd, exdays
		}
=======
		pdshow:true
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
	},
	mutations: {},
	actions: {},
	modules: {}
})
