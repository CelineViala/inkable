<template>



<section class="vh-100 gradient-custom">
  <div class="container py-5 h-10">

    <div class="row g-5">
      <div class="d-flex">
        <!-- Carte noire -->
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
        <form class="needs-validation" novalidate>
          <!-- Alignement des informations -->
          <div class="card-body p-5 text-center">
          <div class="row g-3">
         
            <h4 class="mb-3">Les informations de votre profil</h4>

            <div class="col-sm-6">
              <label for="firstName" class="form-label">Prénom</label>
              <input v-model="newConsumer.first_name" type="text" class="form-control" id="firstName" placeholder="" required>
              <div class="invalid-feedback">
                Prénom requis.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Nom</label>
              <input v-model="newConsumer.last_name" type="text" class="form-control" id="lastName" placeholder="" required>
              <div class="invalid-feedback">
                Nom requise.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="dateOfBirth" class="form-label">Date de naissance </label>
              <input v-model="newConsumer.date_of_birth" type="date" class="form-control" id="dateOfBirth" placeholder="jj/mm/aaaa" required>
            </div>

            <div class="col-sm-6">
              <label for="file" class="form-label">Selectioner une photo de profil</label>
              <input @change="handleFile" class="form-control" type="file" id="formFile">
            </div>
          
          </div>

          <div class="card-body p-5 text-center">

          <h4 class="mb-3">Vos informations de connexion</h4>



            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input v-model="newConsumer.email" type="email" class="form-control" id="email" placeholder="prenom@example.com" required>
            </div>

            <div class="col-12">
              <label for="password" class="form-label">Mot de passe</label>
              <input v-model="newConsumer.password" type="password" class="form-control" id="password" required>
            </div>
            <div class="col-12">
              <label for="confirmedPassword" class="form-label">Confirmer le mot de passe</label>
              <input v-model="newConsumer.passwordConfirm" type="password" class="form-control" id="confirmedPassword" required>
              <div class="invalid-feedback">
                  Mot de passe requis.
              </div> 
            </div>

          </div>

          <input @click="addConsumer"
          class="btn btn-primary btn-lg" value="Valider l'inscription" type="button"/>

          </div>
          <p class="text-success">{{this.successMessage}}</p>
          <p class="text-danger">{{this.errorMessage}}</p>
        

          
        
        </form>
        </div>
      </div>
    </div>
  </div>


  
  </section>
</template>

<script>


export default {
    name:'Inscriptions',
    created(){
      this.$store.dispatch('resetRequestObj');
   },
    data(){
        return {
            picture:false,
            newConsumer:{
                  
            },
            successMessage:null,
            errorMessage:null,
           
        }
    },
    methods:{
      handleFile:function(e){
        this.$store.dispatch('createRequestObjForCloudinary',e); 
        this.picture=true; 
      },
      addConsumer:async function(){
            //requete pour enregistrer la photo sur cloudinary

            let instance = this.axios.create();
            delete instance.defaults.headers.common['Authorization'];
            
            if(this.picture)
            {
            instance(this.$store.state.requestObj)
                .then((response) => {
                    this.newConsumer.profile_picture_path_consumer=response.data.url; 

                    //requete pour enregistrer le consumer
                    this.axios
                      .post('http://localhost:3000/signupConsumer',this.newConsumer)
                      .then((response) => {
                          console.log(response.data);
                          this.newConsumer={};
                          this.$store.dispatch('resetRequestObj');
                          this.$router.push('/connexion');   
                          this.errorMessage=null;
                          this.successMessage= "Vous êtes bien inscrit!";
                      })
                      .catch((err)=>{
                          console.log(err);
                          this.successMessage=null;
                          this.errorMessage=err.response.data.message;
                          return
                      })                                  
                })
                .catch((err)=>{
                    console.log(err);
                    return
                })
            }
            else{
              this.axios
                      .post('http://localhost:3000/signupConsumer',this.newConsumer)
                      .then((response) => {
                          console.log(response.data);
                          this.newConsumer={};
                          this.$store.dispatch('resetRequestObj');
                          this.errorMessage=null;
                          this.successMessage="Vous êtes bien inscrit!";
                          this.$router.push('/connexion');       
                      })
                      .catch((err)=>{
                          console.log(err);
                          this.successMessage=null;
                          this.errorMessage=err.response.data.message;
                          return
                      })

            }
                
            
            
        }
    }
}


</script>

<style>
.container {
  padding-top: 5em;
}
</style>