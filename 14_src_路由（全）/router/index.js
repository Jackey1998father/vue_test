//该文件专门用来创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由器
const router =  new VueRouter({
    mode:"hash",
    routes: [
        { path: '/about', component: About },
        {
            path: '/home',
            component: Home,
            
            children: [
                { path: 'news', component: News , meta:{isAuth:true},},   //子路由不需要加斜杠
                { 
                    path: 'message', component: Message ,meta:{isAuth:true},
                    children:[
                        {name:"xiangqing",path:'detail/:id/:name',component: Detail ,props:true}
                    ]
                },

            ]
        },


    ]

})


//路由守护，权限的设置：
router.beforeEach((to,from,next)=>{
    console.log(to);
    // if(to.path ==="/home/message"||to.path ==="/home/news"){
       if("前置路由首首位",to.meta.isAuth == true){ //判断是否需要鉴权
        if(localStorage.getItem('school')=='安徽中医药大学'){
            next()
        }else{
            alert("学校名不对！！！！")
        }

    }else{
        next()
    }
    


})




export default router


