<template>
	<div>
		<van-nav-bar title="编辑资料" left-arrow @click-left="fanhui()" />
		
		<ul class="xinxi">
			<li>
				<van-row>
				  <van-col span="4" offset="1">昵称</van-col>
				  <van-col span="4" offset="13" style="text-align: right;">{{this.$store.state.dluser}}</van-col>
				  <van-col span="2"><van-icon name="arrow" color="#dadada" size="20" /></van-col>
				</van-row>
			</li>
			<li>
				<van-row>
				  <van-col span="4" offset="1">头像</van-col>
				  <van-col span="4" offset="13" style="text-align: right;"><img src="../../assets/image/wode/weidenglu.png" width="40%"></van-col>
				  <van-col span="2"><van-icon name="arrow" color="#dadada" size="20" /></van-col>
				</van-row>
			</li>
			<li>
				<van-row>
				  <van-col span="4" offset="1">性别</van-col>
				  <van-col span="4" offset="13" style="text-align: right;">男</van-col>
				  <van-col span="2"><van-icon name="arrow" color="#dadada" size="20" /></van-col>
				</van-row>
			</li>
			<li>
				<van-row>
				  <van-col span="4" offset="1">所在地</van-col>
				  <van-col span="4" offset="13"></van-col>
				  <van-col span="2"><van-icon name="arrow" color="#dadada" size="20" /></van-col>
				</van-row>
			</li>
			<li>
				<van-row>
				  <van-col span="4" offset="1">个人简历</van-col>
				  <van-col span="4" offset="13"></van-col>
				  <van-col span="2"><van-icon name="arrow" color="#dadada" size="20" /></van-col>
				</van-row>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"bianjiziliao",
		data(){
			return{
				
			}
		},
		created() {
			this.$store.state.pdshow = false
		},
		methods:{
			fanhui() {
				this.$router.go(-1)
				this.$store.state.pdshow = true
			}
		}
	}
</script>

<style scoped>
	.xinxi{
		width: 100%;
		color: black;
		font-size: 15px;
	}
	.xinxi>li{
		padding: 2% 0;
		box-sizing: border-box;
		border-bottom: 1px solid #d7d7d7;
	}
</style>
