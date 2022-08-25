
<template>
  <h1>Dashboard Pro</h1>
 
    <section class=" gradient-custom">
    <div class="container py-5 h-10">

      <div class="container py-5 h-10">
        <div class="card" style="border-radius: 1rem;">
          <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
          <p> Si vous souaitez modifier ou annuler un rendez-vous, rendez-vous sur la page du projet en question</p>
          <p> Pensez à prévenir votre client</p>
        </div>
      </div>
<!-- Lien ves le planning du pro -->
      <button type="button" class="btn btn-light btn-lg">Vue d'ensemble de votre planning</button>

<!-- Première carte projet -->
      <div class="container py-5 h-10">
        <h4 class="text-white">Projets en cours</h4>
        <div class="container py-4">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-8">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-4">
                  <h5>Titre du projet</h5>
                  <p>Zone du tatouage</p>
                  <!-- ce boutton amène sur la page de projet modifiable -->
                  <button type="button" class="btn btn-primary">Détails du projet</button>
                </div>
              </div>
            </div>
          </div>
        </div>

<!-- Seconde carte projet -->
       <div class="container py-5 h-10">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-8">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-4">
                  <h5>Titre du projet</h5>
                  <p>Zone du tatouage</p>
                  <button type="button" class="btn btn-primary">Détails du projet</button>
                </div>
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
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  created(){
    this.$store.dispatch('check');
   },
  data() {

    
    return {
      calendar:{},
      rdv:{},
      calendarOptions: {
        plugins: [ listDayPlugin, interactionPlugin],
        initialView: 'listDay',
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
         events: [{
            id: 'a',
            title: 'my event',
            extendedProps: {
                description: "test"
            },
            start: '2022-08-24 12:00',
            end: '2022-08-24 15:00',


        },
        {
            id: 'b',
            title: 'my event 2',
            extendedProps: {
                description: "test"
            },
            start: '2022-08-24 15:00',
            end: '2022-08-24 16:00',


        },
        ],
        locale: 'fr-FR',
        selectable: true,
        timeZone: 'locale',
        slotMinTime: "07:00:00",
        slotMaxTime: "20:00:00",
        expandRows: true,
        select: this.handleSelect,
        eventContent:this.formateEvent,
      }
    }
  },
}

// premier export qui été dans le fichier de base

// export default {
//   name:'DashboardPro',
//   data(){
//     return{
       
//     }
//   },
//   created(){
    
//     this.$store.dispatch('check');
  
//     // this.role="pro"
//     // console.log("test",this.role)
//     // this.axios
//     //   .get('http://localhost:3000/api/pro')
//     //   .then((response) => {
//     //     console.log(response.data);
//     //     this.pro=response.data;
//     //   })
//   }
    
// }
</script>
<style>

</style>