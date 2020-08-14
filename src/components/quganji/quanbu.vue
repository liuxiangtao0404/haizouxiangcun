<template>
	<div class="quanbu">
		<div class="top">
			<div>
				<img src="../../assets/image/quganji/shanpin.jpg" width="100%">
			</div>
		</div>
		<div class="fenlei" v-for="(item,index) in fenleisj" :key="index">
			<van-row type="flex" align="center" offset=10 style="background: white;">
				<van-col span="2" offset="1">
					<div style="margin-top: 20%;">
						<img :src="item.iconimg" width="80%">
					</div>
				</van-col>
				<van-col span="6">
					<div class="fenlei-title">{{item.title}}</div>
				</van-col>
				<van-col span="5" offset="10">
					<div @click="tabqh(index+1)" style="color: #999;">
						查看更多<van-icon name="arrow"/>
					</div>
				</van-col>
			</van-row>
			<ul class="shangpin">
				<li v-for="(items,index1) in item.shangpin">
					<div>
						<img :src="items.spimg" width="100%">
					</div>
					<div style="color: #11573f;">{{items.dizhi}}</div>
					<div style="color: black;">{{items.shangpinming}}</div>
					<div style="color: black;">{{items.geshu}}</div>
					<div style="color: #ff344d;font-weight: 600;">￥{{items.jiage}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"quganji",
		data(){
			return{
				fenleisj:[]
			}
		},
		methods:{
			tabqh(index){
				this.$emit("hqtab",index)
			}
		},
		created(){
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/quganji").then((res) => {
				// console.log(res)
				this.fenleisj = res.data.data.fenleisj
			})
		}
	}
</script>

<style scoped>
	.quanbu {
		width: 100%;
		padding-bottom: 25%;
		box-sizing: border-box;
		overflow-y: hidden;
	}

	.top {
		width: 100%;
		background: #f9f9f9;
	}

	.top>div {
		width: 90%;
		margin: 0 auto;
	}

	.fenlei {
		color: black;
		font-size: 14px;
		background: #f9f9f9;
	}

	.fenlei-title {
		font-weight: 600;
		font-size: 16px;
	}
	
	.shangpin{
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
	}
	.shangpin>li{
		width: 31%;
		margin: 2% 1%;
		padding-bottom: 5%;
		box-sizing: border-box;
		background: white;
	}
	.shangpin>li>div:nth-of-type(1){
		padding-left: 0;
	}
	.shangpin>li>div{
		padding-left: 5%;
		box-sizing: border-box;
		line-height: 20px;
		font-size: 12px;
	}
</style>
