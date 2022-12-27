<template>
  <router-link to="/connexion">
    <button
      v-if="$store.state.user.role==='anonyme'"
      type="button"
      class="btn btn-light text-dark m-2 "
    >
      Se connecter
    </button>
  </router-link>
          
  <button
    v-if="$store.state.user.role==='consumer'||$store.state.user.role==='pro'"
    type="button"
    class="btn btn-light text-dark m-2"
    @click="deconnect"
  >
    Se déconnecter
  </button>
         
  <router-link to="/inscriptionConsumer">
    <button
      v-if="$store.state.user.role==='anonyme'"
      type="button"
      class="btn btn-primary m-2"
    >
      Créer compte
    </button>
  </router-link>
  <router-link to="/inscriptionPro">
    <button
      v-if="$store.state.user.role==='anonyme'"
      type="button"
      class="btn btn-primary"
    >
      Vous êtes tatoueur ?
    </button>
  </router-link>
</template>
<script>
export default {
    name: 'NavButtons',
    methods:{
        
        deconnect(){

            this.$store.dispatch('logout');
        }
    }
}
</script>