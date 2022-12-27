<template>
  <router-link
    v-if="$store.state.user.role==='pro'"
    class="text-decoration-none topnav_link"
    :to="{name :'ProfilPro', params: {id:$store.state.user.id}}"
  >
    <div class="nav-link text-dark">
      Mon profil
    </div>
  </router-link>
 

  
  <router-link
    v-if="$store.state.user.role==='pro'"
    to="/dashboard-pro"
    class="text-decoration-none topnav_link"
  >
    <div class="nav-link text-dark position-relative">
      Dashboard
      <i
        v-if="$store.state.hasNotif"
        class="bi bi-circle-fill text-danger"
      />
    </div>
  </router-link>


 
  <router-link
    v-if="$store.state.user.role==='consumer'"
    to="/dashboard-particulier"
    class="text-decoration-none topnav_link"
  >
    <div class="nav-link text-dark">
      Dashboard
      <i
        v-if="$store.state.hasNotif"
        class="bi bi-circle-fill text-danger"
      />
    </div>
  </router-link>


  
  <router-link
    v-if="$store.state.user.role==='pro'"
    to="/planning"
    class="text-decoration-none topnav_link"
  >
    <div class="nav-link text-dark">
      Planning
    </div>
  </router-link>


  
  <router-link
    v-if="$store.state.user.role==='pro'"
    to="/compte-pro"
    class="text-decoration-none topnav_link"
  >
    <div class="nav-link text-dark">
      Mon Compte
    </div>
  </router-link>
 


  <router-link
    v-if="$store.state.user.role==='consumer'"
    to="/compte-particulier"
    class="text-decoration-none topnav_link"
  >
    <div class="nav-link text-dark">
      Mon Compte
    </div>
  </router-link>
</template>
<script>
export default {
    name: 'NavItems',
    
}
</script>