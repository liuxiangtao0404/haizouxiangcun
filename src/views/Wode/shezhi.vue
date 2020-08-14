<template>
	<div class="shezhi">
		<template v-if="this.$store.state.erjiif">
			<van-nav-bar title="设置" left-text="返回" left-arrow @click-left="fanhui()" />

			<ul class="sznr">
				<li v-for="(item,index) in liebiao" :key="index">
					<router-link :to="item.route" tag="div" @click.native="panduan()">
						<van-row>
							<van-col span="8" offset="1">
								{{item.text}}
							</van-col>
							<van-col span="5" offset="9" style="text-align: right;">
								<template v-if="index <= 5">
									<van-icon name='arrow' />
								</template>
								<template v-else>
									{{item.tishi}}
								</template>
							</van-col>
						</van-row>
					</router-link>
				</li>
			</ul>

			<div class="gddw">
				<div>
					<a href="#">服务协议</a>|
					<a href="#">隐私政策</a>
				</div>
				<van-button type="primary" size="large">退出登录</van-button>
			</div>
		</template>
		<template v-else>
			<router-view></router-view>
		</template>
	</div>
</template>

<script>
	export default {
		name: "shezhi",
		data() {
			return {
				liebiao: [{
						text: "实名验证",
						route: "/shezhi/shimingyanzheng"
					},
					{
						text: "账户绑定",
						route: "/shezhi/shoujibangding"
					},
					{
						text: "钱包密码",
						route: "/shezhi/shimingyanzheng"
					},
					{
						text: "关于嗨走乡村",
						route: "/shezhi/guanyu"
					},
					{
						text: "APP反馈",
						route: "/shezhi/shimingyanzheng"
					},
					{
						text: "APP分享",
						route: "/shezhi/shimingyanzheng"
					},
					{
						text: "当前版本",
						tishi: "1.3.1",
						route: "/shezhi/shimingyanzheng"
					},
					{
						text: "清除缓存",
						tishi: "80.77MB",
						route: "/shezhi/shimingyanzheng"
					}
				]
			}
		},
		methods: {
			fanhui() {
				this.$router.push({
					name:"Wode"
				})
				this.$store.state.pdshow = true
			},
			panduan(){
				this.$store.state.erjiif = false
			}
		},
		created() {
			this.$store.state.pdshow = false
			this.$store.state.erjiif = true
		}
	}
</script>

<style scoped>
	.shezhi {
		width: 100%;
		background: #f6f6f6;
	}

	.sznr {
		font-size: 16px;
	}

	.sznr>li {
		width: 100%;
		background: white;
		line-height: 40px;
		margin: 2% 0;
	}

	.sznr>li:nth-of-type(4) {
		margin: 0;
		border: 1px solid #f6f6f6;
	}

	.sznr>li:nth-of-type(5) {
		margin: 0;
		border: 1px solid #f6f6f6;
	}

	.sznr>li:nth-of-type(6) {
		margin: 0;
		border: 1px solid #f6f6f6;
	}

	.sznr>li:nth-of-type(7) {
		margin: 0;
		border: 1px solid #f6f6f6;
	}

	.gddw {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: 14px;
		text-align: center;
	}
</style>
