<template>
<h1>{{this.user}}</h1>
  <nav>
    <router-link to="/">
      Accueil
    </router-link> |
    
    <router-link to="/inscriptionPro">
      Inscriptions Pro
    </router-link> |
    <router-link to="/inscriptionConsumer">
      Inscriptions Consumer
    </router-link> |
    <router-link to="/connexion">
      Connexion
    </router-link> |

    <!-- <router-link to="/dashbord-pro" v-if="this.user==='pro'">
      DashboardPro
    </router-link> -->

    <router-link to="/profil-pro/1">
       ProfilPro
    </router-link> |

    <router-link to="/dashbord-pro" v-if="this.user==='pro'">
      DashboardPro
    </router-link> |
  
    <router-link to="/dashbord-particulier">
      DashboardParticulier
    </router-link> |

    <router-link to="/compte-pro">
      ComptePro
    </router-link> |  

    <router-link to="/compte-particulier">
      CompteParticulier
    </router-link> |

    <router-link to="/formulaire-project">
      FormulaireProject
    </router-link> |

    <router-link to="/project">
      Project
    </router-link> |

    <router-link to="/planning">
      Planning
    </router-link> |

    <router-link to="/page404">
      Page404
    </router-link>

  </nav>
  <router-view />
</template>

<script>

import Home from './views/Home.vue'
export default {
  name: 'App',
  components:{Home},
  data(){
        return {
          isPro:false,
      
        }
  },
  computed:{
    user() {
          return this.$store.state.user
        }
  },
  methods:{
     checkRole: async function(){
      console.log(localStorage.token)
      let role;
      try {
        const response=await this.axios.get('http://localhost:3000/checkRole');
        role= await response.data;
        
        
      } catch (error) {
        console.log(error)
      }
      if(role==='pro') this.isPro=true;
      
  }
  },
  updated(){
    console.log("updated");
  },
  created(){
    
    this.axios.defaults.headers.common['Authorization']=`Bearer ${localStorage.token}`;
    this.checkRole();
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
