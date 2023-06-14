<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="keyword" placeholder="enter the name you search"/>
                   
        &nbsp;<button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data(){
    return{
      keyword:'',
    }
  },

  
  methods: {
    searchUsers() {
      axios.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => { 
          console.log("请求成功了", response.data);
           this.x.$emit("getListData", response.data.items);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
   
  },




};
</script>


<style>
</style>