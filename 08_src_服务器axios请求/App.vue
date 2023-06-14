
<template>
  <div>
    <MyList/>
  </div>
</template>

<script>
import Vue from 'vue'

import MyList from "./components/MyList.vue"

const App = Vue.extend({
  name: "App",
  components:{
    MyList
  }


});

export default App; //暴露
</script>

<style >


</style>