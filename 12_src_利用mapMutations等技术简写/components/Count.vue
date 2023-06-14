<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>乘以10倍后的结果{{ bigSum }}</h3>
    <select v-model="opData">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(opData)">+</button>
    <button @click="min(opData)">-</button>
    <button @click="jiAdd(opData)">当前求和为奇数可以加</button>
    <button @click="waitAdd(opData)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations,mapActions} from "vuex";
export default {
  name: "Count",

  data() {
    return {
      opData: 1,
    };
  },
  computed: {
    // sum(){
    //   return this.$store.state.sum

    // }
    //简写形式：(mapState)
    ...mapState({ sum: "sum" }), //mapState函数返回的是数组，所以需要展开运算符


    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    ...mapGetters({bigSum:"bigSum"}) //mapGetters函数返回的是数组，将Getters配置项里面面的数据读取出来
  },
  methods: {
    // add() {
    //   this.$store.commit("JIA", this.opData); //  ①当执行到“jia”的时候，会执行vuex里面的mutations的对象中的jia函数
    // },


    ...mapMutations({add:"JIA"}),


    // min() {
    //   this.$store.commit("JIAN", this.opData);  //如果没有逻辑加工可以直接跳过actions对象环节，执行commit到mutations环节（同上）
    // },


    ...mapMutations({min:"JIAN"}),

    
    // jiAdd() {
    //   this.$store.dispatch("jishuzizeng", this.opData);  
    // },

    
    
    // waitAdd() {
    //   this.$store.dispatch("waitAdd", this.opData);

    //   console.log(this);
    //   console.log(this.$store, "==============================");
    // },

   ...mapActions({jiAdd:"jishuzizeng",waitAdd:"waitAdd"}),

  },
};
</script>

<style scoped>
</style>