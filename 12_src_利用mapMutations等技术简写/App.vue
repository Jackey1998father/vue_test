
<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from "./components/Count.vue";

export default {
  name: "App",
  methods: {},
  data() {
    return {
      
    };
  },
  components: {
    Count,
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