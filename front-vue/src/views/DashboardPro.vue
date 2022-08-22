
<template>
  <h1>Dashboard Pro</h1>
 
 <!-- Premier système de rows et colonnes pour l'image de prfils , le nom et la ville du tatoueur -->
<div class="container text-center">

  <div class="row row-cols-2">
    
    <div class="col-3">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

    <div class="col">
      <div class="row">Nom tatoueur</div>
      <div class="row">Ville</div>
    </div>

  </div>

</div>
<br>

<!-- Second système de rows et colonnes pour la galerie -->
<div class="container text-center">

<div class="row-cols-2">
  <div class="col-6">
    <img src="https://picsum.photos/400" class="img-fluid" alt="image">
  </div>


  <div class="row">

    <div class="col-4 col-sm-4">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

    <div class="col-4 col-sm-4">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>
    <br>

    <div class="col-4 col-sm-4">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

    <div class="col-4 col-sm-4">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

  </div>

</div>

</div>

<!-- Spécialités -->
<div class="<container">
  <span class="badge text-bg-dark">Spécialité 1</span>

  <span class="badge text-bg-dark">Spécialité 2</span>
</div>

<!-- couleur et NB -->
<div class="<container">
  <span class="badge text-bg-dark">Couleur</span>

  <span class="badge text-bg-dark">Noir et Blanc</span>
</div>

<div class="<container">
  <div class="row row-cols-2">

    <div class="col-3">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>

    <div class="col">
      <a class="btn btn-primary" href="#" role="button">Prendre rendez-vous</a>
      <br>
      <a class="btn btn-outline-primary" href="#" role="button">Instagram</a>
    </div>

  </div>


</div>


</template>
<script>

export default {
  name:'DashboardPro',
  data(){
    return{
       
    }
  },
  created(){
    // this.role="pro"
    // console.log("test",this.role)
    // this.axios
    //   .get('http://localhost:3000/api/pro')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.pro=response.data;
    //   })
  }
    
}
</script>
<style>

</style>