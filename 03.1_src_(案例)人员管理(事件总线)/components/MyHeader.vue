<template>
  <div>
    <div class="shurukuang">
      <input
        @keyup="handleKeyDown"
        type="text"
        v-model="value"
        placeholder="请输入姓名或者删除指定姓名"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      value: "",
      arr: [],
    };
  },
  computed: {
    obj() {
      return { id: nanoid(), name: this.value, done: false };
    },
  },

  methods: {
    handleKeyDown(event) {
      if (event.key == "Enter") {
        //   console.log(this.obj);
        // this.arr = JSON.parse(localStorage.getItem("obj")) || []
        this.arr.push(this.obj);

        this.x.$emit("getData", this.arr);
        // console.log(this.arr);
        this.x.$emit("getCheckedData",this.arr);
      }
    },
  },
  mounted() {
    this.x.$on("changeList", (data) => {
      console.log("这边是MyHeader", data);
      this.arr = data;
      
    });
  },
};
</script>
 
<style scoped>
.shurukuang,
input {
  border-radius: 10px;

  width: 800px;
  height: 30px;
}
</style>