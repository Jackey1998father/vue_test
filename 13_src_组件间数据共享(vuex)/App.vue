
<template>
  <div>
    <Count/>
    <hr >
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  methods: {},
  data() {
    return {
      
    };
  },
  components: {
    Count,
    Person
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