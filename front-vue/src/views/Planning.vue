<template>
  <div class="container">
  <FullCalendar :options="calendarOptions" />
  <form ref="formElm" class="form-rdv">
            <p ref="dataElm" class="data-rdv"></p>
            <label  for="titre">Titre du rdv</label>
            <input v-model="rdv.title" id="titre" name="titre" type="text">
            <label for="description">Description du rdv</label>
            <input v-model="rdv.note" id="description" name="description" type="text">
            <!-- <label for="linkProject">Lien vers le projet</label>
            <input  id="linkProject" name="linkProject" type="text"> -->
            <input v-model="rdv.beginning_hour" id="startInput" name="start" type="hidden">
            <input v-model="rdv.ending_hour" id="endInput" name="end" type="hidden">
            <input @click="cancel" type="button" class="cancel" value="ANNULER">
            <input @click="valid" type="button" class="cancel" value="VALIDER">
            
  </form>
  </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
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
        plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'timeGridWeek',
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
        select: this.handleSelect
      }
    }
  },
  methods:{
    handleSelect(info){
      this.calendar.apiCalendar=info.view.calendar;
      this.$refs.formElm.style.display="block"
      this.$refs.formElm.style.top = info.jsEvent.clientY + "px";
      this.$refs.formElm.style.left = info.jsEvent.clientX + "px";
      this.$refs.dataElm.textContent=`${this.format(info.start)} - ${this.format(info.end)}`
      this.rdv.beginning_hour = info.start
      this.rdv.ending_hour = info.end; 
    },
    format(date) {
        return this.calendar.apiCalendar.formatDate(date, {
            weekday: 'short',
            month: 'short',
            year: 'numeric',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
    },
    cancel(e){
      e.preventDefault();
      this.$refs.formElm.style.display = 'none';
      console.log("test")
    },
    async valid(e){
      this.$refs.formElm.style.display = 'none';
      //!penser à dynamiser
      this.rdv.pro_id=1;
      try {
        const response=await this.axios.post('http://localhost:3000/api/pro/1/rdv',this.rdv);
        console.log("rdv enregistré");
        this.rdv={};
      } catch (error) {
        alert(error)
      }
     
    }
  }
}
</script>

<style>
/* input{
    width: 500px;
    height:50px;
    display: block;
} */

/* label{
    display: block;
} */

.form-rdv{
  display:none;
    padding:  2em;
    background-color: #fff;
    border: 1px solid black;
    position: absolute;
    z-index: 2;
}
.btn-del{
    width: 20px;
    height:20px;
    background-color: crimson;
    position:absolute;
    right: 0;
    bottom:0;
}
.btn-edit{
    width: 20px;
    height:20px;
    background-color: rgb(24, 125, 10);
    position:absolute;
    right: 20px;
    bottom:0;
}
.fc-timegrid-event-harness{
    overflow: auto;
}
body{
    font-size:large;
}
#calendar-listview{
    width:30%;
}
</style>