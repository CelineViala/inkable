<template>
  

 <!-- Premier système de rows et colonnes pour l'image de prfils , le nom et la ville du tatoueur -->
   
      
<section class="gradient-custom">
  <div class="container py-4">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-8">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-4">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img :src="pro.profile_picture_path_pro"
                  alt="Generic placeholder image" class="img-fluid"
                  style="width: 180px; border-radius: 10px;" />
              </div>
              <div class="flex-grow-1 ms-3">
                <div class="d-flex justify-content-start rounded-3 p-1 mb-1">
                <h5 class="mb-1">{{pro.studio_name}}</h5>
                </div>

                <div class="d-flex justify-content-start rounded-3 p-1 mb-1 ">
                <p class="mb-2 pb-1 text-white" style="color: #2b2a2a;">
                  {{pro.city}}
                </p>
                </div>


                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">

                  <div v-for="style in this.pro.styles">
                    <span class="badge m-1 text-bg-light">{{style.name}}</span>
                  </div>
                  
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <span class="badge text-bg-secondary">{{pro.color?"Couleur":null}}</span>
                  </div>
                  <div class="px-3">
                    <span class="badge text-bg-secondary">{{pro.black_and_white?"Noir et blanc":null}}</span>
                  </div>
                </div>



                <div class="d-flex pt-1">
                  <a class="link-insta" :href="this.pro.instagram" target="_blank">
                    <button type="button" class="btn btn-outline-light me-1 flex-grow-1">
                      Instagram
                    </button>
                  </a>

                  <router-link v-if="this.$store.state.user.role==='consumer'" :to="{name:'FormulaireProject',params:{proId:this.$route.params.id}}" class="btn btn-outline-dark text-light flex-grow-1" style="background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));">
                    Prendre rendez-vous
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container py-5">
<div class="row">
    <h3>Description</h3>
    <p class=" ">
      {{this.pro.description}}
    </p>
  </div>

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="page-title">Galerie</h1>
        
        <div class="row">
            <a v-for="tattoo in pro.tattoos" :href="tattoo.tattoo_picture_path" data-toggle="lightbox" data-gallery="example-gallery" class="col-lg-3 col-md-4 col-6 my-3">
                <img :src="tattoo.tattoo_picture_path" class="img-fluid card"  >
            </a>
            
        </div>
    </div>
</div>

</div>

</div>


</template>



<script>
import { Cloudinary } from 'cloudinary-vue';
import {CloudinaryImage} from '@cloudinary/url-gen';

export default {
  name:'DashboardPro',
  data(){
    return{
      pro:{}
    }
  },
  async mounted(){
    try {
      const response=await this.axios.get(`http://localhost:3000/api/pro/${this.$route.params.id}`);
      this.pro=response.data;
      console.log(this.pro);
    } catch (error) {
      console.log("error")
    }
  },
 
    
}
</script>
<style>
.link-insta{
  text-decoration: none;
  
}

</style>