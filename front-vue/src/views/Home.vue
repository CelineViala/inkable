
<template>

<div class="row row-cols-2 row-cols-md-5 g-4">
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">studio nom</h5>
    <p class="card-text">tatoueur description</p>
    <a href="#" class="btn btn-primary">Entrer dans le studio</a>
      </div>
    </div>
  </div>
</div>


  <!-- <div class="pros">
    <div
      v-for="p in pro"
      class="pro"
    >
       
       <img
      src="{{p.profile_picture_path_pro}}"
      alt="PHOTO PROFIL"
    >
      <p>Nom studio:{{ p.studio_name }}</p>
      <p>Ville:{{ p.city }}</p>
      <div>
        <h2>Styles:</h2>
      <p v-for="style in p.styles">{{style.name}}</p>
      <router-link :to="{name:'Pro_detail', params:{id:p.id}}">
        En savoir +
      </router-link>
      </div>
    </div>
  </div> -->
</template>
<script>
const api="http://localhost:3000/api/pro"
export default {
  name:'Home',
  data(){
    return{
        pro:undefined
    }
  },
  created(){
    this.role="pro"
    console.log("test",this.role)
    this.axios
      .get('http://localhost:3000/api/pro')
      .then((response) => {
        console.log(response.data);
        this.pro=response.data;
      })
    this.$store.dispatch('check');
  }
    
}
</script>
<style>

.card {
  
}
</style>