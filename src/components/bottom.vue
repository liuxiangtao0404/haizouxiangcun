<template>
	<ul class="tabs">
		<router-link to="/" tag="li" @click.native="tab(1)">
			<div>
				<img :src="syimg" width="70%">
				<div :class="{lvse:pdlvse == 1}">首页</div>
			</div>
		</router-link>
		
		<router-link to="/youtaxiang" tag="li" @click.native="tab(2)">
			<div>
				<img :src="ytximg" width="70%">
				<div :class="{lvse:pdlvse == 2}">游他乡</div>
			</div>
		</router-link>
		
		<li style="width: 15%;">
			<img src="../assets/image/tabs/tianjia.jpg" width="100%">
		</li>
		
		<router-link to="/quganji" tag="li" @click.native="tab(3)">
			<div>
				<img :src="qgjimg" width="70%">
				<div :class="{lvse:pdlvse == 3}">去赶集</div>
			</div>
		</router-link>
		
		<router-link to="/wode" tag="li" @click.native="tab(4)">
			<div>
				<img :src="wdimg" width="70%">
				<div :class="{lvse:pdlvse == 4}">我的</div>
			</div>
		</router-link>
	</ul>
</template>

<script>
	export default{
		name:"app",
		data(){
			return{
				syimg:require('assets/image/tabs/shouye-0.jpg'),			//动态首页图片
				ytximg:require('assets/image/tabs/youtaxiang-0.jpg'),		//动态游他乡图片
				qgjimg:require('assets/image/tabs/quganji-0.jpg'),			//动态去赶集图片
				wdimg:require('assets/image/tabs/wode-0.jpg'),				//动态我的图片
				pdlvse:0,													//底部css切换颜色
			}
		},
		methods:{
			tab(zhi){
				localStorage.setItem('id',zhi)
				this.pdlvse = localStorage.getItem('id')
				this.syimg=require('assets/image/tabs/shouye-0.jpg')
				this.ytximg=require('assets/image/tabs/youtaxiang-0.jpg')
				this.qgjimg=require('assets/image/tabs/quganji-0.jpg')
				this.wdimg=require('assets/image/tabs/wode-0.jpg')
				if(this.pdlvse == 1){
					this.syimg=require('assets/image/tabs/shouye-1.jpg')
					localStorage.setItem('syimg',this.syimg)
				}else if(this.pdlvse == 2){
					this.ytximg=require('assets/image/tabs/youtaxiang-1.jpg')
					localStorage.setItem('ytximg',this.ytximg)
				}else if(this.pdlvse == 3){
					this.qgjimg=require('assets/image/tabs/quganji-1.jpg')
					localStorage.setItem('qgjimg',this.qgjimg)
				}else if(this.pdlvse == 4){
					this.wdimg=require('assets/image/tabs/wode-1.jpg')
					localStorage.setItem('wdimg',this.wdimg)
				}
			}
		},
		mounted() {
			this.pdlvse = localStorage.getItem('id')
			if(this.pdlvse == 1){
				this.syimg=localStorage.getItem('syimg')
			}else if(this.pdlvse == 2){
				this.ytximg=localStorage.getItem('ytximg')
			}else if(this.pdlvse == 3){
				this.qgjimg=localStorage.getItem('qgjimg')
			}else if(this.pdlvse == 4){
				this.wdimg=localStorage.getItem('wdimg')
			}
		}
	}
</script>

<style>
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
	
	.tabs{
		width: 100%;
		height: 60px;
		padding: 2% 0;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		background: white;
		border-top: 2px solid #e8e8e8;
	}
	.tabs>li{
		width: 12%;
		margin: 0 5%;
		height: 60px;
		font-size: 10px;
		text-align: center;
		flex-direction: column;
	}
	.lvse{
		color: #007410;
	}
</style>
