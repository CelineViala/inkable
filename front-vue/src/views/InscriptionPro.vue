<template>
  <h1>Inscriptions Pro</h1>
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
    <!-- !studio_name,
                !email,
                !password,
                !color,
                !black_and_white,
                !city_id -->
  </form>
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
input{
    height: 3em;
    margin:1em;
}
</style>