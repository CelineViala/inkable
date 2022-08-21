<template>
  <h1>CONNEXION</h1>
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
  </form>
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
                    this.axios
      .get('http://localhost:3000/checkRole')
      .then((response) => {
        console.log("afterConnect");
        console.log(response.data);
      })
      .catch(err=>{
        console.log("error after connect")
        console.log(err)
      })
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