<template>
	<div class="guanzu">
		<van-nav-bar title="我的关注" left-text="返回" left-arrow @click-left="fanhui()" />

		<van-tabs v-model="active" title-inactive-color="#c2c2c2" title-active-color="#4c4c4c" color="#4c4c4c" line-width="10%">
			<van-tab title="村民">
				<div class="br"></div>
				<div class="cunmin">
					<van-row v-for="(item,index) in cunmin" :key="index" style="margin: 3% 0 3% 4%;">
						<van-col span="4">
							<img :src="item.img" width="90%">
						</van-col>
						<van-col span="20">
							<div class="cmxinxi">
								<div class="jibenxinxi">
									<div>
										<span class="cuzi">{{item.text}}</span>
										<span class="xiaohuizi">{{item.zhushi}}</span>
									</div>
									<div class="xiaohuizi">{{item.xinxi}}</div>
								</div>
								<div class="liaoyixia">聊一下</div>
							</div>
						</van-col>
					</van-row>
				</div>
			</van-tab>
			<van-tab title="村庄">村庄</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				active: 0,
				cunmin: [
					{
						img: require('../../assets/image/wode/cunmin1.jpg'),
						text: '牧牛书生 ',
						zhushi: '切桑屯',
						xinxi: '嗨走乡村,想家就回···'
					},
					{
						img: require('../../assets/image/wode/cunmin2.jpg'),
						text: '田园山水 ',
						zhushi: '弄则屯',
						xinxi: '风水先生'
					},
					{
						img: require('../../assets/image/wode/cunmin3.jpg'),
						text: '阿英 ',
						zhushi: '山仲屯',
						xinxi: '天等睿乐文化传媒天等县消费扶···'
					},
					{
						img: require('../../assets/image/wode/cunmin4.jpg'),
						text: '太阳村 常鸿 ',
						zhushi: '太园',
						xinxi: '做一名优秀的太阳村村民···微信···'
					},
					{
						img: require('../../assets/image/wode/cunmin5.jpg'),
						text: '湘妹心宝 ',
						zhushi: '心宝',
						xinxi: '风水先生'
					}
				]
			}
		},
		methods: {
			fanhui() {
				this.$router.push({
					name: "Wode",
					// params:{
					// 	gzcount:this.cunmin.length
					// }
				})
				this.$store.state.pdshow = true
			}
		},
		created() {
			this.$store.state.pdshow = false
		}
	}
</script>

<style scoped>
	.br {
		width: 100%;
		height: 15px;
		background: #f6f6f6;
	}
	
	.cunmin{
		width: 100%;
	}
	.cmxinxi{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #dcdcdc;
	}
	.cmxinxi>div{
		flex-direction: column;
	}
	.cuzi{
		color: black;
		font-size: 16px;
	}
	.xiaohui{
		color: #a6a6a6;
		font-size: 14px;
	}
	.jibenxinxi{
		width: 78%;
		margin: 2% 0;
	}
	.liaoyixia{
		width: 18%;
		color: white;
		text-align: center;
		margin-top: 5%;
		height: 25px;
		line-height: 25px;
		border-radius: 5px;
		background: #3bb94e;
	}
</style>
