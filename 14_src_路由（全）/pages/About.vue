<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeRouteEnter(to, from, next) {
    console.log("123142");
    if (localStorage.getItem("school") == "安徽中医药学") {
      next();
    }
    else{
      alert("学校名不对！！！")
    }
  },
};
</script>

<style>
</style>