<template>
	<view>
		<text>list页</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			//不同平台判斷 只在H5平台使用  
			//條件判斷
			// #ifdef H5  
			alert('Hi好')
			// #endif
			
			
			
			//運行時判斷 不同平台
			switch(uni.getSystemInfoSync().platform){
				case 'android':
					console.log('運行在Android')
					break;
				case 'ios':
					console.log('運行在Ios')
					break;
				default:
					console.log('運行在開發者工具')
					break;
			}
			
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
