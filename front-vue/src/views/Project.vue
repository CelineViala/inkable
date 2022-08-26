<template>
  <h1>Project Pro</h1>

<section class=" gradient-custom">
    <div class="container py-5 h-100">

      <div class="card bg-dark text-white" style="border-radius: 1rem;">
        
          <form>
              <div class="form-outline form-white mb-4">
                <input v-model="newProject.title" type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Titre du projet</label>
              </div>

              <div class="form-outline form-white mb-4">
                <!-- <input v-model="newProject.description" type="text" id="typeText" class="form-control form-control-lg" />-->
                <textarea v-model="newProject.description" type="text" id="typeText" class="form-control form-control-lg"></textarea>
                <label class="form-label" for="typeText">Description</label> 
              </div>       

              <!-- Titre --> 
              <div class="form-outline form-white mb-4">
                <input v-model="newProject.area" type="text" id="typeText" class="form-control form-control-lg" />
                <label class="form-label" for="typeText">Zone à tatouer</label>
              </div>

              <!-- Coloration -->
              <div class="form-outline form-white mb-4 form-check-inline">
                <input v-model="newProject.color" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="black_and_white">
                <label class="form-check-label" for="flexRadioDefault">
                    Noir et blanc
                </label>
             </div>

             <div class="form-outline form-white mb-4 form-check-inline">
                <input v-model="newProject.color" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="color">
                <label class="form-check-label" for="flexRadioDefault">
                    Couleur
                </label>
             </div>

            <div class="form-outline form-white mb-4">
             <label class="mr-sm-2" for="inlineFormCustomSelect">Statut</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choisir le statut</option>
                <option value="1">Accepté</option>
                <option value="2">En attente</option>
                <option value="3">Refusé</option>
              </select>
            </div>

              <!-- Bouton modifier -->
              <div class="form-outline form-white mb-4">
                <input @click="validForm" class="btn btn-outline-light btn-lg px-5" value="Modifier" type="button"/>
              </div>
          </form>

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
          <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
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
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import listDayPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name:'Project',
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