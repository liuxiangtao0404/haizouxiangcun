<template>
	<div class="guanzu">
		<van-nav-bar title="粉丝" left-text="返回" left-arrow @click-left="fanhui()" />

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
						zhushi: '',
						xinxi: '关注了你 08月04日 09:22'
					},
					{
						img: require('../../assets/image/wode/cunmin2.jpg'),
						text: '田园山水 ',
						zhushi: '',
						xinxi: '关注了你 08月04日 08:42'
					}
				]
			}
		},
		methods: {
			fanhui() {
				this.$router.push({
					name: "Wode",
					// params:{
					// 	fscount:this.cunmin.length
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
