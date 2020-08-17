<template>
	<div>
		<van-nav-bar
			title="更多精品村游路线"
			left-text="返回"
			left-arrow
			@click-left="fanhui()"
		/>
		
		<!-- 精品村游路线 -->
		<template>
			<ul class="cunyou" v-for="(item,index) in cunyou" :key="index">
				<li>
					<img :src="item.img" width="100%">
				</li>
				<li class="shenlv">{{item.name}}</li>
				<li class="dazi">{{item.zijia}}</li>
				<li>
					<div class="jiage">￥{{item.jiage}}</div>
					<div class="tianshu">{{item.tianshu}}</div>
					<div class="clear"></div>
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cunyou: [],				//精品村游路线
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
				this.$store.state.pdshow = true
			}
		},
		created() {
<<<<<<< HEAD
<<<<<<< HEAD
			this.$store.state.pdshow = false
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/youtaxiang").then(
				(res) => {
					this.cunyou = res.data.data.cunyou			//精品村游路线
				}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	/* 精品村游路线 */
	.cunyou:nth-of-type(1) {
		margin: 4% 0;
		padding: 3% 0;
		box-sizing: border-box;
		border-bottom: 1px solid #e1e1e1;
	}
	
	.cunyou>li {
		width: 90%;
		line-height: 25px;
		margin: 0 auto;
	}
	
	.shenlv {
		font-size: 14px;
		color: #10503a;
	}
	
	.dazi {
		color: black;
		font-size: 18px;
		font-weight: 600;
	}
	
	.jiage {
		color: #f23a51;
		float: left;
		font-size: 13px;
		display: inline-block;
	}
	
	.tianshu {
		color: #9d9d9d;
		float: right;
		font-size: 13px;
		display: inline-block;
	}
	
	.clear {
		clear: both;
	}
</style>
