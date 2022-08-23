<template>


  <div class="container">

    <div class="row g-5">
      <div class="d-flex">
        <form class="needs-validation" novalidate>
          
          <div class="row g-3">

            <h4 class="mb-3">Les informations de votre profil</h4>

            <div class="col-sm-6">
              <label for="firstName" class="form-label">Prénom</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Prénom requis.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Nom</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Nom requise.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="dateOfBirth" class="form-label">Date de naissance </label>
              <input type="text" class="form-control" id="dateOfBirth" placeholder="jj/mm/aaaa" value="" required>
              <div class="invalid-feedback">
                Date de naissance requise
              </div>
            </div>

            <div class="col-sm-6">
              <label for="file" class="form-label">Selectioner une photo de profil</label>
              <input class="form-control" type="file" id="formFile">
            </div>

            

          <h4 class="mb-3">Vos informations de connexion</h4>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="prebom@example.com" required>
              <div class="invalid-feedback">
                Email valide requis
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Password</label>
              <input type="text" class="form-control" id="password" required>
              <div class="invalid-feedback">
                  Mot de passe requis.
              </div>
              
            </div>


          </div>

          <button class="btn btn-primary btn-lg" type="submit">Valider l'inscription</button>
        </form>
      </div>
    </div>
  </div>

<!-- 1er formulaire -->
<!-- <form>

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

</form> -->

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

<!-- <style>
.container {
  padding-top: 5em;
}
</style> -->