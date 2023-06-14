<template>
  <div class="foot">
    <div>
      <input type="checkbox" name="" id="" :checked="bechecked == total&&bechecked!=0"/>
      <span>已完成{{ bechecked }}/全部{{ total }}</span>
    </div>

    <button ref="btn" @click="fn">清除指定选项</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  computed: {
    bechecked() {
        if(JSON.parse(localStorage.getItem("obj"))==null){
            return 0    
        }
 
      return JSON.parse(localStorage.getItem("obj")).filter( (e) => e.done == true ).length 
    },
    total() {
        if(JSON.parse(localStorage.getItem("obj"))==null){
            return 0    
        }

      return JSON.parse(localStorage.getItem("obj")).length  
    },
  },

  methods: {
    fn() {
       
      this.$refs.btn.style.backgroundColor = "pink";
      setTimeout(() => {
        this.$refs.btn.style.backgroundColor = "red";
      }, 50);
      // console.log(JSON.parse(localStorage.getItem("obj")));

      let arr1 = JSON.parse(localStorage.getItem("obj")).filter(function (e) {
        return e.done !== true;
      });

      localStorage.setItem("obj", JSON.stringify(arr1));
      location.reload();

      // console.log();
    },
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