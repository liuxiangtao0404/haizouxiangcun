<template>
	<div class="tuijian">
		<div class="guiguli">
			<img src="../../assets/image/shouye/guiguxiang.jpg" width="100%">
		</div>

		<template>
			<!-- 发布人1 -->
			<div class="fabu" v-for="item in fabuxinxi" :key="item.id">
				<ul class="faburentou">
					<li>
						<img :src="item.touxaing" width="100%">
					</li>
					<li>
						<div class="fbr-geren">
							<div style="color: #c37a32;">{{item.name}}</div>
							<div class="chenyuanjiao">{{item.dengji}}</div>
						</div>
						<div style="color: #cccccc;">{{item.fabushijian}}</div>
					</li>
					<li>
						<button type="button" class="guanzhu">{{item.guanzhu}}</button>
					</li>
				</ul>
				<div style="line-height: 25px;font-size: 15px;" class="shangxiabj">
					<div>{{item.fabuxinxi}}</div>
					<div>{{item.fabuxinxi1}}</div>
				</div>
				<div>
					<img :src="item.fabuimage" width="100%">
				</div>
				<div style="color: #454f8d;" class="shangxiabj">
					{{item.dizhi}}
				</div>
				<van-row>
					<van-col span="6" offset="1"><van-icon size="20" name="cluster-o" class="imgczjz"/>{{item.fenxiao}}</van-col>
					<van-col span="4" offset="4"><van-icon size="20" name="chat-o" class="imgczjz"/>{{item.pinlunshu}}</van-col>
					<template v-if="item.dianzan">
						<van-col span="4" offset="5"><van-icon size="20" name="good-job-o" class="imgczjz" @click="dianz(item.id)"/>{{item.dianzanshu}}</van-col>
					</template>
					<template v-else>
						<van-col span="4" offset="5"><van-icon size="20" name="good-job" color="#ffd644" class="imgczjz" @click="dianz(item.id)"/>{{item.dianzanshu}}</van-col>
					</template>
				</van-row>
				<ul class="pinglun shangxiabj">
					<li><span style="color: #2c6753;">{{item.pinlunren}}</span>{{item.pinlunxinxi}}</li>
				</ul>
			</div>
		</template>
	</div>
</template>

<script>
	export default{
		name:"tuijian",
		data(){
			return{
				dianzanshu:5,
				fabuxinxi:[]
			}
		},
		methods:{
			dianz(index){
				this.fabuxinxi[index].dianzan = !this.fabuxinxi[index].dianzan
				if(this.fabuxinxi[index].dianzan == true){
					this.fabuxinxi[index].dianzanshu -= 1
				}else{
					this.fabuxinxi[index].dianzanshu += 1
				}
			}
		},
		created() {
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/faburen").then((res) => {
				// console.log(res)
				this.fabuxinxi = res.data.data.fabuxinxi
			})
		}
	}
</script>

<style scoped>
	.tuijian {
		width: 100%;
		margin-bottom: 15%;
		padding: 0;
		border-top: 1px solid #e1e1e1 !important;
	}
	.guiguli{
		background: #fafafa;
		padding: 2% 5%;
		box-sizing: border-box;
	}
	
	/* 上下边距 */
	.shangxiabj{
		margin:2% 0;
	}

	.fabu {
		margin-top: 3%;
		padding: 0 5%;
		box-sizing: border-box;
		border-bottom: 1px solid #d7d7d7;
	}

	/* 发布人头部 */
	.faburentou {
		width: 100%;
		display: flex;
	}

	.faburentou>li {
		flex-direction: column;
		margin: 0 2%;
	}

	.faburentou>li:nth-of-type(1) {
		width: 12%;
	}

	.faburentou>li:nth-of-type(2) {
		margin-right: 0;
		width: 60%;
	}

	.faburentou>li:nth-of-type(2)>div {
		margin-top: 2%;
	}

	.fbr-geren {
		display: flex;
	}

	.fbr-geren>div {
		margin: 0 2%;
		flex-direction: column;
	}

	.chenyuanjiao {
		width: 35%;
		text-align: center;
		background: #ffd768;
		padding: 0 2%;
		border-radius: 4px;
		box-sizing: border-box;
	}

	.faburentou>li:nth-of-type(3) {
		width: 22%;
		margin-right: 0;
		margin-left: 0;
	}

	.guanzhu {
		text-align: center;
		width: 80%;
		margin: 0 auto;
		background: #e0f1e7;
		color: #008e2c;
		padding: 4% 5%;
		border-radius: 5px;
		margin-top: 15%;
		border: 0;
	}
	.imgczjz{
		vertical-align: middle;
		margin-bottom: 4%;
		margin-right: 2%;
	}
	.pinglun{
		width: 100%;
		background: #fafafa;
	}
	.pinglun>li{
		line-height: 25px;
		text-indent: 20px;
	}
</style>
