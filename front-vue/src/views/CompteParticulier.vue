<template>

<section class="border-bottom pb-3 mb-3">
  <div class="container">
  <div class="flex-shrink-0">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
      alt="Generic placeholder image" class="img-fluid"
      style="width: 180px; border-radius: 10px;" />
  </div>
  <h3>Prénom</h3>
  <h3>Nom</h3>

  </div>
  <div class="container">

    <div class="container py-4">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-8">
          <div class="card" style="border-radius: 15px;">
            <h4>Changer mes informations</h4>
            <div class="card-body p-4">

                <form>

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

                    <button type="submit" class="btn btn-primary">changer mes informations</button>

                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <button type="button" class="btn btn-danger">Supprimer mon compte</button>
  </div>

  <div class="container">
    <p>Pour signaler tout problèmes de comportement, images inappropriées ou bug technique, merci de nous contacter à : superequipe@onestcool.com</p>
  </div>
</section>
</template>
<script>
export default {
    name:'CompteParticulier',
    created(){
    this.$store.dispatch('check');
   },
    
}
</script>