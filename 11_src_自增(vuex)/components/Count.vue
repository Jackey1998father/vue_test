<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
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
      
      opData:1,


    };
  },
  methods: {
    add(){
      this.$store.dispatch('jia',this.opData)  //  ①当执行到“jia”的时候，会执行vuex里面的mutations的对象中的jia函数
    },
    min(){
      this.$store.dispatch('jian',this.opData)
    },
    jiAdd(){
      this.$store.dispatch('jishuzizeng',this.opData)
    },
    waitAdd(){
      
        this.$store.dispatch('waitAdd',this.opData)
      
      console.log(this);
      console.log(this.$store,"==============================");
    }


  },
};
</script>

<style scoped>
</style>