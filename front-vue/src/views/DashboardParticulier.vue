<template>
  <h1>Dashboard Particulier</h1>
  <div class="container">
    <FullCalendar ref="fullCalendar" :options="calendarOptions" />
  </div>

  <div class="container">
    <h3>Projets en cours</h3>
    <div class="container py-4">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-8">
          <div class="card" style="border-radius: 15px;">
            <h4>Titre du projet</h4>
            <div class="card-body p-4">
              <p>Zone du tatouage</p>
              <button type="button" class="btn btn-primary">Détails du projet</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-8">
          <div class="card" style="border-radius: 15px;">
            <h4>Titre du projet</h4>
            <div class="card-body p-4">
              <p>Zone du tatouage</p>
              <button type="button" class="btn btn-primary">Détails du projet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
 

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
</script>