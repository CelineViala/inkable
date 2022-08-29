<template>
  <h1>Project Particulier</h1>

<section class=" gradient-custom">
    <div class="container py-5 h-100">

      <div class="card bg-dark text-white" style="border-radius: 1rem;">

        <div class="card-body">
          <h3><strong>Tatoueur : </strong>{{this.project.pro.studio_name}}</h3>
        </div>

        <div class="card-body">
          <h1 class="card-title">{{this.project.title}}</h1>
          <br>
          <h3 class="card-subtitle mb-2 text-muted">
            Description du projet
          </h3>
          <p class="card-text">
          {{this.project.description}}
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
                {{this.project.area}}
              </p>
            </div>

            <!-- Côté droit -->
            <div class="flex-grow-1 ms-3">
              <!-- Titre -->
              <h3 class="card-subtitle mb-2 text-muted">
                Coloration
              </h3>
              <p class="card-text">
                {{this.project.color}}
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
            <span class="badge text-bg-light">{{this.project.status}}</span>
          </div>
        
        </div>    

        <div class="card-body">
          <p class="text-muted">Pour modifier votre projet, prenez contact avec votre tatoueur</p>

        </div>

      </div>
    </div>
</section>

<!-- Section des RDV -->

  <section class="gradient-custom">
    <div class="container py-5 h-100">

      <div class="card ">
        <!-- Titre -->
        <div class="card-body">
          <h1 class="card-title">RDV</h1>
        </div>
        <!-- Informations du RDV -->

        <div class="card-body">
          <FullCalendar ref="list" :options="calendarOptions" />
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


        <!--Conteneur des messages à dupplique en cas de nouveau message-->
        <div v-for="message in this.project.messages" lass="container_messages py-3 h-100">
          <div class="card-body">

            <div class="d-flex justify-content-start rounded-3 text-black" style="background-color: #efefef;">
              
              <!-- Côté gauche -->
               <div class="flex-grow-1 ms-3">
                <h4> Auteur : </h4>
                <p> Nom de l'auteur</p>

                <h4> Date : </h4>
                <p> {{ this.format(message.createdAt) }}</p>
              </div> -->

              <!-- Côté droit -->
              <div class="flex-grow-1 ms-3">
                <h4> Message : </h4>
                <p>{{ message.content }} </p>
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
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'


export default {
  name: 'ProjectParticulier',
    components: {
      FullCalendar // make the <FullCalendar> tag available
    },
    data() {
    return {
      successMessage: null,
      errorMessage: null,
      calendarApi: null,
      project_id:null,
      project: {},
      calendarOptions: {
        plugins: [listPlugin, dayGridPlugin, interactionPlugin],
        initialView: 'listYear',
        height: 300,
        titleFormat: // will produce something like "Tuesday, September 18, 2018"
        {
          weekday: 'long',
          month: 'long',
          year: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        },
        locale: 'fr-FR',
        selectable: true,
        timeZone: 'locale',
        slotMinTime: "07:00:00",
        slotMaxTime: "20:00:00",
        expandRows: true,
        select: this.handleSelect,
        eventContent: this.formateEvent,
      }
    }
  },

  created() {
      this.$store.dispatch('getUser');
      this.axios
        .get(`http://localhost:3000/api/projet/1`)
        .then((response) => {
          console.log(response.data);
          this.project=response.data;
          if (response.data.color)
            this.project.color = "Couleur";
          else
            this.project.color = "Noir et blanc";

          const rdvs = this.project.appointments;
          console.log(this.$refs)

          this.calendarApi = this.$refs.list.getApi();
          console.log(this.calendarApi)

          rdvs.forEach(rdv => {
            this.calendarApi.addEvent({
              id: rdv.id,
              title: rdv.title,
              extendedProps: {
                description: rdv.note,
              },
              start: new Date(rdv.beginning_hour),
              end: new Date(rdv.ending_hour)
            });
          });
        }); 
  },
  mounted() {
    console.log(this.$refs)
  },
  methods: {
    format(date) {
      return this.calendarApi.formatDate(date, {
        weekday: 'short',
        month: 'short',
        year: 'numeric',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
  },
}
</script>
<style>

.gradient-custom {
/* fallback for old browsers */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
};

</style>