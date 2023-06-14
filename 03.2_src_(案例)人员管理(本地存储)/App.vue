
<template>
  <div>
    <div class="background">
      <MyHeader></MyHeader>
      <MyList></MyList>
      <MyFooter></MyFooter>


    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";


const App = Vue.extend({
  name: "App",
  
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
 

 

  
});

export default App; //暴露
</script>

<style >
.background{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  height: 500px;
  width: 1000px;
  background-color: pink;
  border: 1px black solid;
  border-radius: 25px
}


</style>