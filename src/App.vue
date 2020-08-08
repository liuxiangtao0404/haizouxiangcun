<template>
  <div id="app">
    <router-view/>
	<bottom v-if="this.$store.state.pdshow"></bottom>
  </div>
</template>

<script>
	import bottom from 'components/bottom.vue'
	export default{
		name:"",
		data(){
			return{
				
			}
		},
		components:{
			bottom
		}
	}
</script>

<style lang="scss">
	ul{
		margin: 0;
		padding: 0;
	}
	li{
		list-style-type: none;
	}
	#app{
		width: 100%;
	}
	.van-nav-bar__text{
		color: black !important;
	}
	.van-nav-bar .van-icon{
		color: black !important;
	}
</style>
