<template>
	<div class="sjbd">
		<van-nav-bar title="账号绑定与更换" left-arrow @click-left="fanhui()" />

		<div class="shouji">
			<van-row>
				<van-col span="3" offset="1" style="font-weight: 600;font-size: 14px;">手机号</van-col>
				<van-col span="3">已绑定</van-col>
				<van-col span="12">182****1793</van-col>
				<van-col span="4">
					<div class="xiugai">修改</div>
				</van-col>
			</van-row>
		</div>
		<div class="jianju">
			<van-row>
				<van-col span="11" offset="1" style="font-weight: 600;">第三方账户绑定</van-col>
				<van-col span="8" offset="4">绑定账号均可登录</van-col>
			</van-row>
		</div>
		<div class="jianju">
			<van-row>
				<van-col span="3" offset="1"><img src="https://s1.ax1x.com/2020/08/12/axcC8J.jpg" width="50%"></van-col>
				<van-col span="3" style="font-weight: 600;font-size: 16px;">微信</van-col>
				<van-col span="12">未绑定</van-col>
				<van-col span="4">
					<div class="xiugai">修改</div>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "guanyu",
		data() {
			return {

			}
		},
		methods: {
			fanhui() {
				this.$router.go(-1)
				this.$store.state.erjiif = true
			}
		}
	}
</script>

<style scoped>
	.sjbd {
		color: black;
		font-size: 14px;
		background: white;
	}

	.xiugai {
		color: white;
		text-align: center;
		line-height: 25px;
		border-radius: 20px;
		background: #fdd005;
	}

	.shouji {
		padding: 4% 0;
		box-sizing: border-box;
		border-bottom: 1px solid #f6f6f6;
	}
	.jianju{
		padding: 2% 0;
		box-sizing: border-box;
	}
</style>
