
<template>
<h1>Pro</h1>
  <main class="my-5">
    <div class="container">


 <!-- Premier système de rows et colonnes pour l'image de prfils , le nom et la ville du tatoueur -->

     
      
<section class="border-bottom pb-3 mb-3">
  <div class="container py-4">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-8">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"
                  style="width: 180px; border-radius: 10px;" />
              </div>
              <div class="flex-grow-1 ms-3">
                <div class="d-flex justify-content-start rounded-3 p-1 mb-1">
                <h5 class="mb-1">Nom du tatoueur</h5>
                </div>

                <div class="d-flex justify-content-start rounded-3 p-1 mb-1">
                <p class="mb-2 pb-1" style="color: #2b2a2a;">
                  Ville du tatoueur
                </p>
                </div>


                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <span class="badge text-bg-dark">Spécialité 1</span>
                  </div>
                  <div class="px-3">
                    <span class="badge text-bg-dark">Spécialité 2</span>
                  </div>
                  <div>
                    <span class="badge text-bg-dark">Spécialité 3</span>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <span class="badge text-bg-dark">Couleur</span>
                  </div>
                  <div class="px-3">
                    <span class="badge text-bg-dark">Noir et blanc</span>
                  </div>
                </div>



                <div class="d-flex pt-1">
                     <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">
                      Instagram
                    </button>

                  <button type="button" class="btn btn-primary flex-grow-1" style="background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));">
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
<!-- <div class="container text-center">

  <div class="row row-cols-2">
    
    <div class="col-3">
      <img src="https://picsum.photos/200" class="img-fluid" alt="image">
    </div>

    <div class="col">
      <div class="row">Nom tatoueur</div>
      <div class="row">Ville</div>
    </div>

  </div>

</div>
<br> -->
<div class="row">
<h5 class="mb-3 h5 ">Description</h5>
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
<div class="row">
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
  </main>
</template>



<script>

export default {
  name:'DashboardPro',
  data(){
    return{
       
    }
  },
  created(){
    // this.role="pro"
    // console.log("test",this.role)
    // this.axios
    //   .get('http://localhost:3000/api/pro')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.pro=response.data;
    //   })
  }
    
}
</script>
<style>

</style>