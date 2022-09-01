
<template>
<!-- Section avec background -->
<section class=" gradient-custom">
  <div class="container py-5 h-10">
    <div class="row g-5">
      <div class="d-flex">

          <!-- Carte noire -->
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <form class="needs-validation" novalidate>
              
              <!-- Alignement des informations -->
              <div class="card-body p-5 text-center">
                <div class="row g-3">

                  <h4 class="mb-3">Les informations de votre studio</h4>

                  <div class="col-sm-6">
                    <label for="studioNmae" class="form-label">Nom du studio</label>
                    <input type="text" class="form-control" id="studioName" placeholder=""  v-model="newPro.studio_name" required>
                  </div>

                  <div class="col-sm-6">
                    <label for="city" class="form-label">Ville</label>
                    <input type="text" class="form-control" id="city" placeholder=""  v-model="newPro.city" required>
                    <div class="invalid-feedback">
                      Ville requise.
                    </div>
                  </div>

                  <div class="container py-5 h-10">
                    <h4>Les couleurs de tatouage</h4>
                    <div class="form-check-inline">
                    <input type="checkbox" class="form-check-input" id="color"  v-model="newPro.color">
                    <label class="form-check-label" for="color">Tatouages couleur</label>
                  </div>

                  <div class="form-check-inline">
                    <input type="checkbox" class="form-check-input" id="blackAndWhite" v-model="newPro.black_and_white">
                    <label class="form-check-label" for="blackAndWhite">Tatouages noir et blanc</label>
                  </div>

                  <div class="container pt-5 h-10">

                    <h4>Les styles de tatouage</h4>

                    <div v-for="style in this.$store.state.styles" class="form-check-inline">
                      <input v-model="newPro.styles" type="checkbox" class="form-check-input" :value="style" :id="style">
                      <label class="form-check-label" :for="style">{{style}}</label>
                    </div>
                  </div>

                  </div>
                </div>
                  

                <div class="card-body p-2 text-center">           

                  <h4 class="mb-3">Vos informations de connexion</h4>

                  <div class="col-12">
                    <label for="email" class="form-label" >Email</label>
                    <input v-model="newPro.email" type="email" class="form-control" id="email" placeholder="studio@example.com" required>
                    <div class="invalid-feedback">
                      Email valide requis
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label">Mot de passe</label>
                    <input v-model="newPro.password" type="password" class="form-control" id="password" required>
                    <div class="invalid-feedback">
                      Mot de passe requis.
                    </div> 
                  </div>

                  <div class="col-12">
                    <label  for="username" class="form-label">Confirmer le mot de passe</label>
                    <input v-model="newPro.passwordConfirm" type="password" class="form-control" id="confirmedPassword" required>
                    <div class="invalid-feedback">
                      Mot de passe requis.
                    </div> 
                  </div>

                </div> 

                <div class="card-body p-5 text-center">

                  <h4 class="mb-3">Vos informations complémentaires</h4>

                  <div class="mb-3">
                    <label for="file" class="form-label">Selectioner une photo de profil</label>
                    <input @change="handleFile" class="form-control" type="file" id="formFile">
                  </div>
                    
                  <div class="mb-3">
                    <label for="address" class="form-label">URL de votre compte Instagram</label>
                    <input v-model="newPro.instagram" type="text" class="form-control" id="instagram">
                  </div>

                  <div class="mb-3">
                    <label for="description" class="form-label">Une courte description de votre salon</label>
                    <textarea v-model="newPro.description" class="form-control" id="description"></textarea>
                  </div>

                </div> 

                <button @click="addPro" class="btn btn-primary btn-lg" type="submit">Valider l'inscription</button>
                
              </div>
            
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
    
    data(){
        return {
            newPro:{
                  color:false,
                  black_and_white:false,
                  styles:[]
            },
            message:null,
            picture:false
        }
    },
    methods:{
      async handleFile(e){
        await this.$store.dispatch('createRequestObjForCloudinary',e);
        this.picture=true
      },
      async addPro(e){
            e.preventDefault()
            if(this.picture){
              try {
                    let img=await this.$store.dispatch('handleUploadToCloudinary')
                    this.newPro.profile_picture_path_pro=img.url;
                } catch (error) {
                    console.log(error)
                }
            }
                this.axios
                .post('http://localhost:3000/signupPro',this.newPro)
                .then((response) => {
                    console.log(response.data);
                    this.newPro={};
                    this.message="Vous êtes bien inscrit!";
                    this.$router.push('/connexion');
            
                    
                })
                .catch((err)=>{
                    console.log(err);
                    this.message=err.response.data.message;
                    return
                })
            
            
        }
    }
}


</script>

<!-- <style>

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      body {
        display: flex;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }

      .form-signin {
        max-width: 330px;
        padding: 15px;
      }

      .form-signin .form-floating:focus-within {
        z-index: 2;
      }

      .container {
        align-items: center;
      }

    </style> -->

<!-- 1er style de fait -->

<!-- <style>
.container {
  padding-top: 5em;
}

h4 {
  padding-top: 1em;
}

@media (min-width: 768px) {

}
</style> -->