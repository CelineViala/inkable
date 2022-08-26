<template>

  <section class="border-bottom pb-3 mb-3 gradient-custom">

    <div class="container py-5 h-10">

      <div class="row d-flex justify-content-center align-items-center h-100">

        <div class="col-8">

          <div class="card bg-dark text-white" style="border-radius: 1rem;">

            <div class="card-body p-4 text-center">

              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" class="img-fluid"
                style="width: 180px; border-radius: 10px;" />
              </div>

              <h3>{{this.consumer.first_name}}</h3>

              <h3>{{this.consumer.last_name}}</h3>

            </div>

            <h4>Changer mes informations</h4>

            <div class="card-body p-4 text-center">

              <form>

                <div class="mb-3">
                  <label for="email" class="form-label">Nouvel Email</label>
                  <input v-model="this.editConsumer.email" type="email" class="form-control" id="email">
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Nouveau mot de passe</label>
                  <input v-model="this.editConsumer.password" type="password" class="form-control" id="password">
                </div>

                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirmer le nouveau mot de passe</label>
                  <input v-model="this.editConsumer.passwordConfirm" type="password" class="form-control" id="confirmPassword">
                </div>

                <div class="mb-3">
                  <label for="file" class="form-label">Selectioner une nouvelle photo de profil</label>
                  <input @change="handleFile" class="form-control" type="file" id="formFile">
                </div>


                <button @click="editProfile" type="submit" class="btn btn-primary">Modifier mes informations</button>

              </form>

            </div>
            <p class="text-success">{{this.successMessage}}</p>
            <p class="text-danger">{{this.errorMessage}}</p>
            <!-- Bouton supprimer -->
            <div class="card-body p-4 text-center">
              <button type="button" class="btn btn-danger">Supprimer mon compte</button>
            </div>

          </div>

        </div>

      </div>

      <!--Message de contact  -->
      <div class="card-body p-4 text-center text-white">
        <p>Pour signaler tout problèmes de comportement, images inappropriées ou bug technique, merci de nous contacter à : superequipe@onestcool.com</p>
      </div>

    </div>
  </section>
</template>


<script>
export default {
    name:'CompteParticulier',
    data(){
        return {
            mail:null,
            picture:false,
            editConsumer:{
            },
            consumer:{},
            successMessage:null,
            errorMessage:null
        }
    },
    created(){
      this.axios
        .get('http://localhost:3000/api/consumer/1')
        .then((response) => {
          
          this.consumer=response.data;
          this.editConsumer.email=response.data.email;
          // this.editConsumer.password=response.data.password;
          // this.editConsumer.passwordConfirm=this.editPro.password;
          this.editConsumer.email=response.data.email;
          this.mail=response.data.email; 
        })
        .catch((err)=>{
          console.log(err);       
          return
        })
      this.$store.dispatch('check'); 

   },
    methods:{
        handleFile:function(e){
        this.$store.dispatch('createRequestObjForCloudinary',e);  
        this.picture=true
        },
        editProfile(e){
          e.preventDefault();
          console.log(this.editConsumer);
          // si le mail n'a pas été modifié il faut supprimer la donnée car sinon on aura une erreur d'utilisateur déjà existant côté back
          if(this.editConsumer.email===this.mail)
            delete this.editConsumer.email;
          else
            this.mail=this.editConsumer.email;
          if(this.editConsumer.password!==undefined && this.editConsumer.passwordConfirm===undefined) 
          {  
            this.errorMessage=" Vous devez  confirmer votre mot de passe" 
          }
          else{
            if(this.picture)
            {
              let instance = this.axios.create();
              delete instance.defaults.headers.common['Authorization'];
              //envoi photo cloudinary
              instance(this.$store.state.requestObj)
                .then((response) => {
                    this.editConsumer.profile_picture_path_consumer=response.data.url; 

                    //requete pour enregistrer le consumer
                    this.axios
                       .patch('http://localhost:3000/api/consumer/1',this.editConsumer)
                       .then((response) => {
                        console.log(response.data);
                        this.errorMessage=null;
                        this.successMessage="Vos informations ont bien été modifiées.";
                        setTimeout(() => {

                          this.successMessage=null;
                        }, 2000);
                        this.editConsumer.email=this.mail;     
                        })
                        .catch((err)=>{
                            console.log(err);
                            this.errorMessage=err.response.data.message;
                            return
                        })                               
                })
                .catch((err)=>{
                    console.log(err);
                    return
                })
            }else{
              this.axios
                    .patch('http://localhost:3000/api/consumer/1',this.editConsumer)
                    .then((response) => {
                        console.log(response.data);
                        this.errorMessage=null;
                        this.successMessage="Vos informations ont bien été modifiées.";
                        setTimeout(() => {
                          this.successMessage=null;
                        }, 2000);
                        this.editConsumer.email=this.mail;     
                    })
                    .catch((err)=>{
                        console.log(err);
                        this.errorMessage=err.response.data.message;
                        return
                    })
            }
          }
        }
    }
}


</script>
