<template>
<div>
    <!-- 接收数据（接受在在组件的route上的query里面） -->
    姓名:{{name}}<br>
    id:{{id}}
</div>
  
</template>

<script>
export default {    
    name:'Detail',
    props:["id","name"]

}
</script>

<style>

</style>