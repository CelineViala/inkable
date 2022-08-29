<template>
<h1>Pro</h1>
    

 <!-- Premier système de rows et colonnes pour l'image de prfils , le nom et la ville du tatoueur -->

     
      
<section class="gradient-custom">
  <div class="container py-4">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-8">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-4">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"
                  style="width: 180px; border-radius: 10px;" />
              </div>
              <div class="flex-grow-1 ms-3">
                <div class="d-flex justify-content-start rounded-3 p-1 mb-1">
                <h5 class="mb-1">Nom du tatoueur</h5>
                </div>

                <div class="d-flex justify-content-start rounded-3 p-1 mb-1 ">
                <p class="mb-2 pb-1 text-white" style="color: #2b2a2a;">
                  Ville du tatoueur
                </p>
                </div>


                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <span class="badge text-bg-light">Spécialité 1</span>
                  </div>
                  <div class="px-3">
                    <span class="badge text-bg-light">Spécialité 2</span>
                  </div>
                  <div>
                    <span class="badge text-bg-light">Spécialité 3</span>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <span class="badge text-bg-secondary">Couleur</span>
                  </div>
                  <div class="px-3">
                    <span class="badge text-bg-secondary">Noir et blanc</span>
                  </div>
                </div>



                <div class="d-flex pt-1">
                     <button type="button" class="btn btn-outline-light me-1 flex-grow-1">
                      Instagram
                    </button>

                  <button type="button" class="btn btn-outline-dark text-light flex-grow-1" style="background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));">
                    Prendre rendez-vous
                  </button>
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
      Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. A nemo commodi odio veniam nisi? Cupiditate
      nobis doloremque unde in ut, consequatur reprehenderit
      saepe iure perspiciatis, veniam facilis asperiores
      deleniti at?

      Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. A nemo commodi odio veniam nisi? Cupiditate
      nobis doloremque unde in ut, consequatur reprehenderit
      saepe iure perspiciatis, veniam facilis asperiores
      deleniti at?
    </p>
  </div>

<!-- Second système de rows et colonnes pour la galerie -->
<div class="row ">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
</div>


</template>



<script>

export default {
  name:'DashboardPro',
  data(){
    return{
       
    }
  },
 
    
}
</script>
<style>

</style>