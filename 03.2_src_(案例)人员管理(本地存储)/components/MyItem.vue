<template>
  <div>
    <div class="people" v-for="(p, index) in Arr" :key="index">
      <div>
        <input type="checkbox"  name=""  id="" :checked="p.done"  @click="fun(p.id)"/>
 
        <span>{{ p.name }} </span>
      </div>

      <button class="dele" @click="dele(p.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",

  computed: {
    Arr() {
      return JSON.parse(localStorage.getItem("obj")) ;
    },
  },
  methods: {
    dele(ids) {
      console.log(ids);

      let result = this.Arr.filter(function (item) {
        return item.id !== ids;
      });
      localStorage.setItem("obj", JSON.stringify(result)); //将删除后的数组赋值给obj值
      location.reload();
    },
    fun(ids2) {
      console.log(ids2);
       let res = this.Arr.map(element => {
        if(element.id == ids2) {
            element.done = !element.done
        }
        return element;
      })
      console.log(res);
      localStorage.setItem("obj", JSON.stringify(res));
      location.reload();
      



      
    },
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