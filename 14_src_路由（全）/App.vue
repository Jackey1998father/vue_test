
<template>
 
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vue App</title>
  <link rel="stylesheet" href="./css/bootstrap.css">
</head>
<body>
  <div>
    <div class="row">
     <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- vue中借助router-link标签实现路由的切换  最终标签转换成<a>标签-->
          <router-link class="list-group-item" active-class="active"  to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active"  to="/home"> Home </router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处展示的组件根据用户点击的导航项 -->
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
</template>

<script>
import Banner from './components/Bnner.vue'

export default {
  name: "App",
  components:{
    Banner,
  }

  

 
};
</script>

<style>
li {
  list-style: none;
}
.box{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}


</style>