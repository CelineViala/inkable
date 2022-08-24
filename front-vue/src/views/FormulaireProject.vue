<template>

<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Votre projet tatouage</h2>

            <form>
              <div class="form-outline form-white mb-4">
                <input type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Titre du projet</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Description</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Zone à tatouer</label>
              </div>
           

             <div class="form-outline form-white mb-4 form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Couleur
                </label>
             </div>

             <div class="form-outline form-white mb-4 form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Noir et blanc
                </label>
             </div>

             <button class="btn btn-outline-light btn-lg px-5" type="submit">Prendrez rendez-vous</button>
            </form>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- 
    <div class="container">
        <h5 class="modal-title">Votre projet de tatouage</h5>
                
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titre du projet</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description du projet</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Zone à tatouer</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Couleur
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Noir et blanc
                        </label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Prendre rendez-vous</button>

                </form>
    </div> -->
</template>
<script>
export default {
    name:'FormulaireProject',
    created(){
    this.$store.dispatch('check');
   },
    
}
</script>
<style>

.gradient-custom {
/* fallback for old browsers */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
};

</style>