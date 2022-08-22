<template>

<form>

<div class="container">
  <h2>Informations sur votre studio</h2>
  <div class="mb-3">
    <label for="inputStudioName" class="form-label">Nom du studio</label>
    <input type="studioMail" class="form-control" id="inputStudioName">
  </div>
  <div class="mb-3">
    <label for="inputCity" class="form-label">Nom de la ville</label>
    <input type="city" class="form-control" id="inputCity">
  </div>
  <h4>Types de tatouages proposés</h4>
  <div class="form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault"> Tatouages couleur </label>
</div>
<div class="form-check-inline">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked"> Tatouages noir et blanc </label>
</div>
</div>

<div class="container">
  <h2>Informations de connexion</h2>
  <label for="inputEmail" class="form-label">Votre email</label>
<input type="email" id="inputEmail" class="form-control">
<label for="inputPassword" class="form-label">Votre mot de passe</label>
<input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text"> Voici les contraintes du mdp </div>
</div>

<div class="container">
  <h2>Pour compléter votre profil</h2>
  <div class="mb-3">
  <label for="formFile" class="form-label">Selectioner une photo de profil</label>
  <input class="form-control" type="file" id="formFile">
  <div class="mb-3">
    <label for="inputInstagram" class="form-label">Votre compte instagram</label>
    <input type="instagram" class="form-control" id="inputInstagram">
  </div>
  <div class="mb-3">
  <label for="formControlTextarea" class="form-label">Une courte description de votre salon</label>
  <textarea class="form-control" id="formControlTextarea" rows="3"></textarea>
</div>
</div>

</div>

<div class="container">
  <div class="mb-3 form-check-inline">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">J'accepte les CGU</label>
  </div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary">Inscription</button>
  </div>
</div>

</form>


  <!-- <h1>Inscriptions Pro</h1>
  <form
    action=""
    method="post"
  >
    <label for="studio_name">Nom du studio :</label><br>
    <input
      id="studio_name"
      v-model="newPro.studio_name"
      type="text"
      name="studio_name"
    ><br>
    <label for="email">Email :</label><br>
    <input
      id="email"
      v-model="newPro.email"
      type="text"
      name="email"
    > <br>
    <label for="password">Password :</label><br>
    <input
      id="password"
      v-model="newPro.password"
      type="text"
      name="password"
    > <br>
    <label for="confirmPassword">Confirmez votre Password :</label><br>
    <input
      id="confirmPassword"
      v-model="newPro.passwordConfirm"
      type="text"
      name="confirmPassword"
    > <br>
    <label for="city">Ville :</label><br>
    <input
      id="city"
      v-model="newPro.city"
      type="text"
      name="city"
    > <br>
    <label for="NB">Votre description :</label><br>
    <textarea
      id="description"
      v-model="newPro.description"
      name="description"
    ></textarea><br>    
    <div>
      <input
        id="color"
        v-model="newPro.color"
        type="checkbox"
        name="color"
      >
      <label for="color">Color</label>
    </div>

    <div>
      <input
        id="NB"
        v-model="newPro.black_and_white"
        type="checkbox"
        name="NB"
      >
      <label for="NB">NB</label>
    </div>
     
    <input
      type="button"
      value="S'inscrire"
      @click="addPro"
    >
    <p>{{ message }}</p>
  
   </form> -->
</template>
<script>

export default {
    name:'Inscriptions',
    data(){
        return {
            newPro:{
                  color:false,
                  black_and_white:false
            },
            message:null
        }
    },
    methods:{
        addPro:function(){
            
            console.log(this.newPro)
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

<style>
.container {
  padding-top: 5em;
}

h4 {
  padding-top: 1em;
}
</style>