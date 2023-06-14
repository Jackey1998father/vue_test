
<template>
<div>
  <div v-for='(p,index) in data' :key="index"  @click="fn(index)">
    <span :class='{"RED":index === num}'>{{p}} </span>----- <button :class='{"anniu":index === num}'>按钮</button>
  </div>


  <button @click="appear">点击</button>
  <h1 v-show="a">你好</h1>

</div>

</template>

<script>


export default {
  name: "App",
  components:{
    
  },
  data(){
    return{
      data:["周一","周二","周三","周四"],
      num:-1,
      a:false

    }
  },
  methods:{
    fn(index){
      this.num = index
    },
    appear(){
    this.a =!this.a
  }
  },
  
};
</script>

<style>
.RED{
  color: red;
}
.anniu{
  background-color: pink;
}


</style>