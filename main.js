import App from './App'
// 全局狀態管理
import store from '@/store/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
	
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif