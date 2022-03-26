<script>
	export default {
		onLaunch: function() {
			console.log('App Launch123')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound: function(){
			// 如果页面不存在只会报错，并不会触发onPageNotFound。https://blog.csdn.net/m0_55969466/article/details/122169835
			// url跳转 404 
			console.log('not found')
			uni.navigateTo({
				url:'pages/404/404'
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
