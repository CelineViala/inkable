
<template>
  
  <div class="pros">
    <div
      v-for="p in pro"
      class="pro"
    >
       
       <img
      src="{{p.profile_picture_path_pro}}"
      alt="PHOTO PROFIL"
    >
      <p>Nom studio:{{ p.studio_name }}</p>
      <p>Ville:{{ p.city }}</p>
      <div>
        <h2>Styles:</h2>
      <p v-for="style in p.styles">{{style.name}}</p>
      <router-link :to="{name:'Pro_detail', params:{id:p.id}}">
        En savoir +
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
const api="http://localhost:3000/api/pro"
export default {
  name:'Home',
  data(){
    return{
        pro:undefined
    }
  },
  created(){
    this.role="pro"
    console.log("test",this.role)
    this.axios
      .get('http://localhost:3000/api/pro')
      .then((response) => {
        console.log(response.data);
        this.pro=response.data;
      })
    this.$store.dispatch('check');
  }
    
}
</script>
<style>

.pros{
  width:1000px;
  margin:20px auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.pro {
  width:200px;
  border: solid 1px ;
  padding:2em;

}
</style>