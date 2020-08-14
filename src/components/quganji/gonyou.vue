<template>
	<div class="shuiguo">
		<div class="fenlei" v-for="(item,index) in fenleisj" :key="index">
			<template v-if="item.title == dttitle">
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
			</template>
		</div>
	</div>
</template>

<script>
	export default{
		name:"shuiguo",
		data(){
			return{
				fenleisj:[]
			}
		},
		created(){
			this.axios.get("https://www.fastmock.site/mock/512c0b7fc6a2506231af3ff39f225e5d/haizouxiangcun/api/spnr").then((res) => {
				this.fenleisj = res.data.data.fenleisj
			})
		},
		props:{
			dttitle:String
		}
	}
</script>

<style scoped>
	.shuiguo{
		width: 100%;
		padding-bottom: 25%;
		box-sizing: border-box;
		overflow-y: hidden;
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
