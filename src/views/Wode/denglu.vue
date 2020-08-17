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
			<van-button type="primary" size="large" style="margin-top: 10%;" @click="dlyz()">登录</van-button>
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
		methods: {
			guanbi() {
				this.$store.state.pdshow = true
				this.$router.go(-1)
			},
			dlyz() {
				const self = this;
				//判断复选框是否被勾选 勾选则调用配置cookie方法
				if (self.checked == true) {
					//传入账号名，密码，和保存天数3个参数
					if (self.yonghu.username == "") {
						Toast('请输入用户名/邮箱/手机号');
					} else if (self.yonghu.password == "") {
						Toast('请输入密码');
					} else {
						for (var i = 0; i < self.login.length; i++) {
							if(self.yonghu.username == self.login[i].user || self.yonghu.username == self.login[i].shoujihao || self.yonghu.username == self.login[i].youxiang){
								if(self.yonghu.password == self.login[i].pwd){
									Toast('登录成功');
									self.$router.push({
										name:"Wode"
									})
									self.setCookie(self.yonghu.username, self.yonghu.password, 7);
									return true
								}
							}else{
								Toast('用户名或密码输入错误');
							}
						}
					}
				} else {
					// 清空Cookie
					self.clearCookie();
				}
			},
			//清除cookie
			clearCookie() {
				this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
			}
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
