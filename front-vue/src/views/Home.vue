<template>

<div class="container">
  <form>
  <select class="form-select" aria-label="Default select example">
  <option selected>Choisissez une ville</option>
  <option value="1">Toulouse</option>
  <option value="2">Paris</option>
</select>
  <select class="form-select" aria-label="Default select example">
  <option selected>Choisissez un style</option>
  <option value="1">Tribal</option>
  <option value="2">Floral</option>
</select>
  <div class="form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="colorTatoo" checked>
  <label class="form-check-label" for="flexCheckDefault">
    Couleur
  </label>
</div>
<div class="form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="bAndWTatto" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Noir et Blanc
  </label>
</div>
<div>
  <button type="submit" class="btn btn-primary">Filtrer</button>
</div>

</form>
</div>

<div class="container">
  <div class="row row-cols-2 row-cols-md-5 g-4">
  <div class="col" v-for="p in pro">
    <div class="card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="image tatoueur">
      <div class="card-body">
        <h5 class="card-title">{{p.studio_name}}</h5>
    <p class="card-text">{{p.city}}</p>
    <router-link :to="{name:'ProfilPro'}" class="btn btn-primary">Voir plus</router-link>
      </div>
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
