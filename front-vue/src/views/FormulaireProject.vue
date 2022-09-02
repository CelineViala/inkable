<template>

<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Votre projet tatouage</h2>

            <form>
              <div class="form-outline form-white mb-4">
                <input v-model="newProject.title" type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Titre du projet</label>
              </div>

              <div class="form-outline form-white mb-4">
                <!-- <input v-model="newProject.description" type="text" id="typeText" class="form-control form-control-lg" />-->
                <textarea v-model="newProject.description" type="text" id="typeText" class="form-control form-control-lg"></textarea>
                <label class="form-label" for="typeText">Description</label> 
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="newProject.area" type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Zone à tatouer</label>
              </div>
           
            
             <div class="form-outline form-white mb-4 form-check-inline">
                <input v-model="newProject.color" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="black_and_white">
                <label class="form-check-label" for="flexRadioDefault">
                    Noir et blanc
                </label>
             </div>

             <div class="form-outline form-white mb-4 form-check-inline">
                <input v-model="newProject.color" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="color">
                <label class="form-check-label" for="flexRadioDefault">
                    Couleur
                </label>
             </div>
             <p class="text-success">{{this.messageSuccess}}</p>
             <p class="text-danger">{{this.messageError}}</p>
             <input @click="validForm" class="btn btn-outline-light btn-lg px-5" value="Prendre rendez-vous" type="button"/>
            </form>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- 
    <div class="container">
        <h5 class="modal-title">Votre projet de tatouage</h5>
                
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titre du projet</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description du projet</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Zone à tatouer</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Couleur
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Noir et blanc
                        </label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Prendre rendez-vous</button>

                </form>
    </div> -->
</template>
<script>
export default {
    name:'FormulaireProject',
    data(){
      return {
            
            newProject:{
              
            },
            messageSuccess:null,
            messageError:null,
        }
    },
   methods:{
    validForm:function(){ 
      if(this.newProject.color!==undefined)   
        this.newProject.color=this.newProject.color==='color'?true:false;
      this.newProject.pro_id=this.$route.params.proId;
      this.newProject.consumer_id=this.$store.state.user.id; 
      
      this.axios
      .post(`${process.env.VUE_APP_ENV_ENDPOINT_BACK}api/projet`,this.newProject) 
      .then((response) => {
        
        this.newProject={};
        this.messageSuccess="Votre projet a bien été enregistré";
        this.messageError=null;
      })
      .catch((err)=>{
        console.log(err)
        this.messageSuccess=null;
        this.messageError=err.response.data.message;
      })
    }
   }

    
}
</script>
<style>

.gradient-custom {
/* fallback for old browsers */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
};

</style>