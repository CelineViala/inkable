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
const store = require('../store')

const routes=[
    {
        name:'Home',
        path:'/',
        component: Home,
        meta:{
            roles:['pro', 'consumer','anonyme']
        }
    },
    {
        name:'DashboardPro',
        path:'/dashbord-pro',
        component: DashboardPro,
        meta:{
            roles:['pro']
        }
    },
    {
        name:'InscriptionPro',
        path:'/inscriptionPro',
        component:InscriptionPro,
        meta:{
            roles:['anonyme']
        }
    },
    {
        name:'Connexion',
        path:'/connexion',
        component:Connexion,
        meta:{
            roles:['anonyme']
        }
    },
    {
        name:'InscriptionConsumer',
        path:'/inscriptionConsumer',
        component:InscriptionConsumer,
        meta:{
            roles:['anonyme']
        }
    },
    {
        name:'FormulaireProject',
        path:'/formulaire-project/:proId',
        component:FormulaireProject,
        meta:{
            roles:['consumer']
        }
    },
    {
        name:'Project',
        path:'/project/:id',
        component:Project,
        meta:{
            roles:['pro']
        }
    },
    {
        name:'ProjectParticulier',
        path:'/project-particulier',
        component:ProjectParticulier,
        meta:{
            roles:['consumer']
        }
    },
    {
        name:'ProfilPro',
        path:'/profil-pro/:id',
        component:ProfilPro,
        meta:{
            roles:['pro', 'consumer','anonyme']
        }
    },
    {
        name:'DashboardParticulier',
        path:'/dashbord-particulier',
        component:DashboardParticulier,
        meta:{
            roles:['consumer']
        }
    },
    {
        name:'CompteParticulier',
        path:'/compte-particulier',
        component:CompteParticulier,
        meta:{
            roles:['consumer']
        }
    },
    {
        name:'ComptePro',
        path:'/compte-pro',
        component:ComptePro,
        meta:{
            roles:['pro']
        }
    },

    {
        name:'Planning',
        path:'/planning',
        component:Planning,
        meta:{
            roles:['pro']
        }
    },
    {
        name:'404',
        path:'/page404',
        component:Page404,
        meta:{
            roles:['pro', 'consumer','anonyme']

        }
    },
    {
        name:'createurs',
        path:'/createurs',
        component:Createurs,
        meta:{
            roles:['pro', 'consumer','anonyme']
        }
    },
    
];

const router=createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach(async (to,from,next)=>{
    
    try {
        await store.default.dispatch('getUser');    
    } catch (error) {
        console.log(error);
    }


    if(to.meta.roles && !to.meta.roles.includes(store.default._state.data.user.role)){
        next({
        path:'/connexion',
    })   
    }
      


    else next();
   
})



export default router;