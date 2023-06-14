<template>
<div>
    <div class="card" v-for="(p) in Arr" :key="p.login">
    <a :href="p.html_url" target="_blank">
      <img :src="p.avatar_url" style="width: 100px" />
    </a>
    <p class="card-text">{{p.login}}</p>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'List',
  data(){
    return{
        Arr:[]
    }
  },
 mounted(){
    this.x.$on("getListData", (data) => {
      console.log("这边是List组件", data);
      this.Arr = data;
    })
 }
};
</script>

<style>
</style>