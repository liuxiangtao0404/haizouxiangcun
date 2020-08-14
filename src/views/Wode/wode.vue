<template>
	<div class="wode">
		<div class="denglu">
			<template v-if="this.$store.state.dluser == '点击登录'">
				<van-row type="flex" align="center">
					<van-col span="4">
						<img src="../../assets/image/wode/weidenglu.png" width="80%">
					</van-col>
					<van-col span="20"><span class="cuti" @click="denglu()">{{this.$store.state.dluser}}</span></van-col>
				</van-row>
			</template>
			<template v-else>
				<van-row type="flex" align="center">
					<van-col span="4">
						<img src="../../assets/image/wode/weidenglu.png" width="80%">
					</van-col>
					<van-col span="10">
						<div class="cuti">{{this.$store.state.dluser}}</div>
						<div class="dengji">Lv.1白户</div>
					</van-col>
					<van-col span="4" offset="6">
						<div class="bianji" @click="bianji()">
							编辑资料
						</div>
					</van-col>
				</van-row>
			</template>
		</div>
		<div class="guanzhuqu">
			<van-row style="text-align: center;">
				<van-col span="6">
					<span class="huizi">村志</span> 0
				</van-col>
				<van-col span="6">
					<span class="huizi">动态</span> 0
				</van-col>
				<van-col span="6">
					<router-link to="/guanzhu" tag="span" class="huizi">关注</router-link> {{gzcount}}
				</van-col>
				<van-col span="6">
					<router-link to="/fensi" tag="span" class="huizi">粉丝</router-link> {{fscount}}
				</van-col>
			</van-row>
		</div>
		<div class="kuanjuzhong guli">
			<div>我的故里</div>
			<div>
				<div>暂无村庄<br />登陆后可加村</div>
			</div>
		</div>
		<div class="br"></div>
		<div class="kuanjuzhong guanli">
			<van-row style="text-align: center;">
				<van-col span="8">
					<img src="../../assets/image/wode/wdms.png" width="25%">
					<div>我的民宿</div>
				</van-col>
				<van-col span="8">
					<img src="../../assets/image/wode/wsmj.png" width="25%">
					<div>我是买家</div>
				</van-col>
				<van-col span="8">
					<img src="../../assets/image/wode/wsmj1.png" width="25%">
					<div>我是卖家</div>
				</van-col>
			</van-row>
		</div>
		<div class="br"></div>
		<div class="kuanjuzhong">
			<van-row type="flex" align="center" class="neibianju">
				<van-col span="2">
					<img src="../../assets/image/wode/1.jpg" width="100%">
				</van-col>
				<van-col span="19" offset="1"><span class="cuti">消息</span></van-col>
				<van-col span="2">
					<van-icon name="arrow" />
				</van-col>
			</van-row>
		</div>
		<div class="br"></div>
		
		<div class="kuanjuzhong">
			<div style="border-bottom: 1px solid #fafafa;" v-for="(item,index) in liebiao" :key="index">
				<van-row type="flex" align="center" class="neibianju">
					<van-col span="2">
						<img :src="item.img" width="100%">
					</van-col>
					<van-col span="19" offset="1">
						<router-link :to="item.route" class="cuti" @click.native="yingcang()">{{item.title}}</router-link>
					</van-col>
					<van-col span="2">
						<van-icon name="arrow" />
					</van-col>
				</van-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "wode",
		data() {
			return {
				liebiao:[
					{
						img:require('../../assets/image/wode/2.jpg'),
						title:"我的钱包",
						route:""
					},
					{
						img:require('../../assets/image/wode/3.jpg'),
						title:"我的收藏",
						route:""
					},
					{
						img:require('../../assets/image/wode/4.jpg'),
						title:"我的工分",
						route:""
					},
					{
						img:require('../../assets/image/wode/5.jpg'),
						title:"浏览历史",
						route:""
					},
					{
						img:require('../../assets/image/wode/6.jpg'),
						title:"设置",
						route:"/shezhi"
					}
				],
				yonghu:"",
				gzcount:5,
				fscount:2
			}
		},
		methods:{
			// sessionStorage.setItem("cnm",this.yonghu)
			// var i = sessionStorage.getItem("cnm")
			denglu(){
				this.$store.state.pdshow = false
				this.$router.push({
					name:"Denglu"
				})
			},
			yingcang(){
				this.$store.state.pdshow = false
			},
			bianji(){
				this.$store.state.pdshow = false
				this.$router.push({
					name:"Bianjiziliao"
				})
			}
		},
		created() {
			this.$store.state.pdshow = true
		}
	}
</script>

<style scoped>
	.wode {
		width: 100%;
		color: black;
		padding-bottom: 25%;
		box-sizing: border-box;
		font-size: 14px;
	}

	.denglu {
		width: 90%;
		margin: 5% auto;
		font-size: 16px;
	}

	.kuanjuzhong {
		width: 90%;
		margin: 0 auto;
	}

	.cuti {
		color: black;
		font-weight: 600;
	}

	.huizi {
		color: #979797;
	}

	.guanzhuqu {
		padding: 2% 0;
		box-sizing: border-box;
		border-bottom: 1px solid #f8f8f8;
	}

	.guli {
		padding: 2% 0;
	}

	.guli>div:first-child {
		color: #969696;
	}

	.guli>div:last-child {
		text-align: center;
		padding: 5% 0;
	}

	.guli>div:last-child>div {
		line-height: 30px;
	}

	.br {
		width: 100%;
		height: 10px;
		background: #f6f6f6;
	}

	.guanli {
		padding: 3% 0;
	}

	.guanli img {
		margin-bottom: 5%;
	}
	.neibianju{
		padding: 4% 0;
		box-sizing: border-box;
	}
	
	.dengji{
		width: 40%;
		font-size: 12px;
		text-align: center;
		line-height: 20px;
		border-radius: 5px;
		background: #fcd76c;
	}
	.bianji{
		border-radius: 5px;
		color: #4bb956;
		font-size: 12px;
		text-align: center;
		border: 1px solid #4bb956;
	}
</style>
