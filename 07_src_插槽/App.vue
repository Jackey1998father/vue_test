
<template>
  <div class="box"> 
    <TestT title="美食" :dataList="food">
      <ul>
        <li v-for="(p, index) in food" :key="index">{{ p }}</li>
      </ul>
    </TestT>
    <TestT title="爱海" :dataList="hooby"
      ><ul>
        <li v-for="(p, index) in hooby" :key="index">{{ p }}</li>
      </ul>
    </TestT>
    <TestT title="安抚" :dataList="junior"
      ><ul>
        <li v-for="(p, index) in junior" :key="index">{{ p }}</li>
      </ul></TestT
    >
    <TestT title="法国" :dataList="gning"
      ><ul>
        <li v-for="(p, index) in gning" :key="index">{{ p }}</li>
      </ul></TestT
    >
  </div>
</template>

<script>
import TestT from "./components/TestT.vue";

export default {
  name: "App",
  methods: {},
  data() {
    return {
      food: ["3hfgjf", "3sdfg", "3f576sdg4", "3fa"],
      hooby: ["3hdsjf", "3ssd47dfg", "3fs47dg4", "3f74a"],
      junior: ["3425hfgjf", "3sdfg", "3fsdg4", "3f64a"],
      gning: ["3hf543gjf", "3sd42fg", "3fsdg4", "3fa"],
    };
  },
  components: {
    TestT,
  },
};
</script>

<style>
li {
  list-style: none;
}
.box{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}


</style>