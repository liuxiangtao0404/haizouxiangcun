<template>
	<div class="youtaxaing">
		<van-sticky>
			<!-- 搜索 -->
			<div class="sousuo" type="primary">
				<van-row>
					<van-col span="15" offset="1">
						<van-field v-model="sousuo" style="border-radius: 5px;" left-icon="search" placeholder="搜一搜你喜欢的" />
					</van-col>
					<van-col span="6" offset="1">
						<van-button style="color: #3bb94e;border-radius: 5px;">区域搜索</van-button>
					</van-col>
				</van-row>
			</div>
		</van-sticky>
		<div class="content">

			<!-- 精品村游路线 -->
			<template>
				<div class="content-title">
					<h2>
						精品村游路线
						<div></div>
					</h2>
				</div>
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
				<div class="gengduo">
					<van-button type="primary" @click="gengduo()">查看更多路线</van-button>
				</div>
			</template>

			<div class="br"></div>

			<!-- 每日乡村推荐 -->
			<template>
				<van-row style="width: 90%;margin: 0 auto;" @click="meili()">
					<van-col span="14">
						<div class="content-title kuan">
							<h2>
								每日乡村推荐
								<div></div>
							</h2>
						</div>
					</van-col>
					<van-col span="10" style="margin-top: 2%;">
						<img src="../../assets/image/youtaxiang/paihang.jpg" width="20%" style="vertical-align: middle;margin-right: 2%;">
						<span style="font-size: 16px;color: #febf19;">村魅力排行>></span>
					</van-col>
				</van-row>
				<ul class="xctj">
					<li v-for="(item,index) in tuijian" :key="index">
						<img :src="item.img" width="100%">
						<div class="shenlv xzi">{{item.chengshi}}</div>
						<div class="dazi zi">{{item.cun}}</div>
					</li>
				</ul>
				<div class="gengduo">
					<van-button type="primary">查看更多村</van-button>
				</div>
			</template>

			<div class="br"></div>
			
			<!-- 精品民宿 -->
			<template>
				<div class="content-title">
					<h2>
						精品民宿
						<div style="width: 22%;"></div>
					</h2>
				</div>
				<ul class="xctj">
					<li v-for="(item,index) in minsu" :key="index">
						<template v-if="index <= 5">
							<img :src="item.img" width="100%">
							<div class="shenlv xzi">{{item.chengshi}}</div>
							<div class="dazi zi">{{item.minsu}}</div>
							<div>
								<span style="color: #ee263d;">￥{{item.jiage}}</span>起
							</div>
						</template>
						<template>
							
						</template>
					</li>
				</ul>
				<div class="gengduo">
					<van-button type="primary" @click="gengduoms()">查看更多民宿</van-button>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: "youtaxiang",
		data() {
			return {
				sousuo: "",
				cunyou: [],				//精品村游路线
				tuijian:[],				//每日乡村推荐
				minsu:[],				//精品民宿
			}
		},
		created() {
<<<<<<< HEAD
<<<<<<< HEAD
			this.$store.state.pdshow = true
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/youtaxiang").then(
				(res) => {
					this.cunyou = res.data.data.cunyou			//精品村游路线
					this.tuijian = res.data.data.tuijian		//每日乡村推荐
					this.minsu = res.data.data.minsu			//精品民宿
					// console.log(this.minsu.length)
=======
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/youtaxiang").then(
				(res) => {
					// console.log(res)
					this.cunyou = res.data.data.cunyou			//精品村游路线
					this.tuijian = res.data.data.tuijian		//每日乡村推荐
					this.minsu = res.data.data.minsu			//精品民宿
					console.log(this.minsu.length)
<<<<<<< HEAD
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
				}).catch((error) => {
				console.log(error)
			})
		},
		methods:{
			meili(){
				this.$store.state.pdshow = false
				this.$router.push({
					name:"Meilipaihang"
				})
			},
			gengduo(){
				this.$store.state.pdshow = false
				this.$router.push({
					name:"Cunyouluxian"
				})
			},
			gengduoms(){
				this.$store.state.pdshow = false
				this.$router.push({
					name:"Minsu"
				})
			}
		}
	}
</script>

<style scoped>
	.left {
		float: left;
	}

	.right {
		float: right;
	}

	.clear {
		clear: both
	}

	.youtaxaing {
		width: 100%;
		overflow-y: hidden;
		margin-bottom: 20%;
	}

	.sousuo {
		width: 100%;
		height: 120px;
		padding-top: 13%;
		background: url(../../assets/image/shouye/topbeijign.jpg) no-repeat;
		background-size: 100% 100%;
	}

	.content-title {
		position: relative;
		width: 90%;
		margin: 3% auto;
		color: black;
	}

	.content-title>h2>div {
		position: absolute;
		left: 0;
		bottom: 5%;
		width: 32%;
		height: 8px;
		background: #33ab61;
		border-radius: 10px;
		z-index: -1;
	}

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

	.gengduo {
		width: 35%;
		margin: 4% auto;
	}

	/* 换行 */
	.br {
		width: 100%;
		height: 15px;
		background: #f9f9f9;
	}

	/* 每日乡村推荐 */
	.kuan {
		width: 170%;
	}
	.xctj{
		width: 100%;
		display: flex;
		margin: 4% 0;
		flex-wrap: wrap; 
	}
	.xctj>li{
		width: 45%;
		margin-left: 3.5%;
		margin-bottom: 3.5%;
		border-radius: 5px;
		box-shadow: 2px 5px 10px #d5d5d5;
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
