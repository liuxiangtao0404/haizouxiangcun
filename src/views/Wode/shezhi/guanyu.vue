<template>
	<div class="guanyu">
		<van-nav-bar title="关于嗨走乡村" left-arrow @click-left="fanhui()" />
		<div class="wenzi">
			嗨走乡村是一个垂直于中国乡村领域的信息资
			讯、社交服务平台。通过互联网挖掘整合优质乡村
			旅游资源、乡村文化资源、农副土特产等资源,实
			现乡村资源数字化和信息化。再通过移动互联网精
			准推送给城市用户，让更多的城市用户认识农村，
			了解农村,走进农村，体验农村，热爱农村,最终实
			现城村信息无障碍交流，达到乡村资源价值变现的
			目的。从而助推中国美丽乡村建设,助力三农快速
			高效发展。
		</div>
	</div>
</template>

<script>
	export default{
		name:"guanyu",
		data(){
			return{
				
			}
		},
		methods:{
			fanhui() {
				this.$router.go(-1)
				this.$store.state.erjiif = true
			},
		}
	}
</script>

<style scoped>
	.guanyu{
		color: black;
		background: white;
	}
	.wenzi{
		width: 90%;
		font-size: 14px;
		margin: 0 auto;
		text-indent: 20px;
		line-height: 25px;
	}
</style>
