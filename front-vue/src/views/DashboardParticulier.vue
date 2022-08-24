<template>
  <h1>Dashboard Particulier</h1>
  <div class="container">
    <FullCalendar ref="fullCalendar" :options="calendarOptions" />
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