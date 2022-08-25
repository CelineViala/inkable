<template>

<section class="border-bottom pb-3 mb-3 gradient-custom">
  <div class="container py-5 h-10">

      <div class="row d-flex justify-content-center align-items-center h-100">

        <div class="col-8">

          <div class="card bg-dark text-white" style="border-radius: 1rem;">

            <div class="card-body p-4 text-center">

              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" class="img-fluid"
                style="width: 180px; border-radius: 10px;" />
              </div>

              <h3>Nom du Studio</h3>

              <h3>Ville</h3>

            </div>
    
            <h4>Modifier mes informations</h4>

            <div class="card-body p-4 text-center">

              <form>

                <div class="mb-3">
                  <label for="studioName" class="form-label">Nouveau nom de studio</label>
                  <input type="text" class="form-control" id="studioName">
                </div>

                <div class="mb-3">
                  <label for="city" class="form-label">Nouvelle ville</label>
                  <input type="text" class="form-control" id="city">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Nouvel Email</label>
                  <input type="email" class="form-control" id="email">
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Nouveau mot de passe</label>
                  <input type="password" class="form-control" id="password">
                </div>

                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirmer le nouveau mot de passe</label>
                  <input type="password" class="form-control" id="confirmPassword">
                </div>

                <div class="mb-3">
                  <label for="file" class="form-label">Selectioner une nouvelle photo de profil</label>
                  <input class="form-control" type="file" id="formFile">
                </div>

                <div class="mb-3">
                  <label for="desciption" class="form-label">Une courte description de votre salon</label>
                  <textarea class="form-control" id="description"></textarea>
                </div>

                <div class="mb-3">
                  <label for="instagram" class="form-label">Nouveau compte Instagram</label>
                  <input type="text" class="form-control" id="instagram">
                </div>
                    
                <!-- Colroation des tatouages -->
                <div class="mb-3">

                  <h4>Coloration des tatouages</h4>

                    <div class="form-outline form-white mb-4 form-check-inline">
                      <input class="form-check-input" type="checkbox" value="color" id="color">
                      <label class="form-check-label-inline" for="color">
                        Tatouages couleur
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4 form-check-inline">
                      <input class="form-check-input" type="checkbox" value="bAndW" id="bAndW">
                      <label class="form-check-label-inline" for="bAndW">
                        Tatouages noir et blanc
                      </label>
                    </div>

                </div>

                <!-- Style des tatouages -->
                <div class="mb-3">

                  <h4>Styles de tatouages</h4>

                    <div class="form-outline form-white mb-4 form-check-inline">
                      <input class="form-check-input" type="checkbox" value="floral" id="floral">
                      <label class="form-check-label-inline" for="floral">
                        Tatouages florals
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4 form-check-inline">
                      <input class="form-check-input" type="checkbox" value="tribal" id="tribal">
                      <label class="form-check-label-inline" for="tribal">
                        Tatouages tribaux
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4 form-check-inline">
                      <input class="form-check-input" type="checkbox" value="aquarelle" id="aquarelle">
                      <label class="form-check-label-inline" for="aquarelle">
                        Tatouages aquarelles
                      </label>
                    </div>

                </div>

                <button type="submit" class="btn btn-primary">Modifier mes informations</button>

              </form>

            </div>

            <!-- Bouton supprimer -->
            <div class="card-body p-4 text-center">
              <button type="button" class="btn btn-danger">Supprimer mon compte</button>
            </div>

          </div>


        </div>


      </div>

      <!--Message de contact  -->
      <div class="card-body p-4 text-center text-white">
        <p>Pour signaler tout problèmes de comportement, images inappropriées ou bug technique, merci de nous contacter à : superequipe@onestcool.com</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
    name:'ComptePro',
    created(){
    this.$store.dispatch('check');
   },
    
}
</script>