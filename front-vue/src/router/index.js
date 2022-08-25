import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import InscriptionPro from '@/views/InscriptionPro.vue';
import InscriptionConsumer from '@/views/InscriptionConsumer.vue';
import Connexion from '@/views/Connexion.vue';
import DashboardPro from '@/views/DashboardPro.vue';
import DashboardParticulier from '@/views/DashboardParticulier.vue';
import ProfilPro from '@/views/ProfilPro.vue';
import FormulaireProject from '@/views/FormulaireProject.vue';
import Project from '@/views/Project.vue';
import CompteParticulier from '@/views/CompteParticulier.vue';
import ComptePro from '@/views/ComptePro.vue';
import Planning from '@/views/Planning.vue';
import Page404 from '@/views/Page404.vue';
import ProjectParticulier from '@/views/ProjectParticulier';
import Createurs from '@/views/Createurs.vue';

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
        component: DashboardPro,
        meta:{
            allowAnonymous:true,
            hide:true
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
        name:'FormulaireProject',
        path:'/formulaire-project',
        component:FormulaireProject,
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
    {
        name:'ProjectParticulier',
        path:'/project-particulier',
        component:ProjectParticulier,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'ProfilPro',
        path:'/profil-pro/:id',
        component:ProfilPro,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'DashboardParticulier',
        path:'/dashbord-particulier',
        component:DashboardParticulier,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'CompteParticulier',
        path:'/compte-particulier',
        component:CompteParticulier,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'ComptePro',
        path:'/compte-pro',
        component:ComptePro,
        meta:{
            allowAnonymous:true
        }
    },

    {
        name:'Planning',
        path:'/planning',
        component:Planning,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'404',
        path:'/page404',
        component:Page404,
        meta:{
            allowAnonymous:true
        }
    },
    {
        name:'createurs',
        path:'/createurs',
        component:Createurs,
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