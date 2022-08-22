<template>

<form>

<div class="container">
  <h2>Informations du profil</h2>
  <div class="mb-3">
    <label for="inputFirstName" class="form-label">Prénom</label>
    <input type="firstName" class="form-control" id="inputFirstName">
  </div>
  <div class="mb-3">
    <label for="inputLastName" class="form-label">Nom</label>
    <input type="lastName" class="form-control" id="inputLastName">
  </div>
  <div class="mb-3">
    <label for="inputDateOfBirth" class="form-label">Date de naissance</label>
    <input type="dateOfBirth" class="form-control" id="inputDateOfBirth">
    <div id="datOfBirthHelpBlock" class="form-text"> une date sous format jj/mm/aaaa </div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Selectioner une photo de profil</label>
  <input class="form-control" type="file" id="formFile">
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
  <div class="mb-3 form-check-inline">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">J'accepte les CGU</label>
  </div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary">Inscription</button>
  </div>
</div>

</form>

  <!-- <h1>Inscriptions Utilisateur</h1>
  <form
    action=" "
    method="post"
  >
    <label for="first_name">Prénom:</label><br>
    <input
      id="first_name"
      v-model="newConsumer.first_name"
      type="text"
      name="first_name"
    ><br>
    <label for="last_name">Nom:</label><br>
    <input
      id="last_name"
      v-model="newConsumer.last_name"
      type="text"
      name="last_name"
    ><br>
    <label for="email">Email :</label><br>
    <input
      id="email"
      v-model="newConsumer.email"
      type="text"
      name="email"
    > <br>
    <label for="password">Password :</label><br>
    <input
      id="password"
      v-model="newConsumer.password"
      type="text"
      name="password"
    > <br>
    <label for="confirmPassword">Confirmez votre Password :</label><br>
    <input
      id="confirmPassword"
      v-model="newConsumer.passwordConfirm"
      type="text"
      name="confirmPassword"
    > <br>
    <label for="birth">Date de naissance:</label><br>
    <input
      id="birth"
      v-model="newConsumer.date_of_birth"
      type="date"
      name="birth"
    > <br>
    <input
      type="button"
      value="S'inscrire"
      @click="addConsumer"
    >
    <p>{{ message }}</p>
    
  </form> -->
</template>
<script>

export default {
    name:'Inscriptions',
    data(){
        return {
            newConsumer:{
                  
            },
            message:null
        }
    },
    methods:{
        addConsumer:function(){
            
            console.log(this.newPro)
                this.axios
                .post('http://localhost:3000/signupConsumer',this.newConsumer)
                .then((response) => {
                    console.log(response.data);
                    this.newconsumer={};
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
</style>