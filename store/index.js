import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		userName: uni.getStorageSync('userName')? uni.getStorageSync('userName'):'未登錄用戶'
	},
	mutations:{
		LOGIN(state,value){
			//保存信息
			uni.setStorageSync('userName',value)
			state.userName = value
		},
		LOGOUT(state){
			//清楚狀態
			uni.clearStorageSync()
			state.userName = '退出狀態用戶'
		}
	},
	actions:{
		login(context,userName){
			context.commit('LOGIN',userName)
		},
		logout(context){
			context.commit('LOGOUT')
		}
	}
	
})

export default store