<template>
	<view>
		<!-- <template></template> -->
		<text>聊天</text>
		<!-- 聊天列表 -->
		
		
		
		<!-- 聊天輸入 -->
		<input type="text" placeholder="請輸入聊天內容" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList:[
					{
						isMe:false,
						type:'txt',
						content:'helli'
					},
					{
						isMe:false,
						type:'img',
						// 在標籤中使用圖片鏈接需要加@符號,  在js中不需要添加 @,
						content:'/static/logo.png'
					},
				],
				myInput:''
			}
		},
		onShow() {
			//如果數據存在
			if(!!uni.getStorageSync('storage_key')){
				this.chatList = JSON.parse(uni.getStorageSync('storage_key'))
				//将页面滚动到目标位置。滑到最底部
				uni.pageScrollTo({
					scrollTop: 9999999,
					duration: 300
				});
			}
		},
		methods: {
			//本地選擇圖片 函數
			chooseImgFn(){
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success:  (res)=> {
						console.log(JSON.stringify(res.tempFilePaths));
						
						// 我自己的數據
						let sendMsg = {
							isMe:true,
							type:'img',
							content:res.tempFilePaths[0]
						}
						//網數據中追加數據
						this.chatList.push(sendMsg)
						
						// 小姐姐的數據
						let resMsg = {
							isMe:false,
							type:'img',
							content:res.tempFilePaths[0]
						}
						//網數據中追加數據
						this.chatList.push(resMsg)
						
						//将页面滚动到目标位置。滑到最底部
						uni.pageScrollTo({
							scrollTop: 9999999,
							duration: 300
						});
						
						//存儲數據 本地
						uni.setStorageSync('storage_key', JSON.stringify(this.chatList));
					}
				});	
			},
			// 發送信息
			sendMsg(){
				if(!this.myInput) return
				// 我自己的數據
				let sendMsg = {
					isMe:true,
					type:'text',
					content: this.myInput
				}
				//網數據中追加數據
				this.chatList.push(sendMsg)
				
				
				// 小姐姐的數據
				let resMsg = {
					isMe:false,
					type:'text',
					content:this.myInput
				}
				//網數據中追加數據
				this.chatList.push(resMsg)
				
				//清空輸入數據
				this.myInput = ''
				
				//将页面滚动到目标位置。滑到最底部
				uni.pageScrollTo({
					scrollTop: 9999999,
					duration: 300
				});
				
				//存儲數據 本地
				uni.setStorageSync('storage_key', JSON.stringify(this.chatList));
			}
		}
	}
</script>

<style>

</style>
