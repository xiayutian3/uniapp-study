<template>
	<view>
		<text>当前页面不存在！</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			// 2 s后返回首页
			let time = setTimeout(()=>{
				// 除去异步方法
				clearTimeout(time)
				//普通页面跳转
				// uni.navigateTo({
				// 	url:'/pages/index/index'
				// })
				
				//tabar页面跳转,  index页面变成了 tabbar的页面
				uni.switchTab({
					url:'/pages/index/index'
				})
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
