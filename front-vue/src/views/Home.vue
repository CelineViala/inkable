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
              <select v-model="searchForm.city" class="form-select" aria-label="Default select example">
                <option value="default">Choisissez une ville</option>
                <option v-for="city in this.$store.state.cities" :value="city">{{city}}</option>
              </select>
            </div>

            <!-- Style -->
            <div class="mb-3">
              <select v-model="searchForm.style" class="form-select" aria-label="Default select example">
                <option value="default">Choisissez un style</option>
                <option v-for="style in this.$store.state.styles" :value="style">{{style}}</option>
              </select>
            </div>

            <!-- Checkbox -->
            <div class="mb-3">
              <div class="form-check-inline">
                <input v-model="searchForm.color" class="form-check-input me-2" type="checkbox" id="colorTatoo">
                <label class="form-check-label" for="flexCheckDefault">
                  Couleur
                </label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check-inline">
                <input v-model="searchForm.black_and_white" class="form-check-input me-2" type="checkbox" id="bAndWTatto">
                <label class="form-check-label" for="flexCheckChecked">
                  Noir et Blanc
                </label>
              </div>
            </div>

            <div>
              <button @click="search" type="submit" class="btn btn-primary">Filtrer</button>
            </div>

          </form>
        </div>
      </div>


    </div>


    <!-- Container des cartes -->

    <!-- <div class="container py-5 h-10"> -->
    <div class="container py-4 h-10">

      <!-- <div class="row row-cols-2 row-cols-md-5 g-4"> -->
      <div class="row row-cols-2 row-cols-md-4 g-4">

        <div class="col" v-for="p in pros">
          
            <div class="card bg-dark text-white container-card">
            
            <img :src="p.profile_picture_path_pro!==null?p.profile_picture_path_pro:'https://res.cloudinary.com/dmoacy4yl/image/upload/v1661849691/srak0p28tzkfot53ei9u.jpg'" class="card-img-top" alt="image tatoueur">
            
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

export default {
  name:'Home',
  data(){
    return{
        searchForm:{
          style:'default',
          city:'default'
        },
        cities:[],
        styles:[],
        pros:undefined
    }
  },
  async mounted(){
    try {
      const response=await this.axios.get(`${process.env.VUE_APP_ENV_ENDPOINT_BACK}api/pro`);
      console.log(response.data)
      this.pros=response.data;
    } catch (error) {
      console.log(error)
    }
    await this.$store.dispatch('getAllCities');
    await this.$store.dispatch('getAllStyles');
  },
  methods:{
    async search(e){
      e.preventDefault();
      const requestObj={}
      if( this.searchForm.city!='default')
        requestObj.city=this.searchForm.city;
      if( this.searchForm.style!='default')
        requestObj.style=this.searchForm.style;
      if( this.searchForm.color)
        requestObj.color=this.searchForm.color;
      if( this.searchForm.black_and_white)
        requestObj.black_and_white = this.searchForm.black_and_white ;
      console.log(this.searchForm,requestObj)
      if(!Object.keys(requestObj).length){
        try {
          const response=await this.axios.get(`${process.env.VUE_APP_ENV_ENDPOINT_BACK}api/pro`)
          console.log(response.data);
          this.pros=response.data;
          return
        } catch (error) {
          console.log(error);
        }
      }
      try {
        const response= await this.axios.post(`${process.env.VUE_APP_ENV_ENDPOINT_BACK}api/pro/search`,requestObj);
        console.log(response);
        this.pros=response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
    
}
</script>
<style>
  .container-card{
    min-height: 700px;
  }
</style>