<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/pages/404/404">404页面</navigator>
		<view>
			<navigator url="/subpages/chat/chat">前往聊天</navigator>
		</view>
		<child :msg="title" @childEvent="sayHello"></child>
		<view class="">
			狀態管理vuex
			<view class="">
				<text>username:{{userName}}</text>
				<button type="default" @click="login('小紅')">login</button>
				<button type="default" @click="logout">logout</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed:{
			...mapState(['userName'])
		},
		components:{
			Child
		},
		onLoad() {
		//获取当前页面的实例,也可以获取到传递的参数
			console.log(getCurrentPages())
			// console.log(this.$store)
			
			// 環境判斷
			if(process.env.NODE_ENV == 'development'){
				console.log('開發環境')
			}else{
				console.log('生產環境')
			}
		},
		// 监听页面下拉刷新事件
		onPullDownRefresh(){
			console.log('页面下拉刷新')
		},
		methods: {
			sayHello(value){
				this.title = value
			},
			...mapActions(['login','logout'])
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
