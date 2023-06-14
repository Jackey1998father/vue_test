<template>
  <div>
    <ul>
      <!-- 向路由组件添加数据 -->

      <!-- <li v-for="p in message" :key="p.id"><router-link :to=" `/home/message/detail?id=${p.id}&name=${p.name}`">{{p.title}}</router-link>&nbsp;&nbsp;</li> -->

      <!-- 对象配置路由路径 -->
      <!-- <li v-for="p in message" :key="p.id"><router-link :to="{
        path:'/home/message/detail',
        query:{
            id:p.id,
            name:p.name
        }
      }
      
      ">{{p.title}}</router-link>&nbsp;&nbsp;</li> -->

      <!-- 通过命名方法添加路径 -->
      <!-- <li v-for="p in message" :key="p.id">
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: p.id,
              name: p.name,
            },
          }"
          >{{ p.title }}</router-link
        >&nbsp;&nbsp;
        <button @click="pushFun(p)">push跳转</button>
        <button @click="replaceFun(p)">replace跳转</button>
      </li> -->
      <li v-for="p in message" :key="p.id"><router-link :to=" `/home/message/detail/${p.id}/${p.name}`">{{p.title}}</router-link>&nbsp;&nbsp;<button @click="pushFun(p)">push跳转</button>
        <button @click="replaceFun(p)">replace跳转</button></li>
      
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: [
        { id: "001", name: "tony", title: "消息1" },
        { id: "002", name: "tOm", title: "消息2" },
        { id: "003", name: "Alice", title: "消息3" },
      ],
    };
  },
  methods: {
    pushFun(p) {
      //通过自定义方法将进行页面跳转，可以指定push或者replace

      setTimeout(() =>{
        this.$router.push({
          //每个组件都有$router
          name: "xiangqing",
          params: {
            id: p.id,
            name: p.name,
          },
        });
      }, 1000);
    },
    replaceFun(p)   {
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: p.id,
          name: p.name,
        },
      });
    },
  },
};
</script>

<style>
</style>