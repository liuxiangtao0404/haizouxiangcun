<template>
	<div class="quganji">
		<van-sticky>
			<!-- 搜索 -->
			<div class="sousuo" type="primary">
				<van-field v-model="sousuo" class="sousuokuang" left-icon="search" placeholder="搜土货" />
			</div>
		</van-sticky>

		<div class="tabqiehuan">
			<van-tabs v-model="active" offset-top="119px" line-height=0 animated sticky swipeable title-inactive-color="black" title-active-color="#3bb94d">
				<van-tab title="全部">
					<quanbu @hqtab="zichuan"></quanbu>
				</van-tab>
				<van-tab title="水果生鲜">
					<gonyou dttitle="水果生鲜"></gonyou>
				</van-tab>
				<van-tab title="肉蛋禽类">
					<gonyou dttitle="肉蛋禽类"></gonyou>
				</van-tab>
				<van-tab title="地方特产">
					<gonyou dttitle="地方特产"></gonyou>
				</van-tab>
				<van-tab title="茶品酒水">
					<gonyou dttitle="茶品酒水"></gonyou>
				</van-tab>
				<van-tab title="粮油米面">
					<gonyou dttitle="粮油米面"></gonyou>
				</van-tab>
				<van-tab title="零食小吃">
					<gonyou dttitle="零食小吃"></gonyou>
				</van-tab>
				<van-tab title="农副干货">
					<gonyou dttitle="农副干货"></gonyou>
				</van-tab>
				<van-tab title="手工艺品">
					<gonyou dttitle="手工艺品"></gonyou>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import quanbu from '../../components/quganji/quanbu.vue'		//全部
	import gonyou from '../../components/quganji/gonyou.vue'		//公共组件
	export default {
		data() {
			return {
				sousuo:"",
				active: 0,
			};
		},
		components:{
			quanbu,
			gonyou
		},
		methods:{
			zichuan(zhi){
				this.active = zhi
			}
		}
	};
</script>

<style scoped>
	.quganji {
		width: 100%;
	}

	.sousuo {
		width: 100%;
		height: 120px;
		padding-top: 13%;
		background: url(../../assets/image/shouye/topbeijign.jpg) no-repeat;
		background-size: 100% 100%;
	}

	.sousuokuang {
		border-radius: 5px;
		width: 90%;
		margin: 0 auto;
	}
	
	.tabqiehuan{
		width: 100%;
		/* height: 1000px; */
		overflow-y: hidden;
	}
</style>
