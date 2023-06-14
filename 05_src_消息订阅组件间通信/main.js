// ##该文件是整个项目的入口文件


//引入vue：
import Vue from 'vue'
//引入App组件，他是所有组件的父组件：
import App from './App.vue'
//关闭vue的生产提示：
Vue.config.productionTip = false


new Vue({
  el:'#app',
  template:`<h1>你好啊</h1>`,

  //一会解释：将App组件放入容器中
  render: h => h(App),
 
})



