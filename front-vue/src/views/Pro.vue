<template>
  <h1>Pro {{ studio }}</h1>
  <div>
    <img
      src="{{profile_picture_path_pro}}"
      alt="PHOTO"
    >
    <p>Ville:{{ city }}</p>
    <p>Description: {{ description }}</p>
    <p>Instagram: {{ instagram }}</p>
  </div>
  <button>CONTACTER</button>
</template>
<script>

export default {
    name:'Pro',
    props:['id'],
    data(){
    return{
        studio:undefined,
        city:undefined,
        description:undefined,
        instagram:undefined,
        profile_picture_path_pro:undefined
    }
    },
    async created(){
    this.axios
      .get(`http://localhost:3000/api/pro/${this.id}`)
      .then((response) => {
        console.log(response.data)
        this.studio=response.data.studio_name;
        this.city=response.data.city;
        this.description=response.data.description;
        this.instagram=response.data.instagram;
        this.profile_picture_path_pro=response.data.profile_picture_path_pro;
      })
  }
}

</script>


<style>
.pros{
    display:flex;
    flex-direction: row;
}
.pro {
  border: solid 1px black;

}
</style>