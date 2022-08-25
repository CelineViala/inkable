<template>
  <section class=" gradient-custom">
    <div class="container py-5 h-10">


      <div class="container py-5 h-10">
        <div class="card" style="border-radius: 1rem;">
          <FullCalendar ref="fullCalendar" :options="calendarOptions" />


            <form ref="formElm" class="form-rdv">

              <p ref="dataElm" class="data-rdv">
                  TEST
              </p>

              <label  for="titre">
                Titre du rdv
              </label>

              <input v-model="rdv.title" id="titre" name="titre" type="text">

              <label for="description">
                Description du rdv
              </label>

              <input v-model="rdv.note" id="description" name="description" type="text">
              <!-- <label for="linkProject">Lien vers le projet</label>
              <input  id="linkProject" name="linkProject" type="text"> -->

              <input v-model="rdv.beginning_hour" id="startInput" name="start" type="hidden">
              
              <input v-model="rdv.ending_hour" id="endInput" name="end" type="hidden">
              
              <input @click="cancel" type="button" class="cancel" value="ANNULER">
              
              <input @click="valid" type="button" class="cancel" value="VALIDER">
                      
            </form>
        </div>
      </div>

    </div>
  </section>
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
  created(){
    this.$store.dispatch('check');
  },
  mounted(){
    this.getListRdv();
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
        //  events: [{
        //     id: 'a',
        //     title: 'my event',
        //     extendedProps: {
        //         description: "test"
        //     },
        //     start: '2022-08-24 12:00',
        //     end: '2022-08-24 15:00',


        // }],
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
  methods:{
    formateEvent:function(arg){
      var event = arg.event;
      console.log(arg.event.extendedProps);
      let title = document.createElement('div')
            let description = document.createElement('div')
            let del = document.createElement('div')
            let edit = document.createElement('div')
            del.classList.add("btn-del");
            del.id = event.id;
            del.textContent = "❌";
            // let projet = document.createElement('a')
            // projet.href = "https://www.google.fr"
            edit.textContent = "✎";
            edit.classList.add("btn-edit");
            // projet.innerHTML = arg.event.extendedProps.projet
            title.innerHTML = arg.event.title;
            description.innerHTML = arg.event.extendedProps.description;
            del.addEventListener("click", e => {
                console.log(e.target.id);
                this.$refs.fullCalendar.getApi().getEventById(e.target.id).remove();
            })
            let arrayOfDomNodes = [title, description, del, edit]
            return {
                domNodes: arrayOfDomNodes
            }

    },
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
      let idRdv;
      //enregistrement bdd
      try {
        const response=await this.axios.post('http://localhost:3000/api/pro/1/rdv',this.rdv);
        console.log("rdv enregistré",response);
        this.rdv.id=response.data.id;
        
      } catch (error) {
        alert(error)
      }
      //ajout sur le calendrier
      this.calendar.apiCalendar.addEvent({
            id: idRdv,
            title: this.rdv.title,
            extendedProps: {
                description: this.rdv.note,
            },

            start: this.rdv.beginning_hour,
            end: this.rdv.ending_hour,
        })
      this.rdv={};
    },
    async getListRdv() {
      try {
        let calendarApi = this.$refs.fullCalendar.getApi()
        const response=await this.axios.get('http://localhost:3000/api/pro/1/rdv',this.rdv);
        const rdvs = response.data;
        rdvs.forEach(rdv => {
                console.log(rdv)
                calendarApi.addEvent({
                    id: rdv.id,
                    title: rdv.title,
                    extendedProps: {
                        description: rdv.note,
                        

                    },
                    start: new Date(rdv.beginning_hour),
                    end: new Date(rdv.ending_hour)
                });
            });
      
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