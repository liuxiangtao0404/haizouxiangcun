<template>
	<div class="shouye">
		<van-sticky>
			<!-- 搜索 -->
			<div class="sousuo" type="primary">
				<van-field v-model="sousuo" class="sousuokuang" left-icon="search" placeholder="搜一搜你喜欢的" />
			</div>
		</van-sticky>
			
		<!-- tab切换 -->
		<div>
			<van-tabs v-model="active" sticky offset-top="119px" line-height=0 title-active-color="#008a22" color="#0084FF">
				<van-tab title="关注">
					关注
				</van-tab>
				<van-tab title="推荐">
					<tuijian></tuijian>
				</van-tab>
				<van-tab title="视频">
					视频
				</van-tab>
				<van-tab title="湖南省">
					湖南省
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import tuijian from '../../components/shouyezujian/tuijian.vue'
	export default {
		name: "shouye",
		data() {
			return {
				sousuo: "",
				active: 1
			}
		},
		components: {
			tuijian
		},
		created() {
			this.$store.state.pdshow = true
		}
	}
</script>

<style scoped>
	.shouye {
		width: 100%;
	}

	.sousuo {
		width: 100%;
		height: 120px;
		padding-top: 13%;
		background: url(../../assets/image/shouye/topbeijign.jpg) no-repeat;
		background-size: 100% 100%;
	}
	.sousuokuang{
		border-radius: 5px;
		width: 90%;
		margin: 0 auto;
	}
</style>
