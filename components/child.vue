<template>
	<view>
		<text class="child">我是text組件</text>
		<view>{{msg}}</view>
		<button type="default" @click="childEventFn">觸發事件</button>
	</view>
</template>

<script>
	// 逐漸的封裝和註冊跟vue是一樣的
	export default {
		name:"child",
		props:['msg'],
		data() {
			return {
				
			};
		},
		methods:{
			// 觸發事件
			childEventFn(){
				this.$emit('childEvent','來自子組件的消息')
				
				//觸發 uni 全局自定義事件
				uni.$emit('getInfo','uni傳遞的參數')
			}
		}
	}
</script>

<style lang="scss" scoped>
.child{
	color: red;
}
</style>
