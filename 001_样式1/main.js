
import Vue from 'vue'
import App from './App.vue'




Vue.config.productionTip = false

//应用ElementUI







new Vue({
  el: '#app',
  template: `<h1>你好啊</h1>`,
  render: h => h(App),
  data(){
    return{
    
    }
  }


})



