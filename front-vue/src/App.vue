<template>

<h1>{{this.user.role}}</h1>

<!-- 1ere partie du header -->
<div class="px-3 py-2 ">
  <div class="container">

    <!-- Contient la première navbar logo + liens -->
    <div class="d-flex ">

      <!-- Logo -->
      <div class="flex-grow-1 ms-3">
       
        <router-link to="/">
          <img src="https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,w_200,g_face/v1661781662/inkable_rectangle_but7iu.png" alt="">
        </router-link>

        <!-- Liens -->
        <div class="flex-grow-1 ms-3">

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

            <li>
              <router-link to="/dashbord-pro" class="text-decoration-none" v-if="this.$store.state.user.role==='pro'">
                <div class="nav-link text-dark">
                  Dashboard
                </div>
              </router-link>
            </li>

            <li>
              <router-link to="/dashbord-particulier" class="text-decoration-none" v-if="this.$store.state.user.role==='consumer'">
                <div class="nav-link text-dark">
                  Dashboard
                </div>
              </router-link>
            </li>

            <li>
              <router-link to="/planning" class="text-decoration-none" v-if="this.$store.state.user.role==='pro'">
                <div class="nav-link text-dark">
                  Planning
                </div>
              </router-link>
            </li>

            <li>
              <router-link to="/compte-pro" class="text-decoration-none" v-if="this.$store.state.user.role==='pro'">
                <div class="nav-link text-dark">
                  Mon Compte
                </div>
              </router-link>
            </li>

            <li>
              <router-link to="/compte-particulier" class="text-decoration-none" v-if="this.$store.state.user.role==='consumer'">
                <div class="nav-link text-dark">
                  Mon Compte
                </div>
              </router-link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </div>
</div>

    <!-- 2eme partie -->

    
    <div class="px-3 py-2 border-bottom mb-3">

        <div class="text-end">
          <router-link to="/connexion">
            <button type="button" class="btn btn-light text-dark me-2 " v-if="this.$store.state.user.role==='anonyme'">Se connecter</button>
          </router-link>
          
            <button @click="deconnect" type="button" class="btn btn-light text-dark me-2" v-if="this.$store.state.user.role==='consumer'||this.$store.state.user.role==='pro'">Se déconnecter</button>
         
          <router-link to="/inscriptionConsumer">
            <button type="button" class="btn btn-primary me-2" v-if="this.$store.state.user.role==='anonyme'">Créer compte</button>
          </router-link>
          <router-link to="/inscriptionPro">
            <button type="button" class="btn btn-primary" v-if="this.$store.state.user.role==='anonyme'">Vous êtes tatoueur ?</button>
          </router-link> 
        </div>

    </div>

  <router-view />

<footer class="text-center text-lg-start bg-light text-muted">
  

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color:white;">
    © 2022 Copyright:
    <a class="text-reset fw-bold" href="/createurs">Créateurs du projet Inkable</a>
  </div>
  <!-- Copyright -->
</footer>





</template>

<script>

import Home from './views/Home.vue'
export default {
  name: 'App',
  components:{Home},
  
  computed:{
    user() {
          return this.$store.state.user
        },
    cities(){
        return this.$store.state.cities
    }
  },
 
  updated(){
    console.log("updated");
  },
  async created(){  
    
    //met le token dans le header 
    this.axios.defaults.headers.common['Authorization']=`Bearer ${localStorage.token}`;
    // try {
    //   await this.$store.dispatch('getUser');
      
    // } catch (error) {
    //   console.log(error)
    // }
    this.$store.dispatch('getAllStyles');
    this.$store.dispatch('getAllCities');
    
    //const test=await this.$store.dispatch('handleUploadToCloudinary')
    //console.log(test);

  },
  methods:{
    deconnect(){

      this.$store.dispatch('logout');
    }
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

.bi {
  color: white;

}
/* style="background-color: rgba(37, 117, 252, 1 */
</style>
