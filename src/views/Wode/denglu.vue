<template>
	<div class="denglu">
		<div class="dlbj">
			<img src="../../assets/image/wode/denglu.jpg" width="100%">
			<div @click="guanbi()">X</div>
		</div>
		<div class="dlwz">
			<img src="../../assets/image/wode/dlwz.jpg" width="15%">
		</div>
		<div class="from">
			<van-cell-group>
				<van-field v-model="yonghu.username" clearable placeholder="请输入账户" />
				<van-field v-model="yonghu.password" clearable placeholder="请输入密码" />
			</van-cell-group>
			<van-button type="primary" size="large" style="margin-top: 10%;" @click="dlyz('yonghu')">登录</van-button>
			<div class="fxk">
				<van-checkbox v-model="checked" shape="square" checked-color="#07c160">登录即代表您同意嗨走注册协议</van-checkbox>
			</div>
		</div>
		
		<button @click="clearCookie()">退出登录</button>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		name: "denglu",
		data() {
			return {
				yonghu: {
					username: '',
					password: ''
				},
				checked:false,
				login: []
			}
		},
		mounted() {
			 // this.getCookie();
		},
		methods: {
			guanbi() {
				this.$store.state.pdshow = true
				this.$router.go(-1)
			},
			dlyz(yonghu) {
				const self = this;
				//判断复选框是否被勾选 勾选则调用配置cookie方法
				if (self.checked == true) {
					//传入账号名，密码，和保存天数3个参数
					// self.setCookie(self.yonghu.username, self.yonghu.password, 7);
					if (self.user == "") {
						Toast('请输入用户名/邮箱/手机号');
					} else if (self.password == "") {
						Toast('请输入密码');
					} else {
						for (var i = 0; i < self.login.length; i++) {
							if(self.user == self.login[i].user || self.user == self.login[i].shoujihao || self.user == self.login[i].youxiang){
								if(self.password == self.login[i].pwd){
									Toast('登录成功');
									self.$router.push({
										name:"Wode"
									})
									self.$store.state.dluser = self.user
									return true
								}
							}else{
								Toast('用户名或密码输入错误');
							}
						}
					}
				} else {
					//清空Cookie
					// self.clearCookie();
				}
				
				//与后端请求代码，本功能不需要与后台交互所以省略
			},
			//设置cookie
			// setCookie(c_name, c_pwd, exdays) {
			// 	var exdate = new Date(); //获取时间
			// 	exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
			// 	//字符串拼接cookie
			// 	window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
			// 	window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
			// },
			// //读取cookie
			// getCookie: function() {
			// 	if (document.cookie.length > 0) {
			// 		var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
			// 		console.log(arr)
			// 		for (var i = 0; i < arr.length; i++) {
			// 			var arr2 = arr[i].split('='); //再次切割
			// 			//判断查找相对应的值
			// 			if (arr2[0] == 'userName') {
			// 				this.yonghu.username = arr2[1]; //保存到保存数据的地方
			// 			} else if (arr2[0] == 'userPwd') {
			// 				this.yonghu.password = arr2[1];
			// 			}
			// 		}
			// 	}
			// },
			//清除cookie
			// clearCookie() {
			// 	this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
			// }
		},
		created() {
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/login").then((res) => {
				// console.log(res.data.data.login)
				this.login = res.data.data.login
			})
		}
	}
</script>

<style scoped>
	.denglu {
		width: 100%;
	}

	.dlbj {
		position: relative;
	}

	.dlbj>div {
		position: absolute;
		top: 5%;
		right: 5%;
		font-size: 30px;
		color: white;
	}

	.dlwz {
		text-align: center;
		margin: 5% 0;
	}

	.from {
		width: 85%;
		margin: 0 auto;
	}

	.fxk {
		margin-top: 5%;
		font-size: 14px;
	}
</style>
