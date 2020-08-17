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
<<<<<<< HEAD
<<<<<<< HEAD
		mounted() {
			 this.getCookie();
		},
		methods:{
			// //读取cookie
			getCookie: function() {
				if (document.cookie.length > 0) {
					var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
					for (var i = 0; i < arr.length; i++) {
						var arr2 = arr[i].split('='); //再次切割
						//判断查找相对应的值
						if (arr2[0] == 'userName') {
							this.$store.state.dluser = arr2[1]
						} else if (arr2[0] == 'userPwd') {
							
						}
					}
				}
			}
		},
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
=======
>>>>>>> beb93cfe222bfe350d44f0c8340dd22fb16b92f2
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
