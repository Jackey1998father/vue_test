
<template>
<div style="width:300px">
  <div v-for='(p,index) in data' :key="index" >
    <!-- <div :class='{"backOne":index%2 == 0,"backTwo":index%2 !== 0}'>{{p}} </div>   -->
    <div :class='{"backOne":index%2 == 0,}'>{{p}} </div>
  </div>
</div>

</template>

<script>


export default {
  name: "App",
  components:{
    
  },
  data(){
    return{
      data:["周一","周二","周三","周四","周二","周三","周四","周二","周三","周四"],
    }
  },
  methods:{
    
  },
  
};
</script>

<style>

.backOne{
  background-color: rgb(0, 0, 0);
  color: white;
}
.backTwo{
  background-color: red;
}


</style>