<template>
  <li class="list" >
    <MyItem></MyItem>
    
  </li>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
};
</script>


<style>
.list {
  width: 800px;

  background-color: aqua;

  border: 2px gray solid;
}

li{
    list-style: none;
}
</style>