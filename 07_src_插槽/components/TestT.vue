<template>
  <div>
    <div class="list" @click="hover" :class="Style">
      <h1 >{{title}}</h1>
      <slot></slot>
    </div>


  </div>
</template>

<script>
export default {
  name: "TestT",
  props:["dataList","title"],
  data() {
    return {
      num:0,
      Style:'none',
      none:"red"


    };
  },
  methods: {
    hover(){
      // console.log("nihao");
      this.num++
      console.log( this.num);
      let temp = ""
      temp = this.Style
      this.Style = this.none
      this.none = temp 



    }


  },
};
</script>

<style scoped>
.list{
  height:250px;
  width: 200px;
  background-color: pink;
}

h1{
 margin:0 auto;
 text-align: center;
}
h1:hover {
  color: aqua;
}
.red{
  color: red;
}


</style>