
import Vue from 'vue'
//引入
import VueRouter from 'vue-router'
import App from './App.vue'

//引入路由器
import router from './router/index'
Vue.config.productionTip = false

Vue.use(VueRouter)





new Vue({
  el:'#app',
  template:`<h1>你好啊</h1>`,
  render: h => h(App),
  router //添加路由配置项
 
})



