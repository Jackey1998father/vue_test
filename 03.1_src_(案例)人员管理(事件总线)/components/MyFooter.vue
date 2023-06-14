<template>
  <div class="foot">
    <div>
      <input type="checkbox" name="" id="" :checked="bechecked == total&&bechecked!=0"/>
      
      <span>已完成{{bechecked}}/全部{{total}}</span>
    </div>

    <button ref="btn" @click="fn">清除指定选项</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      Arr: [],
    };
  },

  computed: {
    bechecked() {
        if(this.Arr==null){
            return 0
        }
      return this.Arr.filter( (e) => e.done == true ).length
    },
    total() {
        if(this.Arr==null){
            return 0
        }
      return this.Arr.length
    },
  },

  methods: {
    fn() {
      let arr1 = this.Arr.filter(function (e) {
        return e.done !== true;
      });
      this. Arr = arr1
      this.x.$emit("getData", arr1);
      this.x.$emit("changeList", arr1);
      

      // console.log();
    },
  },
  mounted() {
    this.x.$on("getCheckedData", (data) => {
      console.log("这边是Footer组件,已收到来自header的数据", data);
      this.Arr = data;
    });
  },
};
</script>

<style scoped>
.foot {
  border-radius: 10px;

  width: 800px;
  height: 50px;
  background-color: bisque;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: red;
  border-radius: 5px;
  margin-right: 10px;
  color: aliceblue;
  height: 30px;
}
</style>