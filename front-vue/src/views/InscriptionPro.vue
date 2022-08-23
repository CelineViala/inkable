
<template>

<body class="bg-light">
  <div class="container">
  <main>

    <div class="row g-5">
      <div class="d-flex">
        <form class="needs-validation" novalidate>
          
          <div class="row g-3">

            <h4 class="mb-3">Les informations de votre studio</h4>

            <div class="col-sm-6">
              <label for="studioNmae" class="form-label">Nom du studio</label>
              <input type="text" class="form-control" id="studioName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Nom de studio requis.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="city" class="form-label">Ville</label>
              <input type="text" class="form-control" id="city" placeholder="" value="" required>
              <div class="invalid-feedback">
                Ville requise.
              </div>
            </div>

            <div class="container">
              <h5>Les couleurs de tatouage</h5>
              <div class="form-check-inline">
              <input type="checkbox" class="form-check-input" id="color">
              <label class="form-check-label" for="color">Tatouages couleur</label>
            </div>
            <div class="form-check-inline">
              <input type="checkbox" class="form-check-input" id="blackAndWhite">
              <label class="form-check-label" for="blackAndWhite">Tatouages noir et blanc</label>
            </div>

            <div class="container">
              <h5>Les styles de tatouage</h5>
              <div class="form-check-inline">
                <input type="checkbox" class="form-check-input" id="floral">
                <label class="form-check-label" for="floral">Floral</label>
              </div>
              <div class="form-check-inline">
                <input type="checkbox" class="form-check-input" id="tribal">
                <label class="form-check-label" for="tribal">Tribal</label>
              </div>
              <div class="form-check-inline">
                <input type="checkbox" class="form-check-input" id="aquarelle">
                <label class="form-check-label" for="aquarelle">Aquarelle</label>
              </div>
            </div>

          </div>

            

            

            <h4 class="mb-3">Vos informations de connexion</h4>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="studio@example.com" required>
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

          <h4 class="mb-3">Vos informations complémentaires</h4>

            <div class="mb-3">
              <label for="file" class="form-label">Selectioner une photo de profil</label>
              <input class="form-control" type="file" id="formFile">
            </div>

            
            <div class="mb-3">
              <label for="address" class="form-label">Instagram</label>
              <input type="text" class="form-control" id="instagram">
            </div>

            <div class="mb-3">
              <label for="desciption" class="form-label">Une courte description de votre salon</label>
              <input  type="text" class="form-control" id="description">
            </div>

          </div>

          <button class="btn btn-primary btn-lg" type="submit">Valider l'inscription</button>
        </form>
      </div>
    </div>
  </main>
</div>
</body>

<!-- 1er formulaire inscription pro -->

<!-- <div class="container">
  <form>
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
</form> -->




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

    </style>

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