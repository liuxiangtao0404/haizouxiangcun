<template>
	<div>
		<van-nav-bar title="更多精品民宿" left-text="返回" left-arrow @click-left="fanhui()" fixed placeholder />
		
		<!-- 精品民宿 -->
		<template>
			<ul class="xctj">
				<li v-for="(item,index) in minsu" :key="index">
					<img :src="item.img" width="100%">
					<div class="shenlv xzi">{{item.chengshi}}</div>
					<div class="dazi zi">{{item.minsu}}</div>
					<div>
						<span style="color: #ee263d;">￥{{item.jiage}}</span>起
					</div>
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
	export default{
		name:"minsu",
		data(){
			return{
				minsu:[],				//精品民宿
			}
		},
		created() {
<<<<<<< HEAD
			this.$store.state.pdshow = false
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/youtaxiang").then(
				(res) => {
					// console.log(res)
					this.cunyou = res.data.data.cunyou			//精品村游路线
					this.tuijian = res.data.data.tuijian		//每日乡村推荐
					this.minsu = res.data.data.minsu		//精品民宿
				}).catch((error) => {
				console.log(error)
			})
		},
		methods: {
			fanhui() {
				this.$router.go(-1)
				this.$store.state.pdshow = true
			}
		}
	}
</script>

<style scoped>
	.xctj{
		width: 100%;
		display: flex;
		margin: 4% 0;
		padding-bottom: 10%;
		box-sizing: border-box;
		flex-wrap: wrap; 
		font-size: 14px;
		color: black;
	}
	.xctj>li{
		width: 45%;
		margin-left: 3.5%;
		margin-bottom: 3.5%;
		border-radius: 10px;
	}
	.xctj>li>div{
		padding-left: 10px;
		margin: 2% 0;
		box-sizing: border-box;
	}
	.xzi{
		font-size: 13px !important;
	}
	.zi{
		font-size: 14px !important;
	}
</style>
