<template>
  <h1>Project</h1>

<section class=" gradient-custom">
    <div class="container py-5 h-100">

      <div class="card bg-dark text-white ">

        <div class="card-body">
          <h1 class="card-title">Titre du projet</h1>
          <h3 class="card-subtitle mb-2 text-muted">
            Description du projet
          </h3>
          <p class="card-text">
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

        <div class="card-body">
<!-- Division en 2 colonnes -->
          <div class="d-flex ">
          <!-- Côté gauche -->
            <div class="flex-grow-1 ms-3">
              <!-- Titre --> 
              <h3 class="card-subtitle mb-2 text-muted">
                Zone à tatouer
              </h3>
              <!-- Zone où doit apparaitre le text écrit dans le formulaire -->
              <p class="card-text">
                Exemple de zone à tatouer
              </p>
            </div>

            <!-- Côté droit -->
            <div class="flex-grow-1 ms-3">
              <!-- Titre -->
              <h3 class="card-subtitle mb-2 text-muted">
                Coloration
              </h3>
              <p class="card-text">
                Type de couleur choisie
              </p>
            </div>
          </div>
        </div>

          <!-- Statut -->
        <div class="card-body">
          <!-- Titre -->
          <h3 class="card-subtitle mb-2 text-muted">
                Statut
          </h3>
          <!-- Label statut -->
          <div>
            <span class="badge text-bg-success">Accepté</span>
          </div>
        </div>

        <!-- Bouton modifier -->
        <div class="card-body">
          <button type="button" class="btn btn-outline-secondary">Modifier</button>
        </div>        

      </div>
    </div>
</section>

<!-- Section des RDV -->

<section class="gradient-custom">
    <div class="container py-5 h-100">

      <div class="card bg-dark text-white ">
        <!-- Titre -->
        <div class="card-body">
          <h1 class="card-title">RDV</h1>
        </div>
        <!-- Informations du RDV -->
        <div class="card-body">
          <h4> Date : </h4>
          <p> Intégration de la date ici au format JJ/MM/ANNEE</p>
          <h4> Heure : </h4>
          <p> Intégration de la date ici au format JJ/MM/ANNEE</p>
        </div>

        <!-- Bouton modifier -->
        <div class="card-body">
          <button type="button" class="btn btn-outline-secondary">Modifier</button>
        </div> 

      </div>
    </div>
</section>

<!-- Section des Messages -->

<section class="gradient-custom">
    <div class="container py-5 h-100">

      <div class="card bg-dark text-white ">
        <div class="card-body">
          <!-- Titre -->
          <h1 class="card-title">Messages</h1>
        </div>
      

        <!-- Conteneur des messages à dupplique en cas de nouveau message-->
        <div class="container_messages py-3 h-100">
          <div class="card-body">

          <div class="d-flex justify-content-start rounded-3 text-black" style="background-color: #efefef;">
            <!-- Côté gauche -->
            <div class="flex-grow-1 ms-3">
              <h4> Auteur : </h4>
              <p> Nom de l'auteur</p>
              
              <h4> Date : </h4>
              <p> Intégration de la date ici au format JJ/MM/ANNEE</p>
              </div>

            <!-- Côté droit -->
            <div class="flex-grow-1 ms-3">
              <h4> Message : </h4>
              <p> 
                Contenu du message
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. A nemo commodi odio veniam nisi? Cupiditate
                nobis doloremque unde in ut, consequatur reprehenderit
                saepe iure perspiciatis, veniam facilis asperiores
                deleniti at?
              </p>
            </div>
            </div>
          </div>
        </div>

  
      </div>
    </div>
</section>


</template>

<style>

.gradient-custom {
/* fallback for old browsers */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
};

</style>