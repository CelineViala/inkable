<template>
  <h1>Inscriptions Utilisateur</h1>
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
    
  </form>
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
input{
    height: 3em;
    margin:1em;
}
</style>