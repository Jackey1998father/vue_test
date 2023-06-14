<template>
  <div>
    <div class="shurukuang">
        <input @keyup="handleKeyDown"  type="text" v-model="value" placeholder="请输入姓名或者删除指定姓名"/>
    </div>
    
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  data(){
    return{
        value:"",
        
    }

  },
    computed:{
      obj(){
          return { id:nanoid() ,name:this.value, done:false}
      }
    },

  methods:{
    handleKeyDown(event){
        if(event.key == "Enter"){
            //   console.log(this.obj);
            let arr = JSON.parse(localStorage.getItem("obj")) || []
            arr.push(this.obj)
            console.log(arr);
            localStorage.setItem("obj",JSON.stringify(arr))
            location.reload();

            
        
        }
        
    }
  }


};
</script>
 
<style scoped>
.shurukuang,input{
    border-radius: 10px;
    
    width: 800px;
    height: 30px;
}
</style>