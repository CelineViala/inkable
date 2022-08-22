import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import dashboardPro from '@/views/DashboardPro.vue';
import Product from '@/views/Product.vue';
import Pro from '@/views/Pro.vue';
import InscriptionPro from '@/views/InscriptionPro.vue';
import InscriptionConsumer from '@/views/InscriptionConsumer.vue';
import Connexion from '@/views/Connexion.vue';
import Project from '@/views/Project.vue'


const routes=[
    {
        name:'Home',
        path:'/',
        component: Home,
        meta:{
            allowAnonymous:true
        }

    },
    {
        name:'DashboardPro',
        path:'/dashbord-pro',
        component: dashboardPro,
        meta:{
            allowAnonymous:true,
            hide:true
        }
    },
    
    {
        name:'Pro_detail',
        path:'/proDetail/:id',
        component:Pro,
        props:true,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'InscriptionPro',
        path:'/inscriptionPro',
        component:InscriptionPro,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'Connexion',
        path:'/connexion',
        component:Connexion,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'InscriptionConsumer',
        path:'/inscriptionConsumer',
        component:InscriptionConsumer,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'Project',
        path:'/project',
        component:Project,
        meta:{
            allowAnonymous:true
        }
    },
    
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    console.log("before",to,from)
    console.log(to.meta.allowAnonymous)
    
    if(!to.meta.allowAnonymous)
        next({
             path:'/connexion',
         })
    else next();
   
})

export default router;