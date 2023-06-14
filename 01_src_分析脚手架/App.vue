
<template>
  <div>
    <!-- <img src="./assets/logo.png" alt="logo"> -->
    <h1>你好啊</h1>
   
    <SchoolC></SchoolC> <hr>
    <StudentC name="kk" age="125673"></StudentC><hr>
    <StudentC name="kjk" age="123"></StudentC><hr>
    <StudentC name="342" age="54656"></StudentC><hr>
  </div>
</template>

<script>
import Vue from 'vue'

import SchoolC from "./components/SchoolC.vue";
import StudentC from "./components/StudentC.vue";

const App = Vue.extend({
  name: "App",
  components: {
    SchoolC,
    StudentC,
  },
});

export default App; //暴露
</script>

<style>
</style>