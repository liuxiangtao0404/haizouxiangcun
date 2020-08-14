<template>
	<div class="smyz">
		<van-nav-bar title="实名认证" left-text="返回" left-arrow @click-left="fanhui()" />

		<div class="bianju">
			<van-field v-model="user" label="真实姓名:" placeholder="请输入真实的姓名" />
			<van-field v-model="sfz" label="身份证号:" placeholder="请输入身份证号号码" />
		</div>

		<div class="shangchuan bianju">
			<div>上传手持身份证证件照</div>
			<van-row>
				<van-col span="12">
					上传正面照
				</van-col>
				<van-col span="12">
					示例
				</van-col>
				<van-col span="12">
					<van-uploader v-model="zheng" multiple :max-count="1" />
				</van-col>
				<van-col span="12">
					<img src="https://s1.ax1x.com/2020/08/12/aXWHxA.jpg" width="60%">
				</van-col>
			</van-row>
			<van-row>
				<van-col span="12">
					上传反面照
				</van-col>
				<van-col span="12">
					示例
				</van-col>
				<van-col span="12">
					<van-uploader v-model="fan" multiple :max-count="1" />
				</van-col>
				<van-col span="12">
					<img src="https://s1.ax1x.com/2020/08/12/aXWqKI.jpg" width="60%">
				</van-col>
			</van-row>
		</div>
		<div class="gddw">
			<van-button type="primary" size="large" color="#f56b12" @click="tijiao()">提交审核</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shimingyanzheng",
		data() {
			return {
				user: "",
				sfz: "",
				zheng: [],
				fan:[]
			}
		},
		created() {
			this.$store.state.erjiif = false
		},
		methods: {
			fanhui() {
				this.$router.go(-1)
				this.$store.state.erjiif = true
			},
			tijiao(){
				this.$router.go(-1)
				this.$store.state.erjiif = true
			}
		}
	}
</script>

<style scoped>
	.smyz {
		width: 100%;
		background: #f6f6f6;
	}

	.bianju {
		margin: 5% 0;
		background: white;
	}

	.shangchuan>div {
		width: 90%;
		margin: 0 auto;
		padding: 1% 0;
		font-size: 14px;
		box-sizing: border-box;
		border-bottom: 1px solid #e5e5e5;
	}
	.gddw {
		width: 90%;
		margin: 2% 0;
		position: fixed;
		bottom: 0;
		left: 5%;
	}
</style>
