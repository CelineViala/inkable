<template>

<body class="text-center">
    
<main class="form-signin w-100 m-auto">

  <div class="container">
  <form>
    <img class="mb-4" src="https://picsum.photos/100" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Connexion</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Se connecter</button>
  </form>
<br>
    <div class="d-grid gap-3">
    <a href="#">Mot de passe oublié</a>
    <a href="#">S'inscrire</a>
    <a href="#">Vous êtes tatoueur ?</a>
  </div>

</div>
</main>
</body>

  <!-- <h1>CONNEXION</h1>
  <form
    action=" "
    method="post"
  >
    <label for="studio_name">email:</label><br>
    <input
      id="email"
      v-model="user.email"
      type="text"
      name="email"
    ><br>
    <label for="password">Password :</label><br>
    <input
      id="password"
      v-model="user.password"
      type="password"
      name="password"
    > <br>
        <input
      type="button"
      value="Se connecter"
      @click="connect"
    >
    <p>{{ message}}</p>
  </form> -->
</template>

<script>
export default {
    name:'Connexion',
    data(){
        return {
          message:null,
            user:{
                
            }
        }
    },
    methods:{
        connect:function(){
            
            console.log(this.user)
                this.axios
                .post('http://localhost:3000/login',this.user)
                .then((response) => {
                    console.log(response.data);
                    this.user={};
                    this.message="Connexion réussie!";
                    //this.$router.push('/');
                    localStorage.setItem("token",response.data.accessToken);
                    this.axios.defaults.headers.common['Authorization']=`Bearer ${response.data.accessToken}`;
                    this.$store.dispatch('check');

      //               this.axios
      // .get('http://localhost:3000/checkRole')
      // .then((response) => {
      //   console.log("afterConnect");
      //   console.log(response.data);
      // })
      // .catch(err=>{
      //   console.log("error after connect")
      //   console.log(err)
      // })
                })
                .catch((err)=>{
                  
                    console.log(err);
                    // this.message=err.response.data.message;
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
};

container-max-widths{
   xs: 0;
  sm: 540px;
  md: 720px;
  lg: 960px;
  xl: 1140px;
  xxl: 1320px
};

form{

}
</style>