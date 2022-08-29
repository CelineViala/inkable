<template>
  <section class="border-bottom pb-3 mb-3 gradient-custom">
    <div class="container py-5 h-10">

      <!-- Partie recherche -->
      <div class="card bg-dark text-white" style="border-radius: 1rem;">
        <div class="card-body p-4 text-center">
          <!-- Formulaire de recherche -->
          <form>
            <!-- Ville -->
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Choisissez une ville</option>
                <option v-for="city in this.$store.state.cities" :value="city">{{city}}</option>
              </select>
            </div>

            <!-- Style -->
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>Choisissez un style</option>
                <option v-for="style in this.$store.state.styles" :value="style">{{style}}</option>
              </select>
            </div>

            <!-- Checkbox -->
            <div class="mb-3">
              <div class="form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="colorTatoo" checked>
                <label class="form-check-label" for="flexCheckDefault">
                  Couleur
                </label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="bAndWTatto" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Noir et Blanc
                </label>
              </div>
            </div>

            <div>
              <button type="submit" class="btn btn-primary">Filtrer</button>
            </div>

          </form>
        </div>
      </div>


    </div>

    <div class="container py-5 h-10">

      <div class="row row-cols-2 row-cols-md-5 g-4">

        <div class="col" v-for="p in pro">

          <div class="card bg-dark text-white">
            
            <img src="https://picsum.photos/200" class="card-img-top" alt="image tatoueur">
            
            <div class="card-body">
              <h5 class="card-title">{{p.studio_name}}</h5>
              <p class="card-text">{{p.city}}</p>
              <router-link :to="{name:'ProfilPro',params:{id:p.id}}" class="btn btn-primary">Voir plus</router-link>
            </div>

          </div>

        </div>
      
      </div>
    </div>
  </section>
</template>
<script>
const api="http://localhost:3000/api/pro"
export default {
  name:'Home',
  data(){
    return{
        cities:[],
        styles:[],
        pro:undefined
    }
  },
  created(){
    
    this.axios
      .get('http://localhost:3000/api/pro')
      .then((response) => {
        console.log(response.data);
        this.pro=response.data;
      })
      .catch((err)=> console.log(err));
  }
    
}
</script>
