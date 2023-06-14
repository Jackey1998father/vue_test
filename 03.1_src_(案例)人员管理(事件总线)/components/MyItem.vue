<template>
  <div>
    <!-- 每一条数据   循环渲染，有多少数据渲染几次（计算属性）-->
    <div class="people" v-for="(p, index) in Arr" :key="index">
   
      <!-- 每一条数据的内容和复选框 -->
      <div>
        <!-- 给复选框添加点击事件，并且修改完里面的done值 -->
        <input type="checkbox" name=""  id=""  :checked="p.done"  @click="fun(p.id)" />
  
        <span>{{p.name}}</span>
      </div>
      <!-- 每一条内容最后的删除按钮  将要删除的对象id值传递给dele方法 -->
      <button class="dele" @click="dele(p.id)">删除</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {
      Arr: [],



    };
  },

  methods: {
    
    dele(ids) {
      //删除功能的实现
      console.log(ids);
      let result = this.Arr.filter(function (item) {
        //将不符该id值的其他对象筛选到一个数组里
        return item.id !== ids;
      });
      this.x.$emit("changeList",result);
       
      this.Arr = result

      // localStorage.setItem("obj", JSON.stringify(result)); //将筛选后对象数组重新赋值给obj值

      // location.reload();
    },

    fun(dataId) {
      //给复选框添加的点击事件方法，当被点击，数据里面的done值发取反
      // console.log(dataId);
      let res = this.Arr.map((element) => {
        //遍历Arr，找到与之对应传入的id值，然后将这个id的done值取反
        if (element.id == dataId) {
          element.done = !element.done;
        }
        return element; //返回整个数组元素
      });
      this.Arr = res
     
      this.x.$emit("getCheckedData", res);
      console.log(this.Arr );

    },
  },
  mounted() {
    this.x.$on("getData", (data) => {
      console.log("这边是items组件,已收到来自header的数据", data);
      this.Arr = data;
      
    });
  },
};
</script>

<style scoped>
.people {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 30px;
  background-color: rgb(241, 126, 126);
  border-radius: 7px;
  border-bottom: black 1px solid;
}
.dele {
  display: none;

  width: 100px;
  background-color: rgb(255, 255, 255);
  margin-right: 5px;
  text-align: center;
  line-height: 23px;
  height: 23px;
  border-radius: 7px;
  border: 1px rgb(0, 0, 0) solid;
}

.people:hover {
  background-color: rgb(161, 164, 163);
}
.people:hover .dele {
  display: block;
}
</style>