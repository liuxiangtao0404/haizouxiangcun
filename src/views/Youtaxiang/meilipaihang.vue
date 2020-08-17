<template>
	<div class="meilipaihang">
		<van-nav-bar title="嗨村魅力排行" left-text="返回" left-arrow @click-left="fanhui()" fixed placeholder />

		<template style="position: relative;">
			<div class="top">
				<div>力争前三甲，免费拍节目</div>
				<div>查看说明</div>
			</div>
			<div>
				<template>
					<ul class="paihang">
						<li class="xiangduidw">
							<div class="jueduidw">
								<img src="../../assets/image/youtaxiang/2.png" width="50%">
							</div>
							<div>
								<img src="https://s1.ax1x.com/2020/08/06/a6j4sJ.png" width="70%">
							</div>
							<div>弄则屯</div>
							<div style="color: #3bb94d;">27023</div>
						</li>
						<li class="xiangduidw">
							<div class="jueduidw">
								<img src="../../assets/image/youtaxiang/1.jpg" width="50%">
							</div>
							<div>
								<img src="https://s1.ax1x.com/2020/08/06/a6j2GT.png" width="70%">
							</div>
							<div>崖宜村</div>
							<div style="color: #3bb94d;">29233</div>
						</li>
						<li class="xiangduidw">
							<div class="jueduidw">
								<img src="../../assets/image/youtaxiang/3.jpg" width="50%">
							</div>
							<div>
								<img src="https://s1.ax1x.com/2020/08/06/a6jgiV.png" width="70%">
							</div>
							<div>太园</div>
							<div style="color: #3bb94d;">25839</div>
						</li>
					</ul>
				</template>
				<div class="content">
					<ul>
						<li v-for="(item,index) in meili" :key="index" v-if="item.paiming > 3">
							<van-row>
								<van-col span="2" offset="1">
									<div class="shanbianju" style="padding-top: 10%;text-align: center;">{{item.paiming}}</div>
								</van-col>
								<van-col span="3">
									<img :src="item.touxiang" width="100%">
								</van-col>
								<van-col span="9" offset="1">
									<div class="shanbianju">{{item.name}}</div>
								</van-col>
								<van-col span="4" offset="2">
									<div class="shanbianju" style="color: #48b057;">{{item.meilizhi}}</div>
								</van-col>
							</van-row>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				meili: []
			}
		},
		methods: {
			fanhui() {
				this.$router.go(-1)
				this.$store.state.pdshow = true
			}
		},
		created() {
<<<<<<< HEAD
			this.$store.state.pdshow = false
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/youtaxiang").then(
				(res) => {
					this.meili = res.data.data.meili
				}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	.meilipaihang{
		color: black;
	}
	.top {
		width: 100%;
		height: 150px;
		padding-top: 20px;
		box-sizing: border-box;
		background: #3bb94e;
	}

	.top>div {
		color: white;
		font-size: 15px;
		line-height: 20px;
		text-align: center;
	}

	.content {
		box-sizing: border-box;
		background: #f3f3f3;
		padding-top: 23%;
	}

	.content>ul {
		width: 89%;
		padding-top: 5%;
		box-sizing: border-box;
		margin: 0 auto;
		background: white;
	}

	.content>ul>li {
		line-height: 40px;
	}


	.paihang {
		width: 90%;
		display: flex;
		align-items: flex-end;
		position: absolute;
		top: 18%;
		left: 5.4%;
		font-size: 14px;
	}

	.paihang>li {
		width: 33%;
		height: 140px;
		padding-top: 5%;
		/* border: 1px solid #000000; */
		border-radius: 5px;
		background: white;
	}

	.paihang>li:nth-of-type(2) {
		padding-top: 10%;
		height: 160px;
	}

	.xiangduidw {
		position: relative;
	}

	.jueduidw {
		position: absolute;
		top: -25px;
		left: 21%;
	}

	.paihang div {
		width: 60%;
		margin: 4% auto;
		text-align: center;
	}

	.zishiyin {
		display: flex;
		flex-wrap: wrap;
	}
	
	.shanbianju{
		font-size: 14px;
		text-align: left;
		box-sizing: border-box;
	}
</style>
