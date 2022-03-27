<template>
	<view>
		<text>我的</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// uni 提供的全局事件監聽
			uni.$on('getInfo',(value)=>{
				console.log(value)
				console.log('Me 頁面的全局事件監聽')
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
