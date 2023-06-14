<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <select v-model="opData">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="min">-</button>
    <button @click="jiAdd">当前求和为奇数可以加</button>
    <button @click="waitAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",

  data() {
    return {
      sum:0,
      opData:1,


    };
  },
  methods: {
    add(){
      this.sum = this.sum + parseInt(this.opData) 
    },
    min(){
      this.sum = this.sum - parseInt(this.opData) 
    },
    jiAdd(){
      if(this.sum %2 !== 0){
        this.sum = this.sum + parseInt(this.opData) 
      }
    },
    waitAdd(){
      setTimeout(()=>{
        this.sum = this.sum + parseInt(this.opData) 
      },1000)
      
    }


  },
};
</script>

<style scoped>
</style>