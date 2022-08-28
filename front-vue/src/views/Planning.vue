<template>
    <section class=" gradient-custom">
        <div class="container py-5 h-10">
            <div class="container py-5 h-10">
                <div class="card" style="border-radius: 1rem;">
                    <FullCalendar ref="fullCalendar" :options="calendarOptions" />


                    <form ref="formElm" class="form-rdv card bg-dark text-white">

                        <p ref="dataElm" class="data-rdv">
                            Date
                        </p>
                        <div class="form-outline form-white mb-4">
                            <input v-model="rdv.title" id="titre" name="titre" type="text"
                                class="form-control form-control-lg">
                            <label for="titre" class="form-label">
                                Titre du rdv
                            </label>
                        </div>
                        <div class="form-outline form-white mb-4">
                            <input v-model="rdv.note" id="description" name="description" type="text"
                                class="form-control form-control-lg">
                            <label for="titre" class="form-label">
                                Description du rdv
                            </label>
                        </div>
                        <div class="form-outline form-white mb-4">
                            <label class="mr-sm-2 form-label" for="inlineFormCustomSelect">Statut : </label>
                            <select v-model="rdv.project_id" class="custom - select mr - sm - 2 form-control form-control-lg"
                                id="inlineFormCustomSelect">
                                <option class="form-control form-control-lg" ref="accepted" value="accepté" selected>Projet truc</option>
                                <option class="form-control form-control-lg" ref="waiting" value="en attente">En attente</option>
                                <option class="form-control form-control-lg" ref="refused" value="refusé">Refusé</option>
                            </select>
                        </div>




                        <input v-model="rdv.beginning_hour" id="startInput" name="start" type="hidden">

                        <input v-model="rdv.ending_hour" id="endInput" name="end" type="hidden">

                        <input @click="cancel" type="button" class="btn btn-outline-light btn-lg px-5" value="ANNULER">

                        <input @click="valid" type="button" class="btn btn-outline-light btn-lg px-5" value="VALIDER">

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
    async created() {
        try {
          await this.$store.dispatch('getUser');
          console.log(this.$store.state.user);
          const rdvs = this.$store.state.user.appointments;
                rdvs.forEach(rdv => {
                    console.log(rdv)
                    this.$refs.fullCalendar.getApi().addEvent({
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
          console.log(error)
        }
          
        
          
        
        
    },
    mounted() {

      console.log(this.user)
    },
    computed:{
    async user() {
          return await this.$store.state.user
        },
    },
    data() {
        return {
            id:null,
            calendar: {},
            rdv: {},
            startRange: new Date(),
            endRange: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
                initialView: 'timeGrid',
                visibleRange: {
                    start: new Date(),
                    end: new Date().setDate(new Date().getDate() + 7)
                },
                customButtons: {
                    myCustomButtonToday: {
                        text: "Aujourd'hui",
                        click: this.goToday
                    },
                    myCustomButtonForward: {
                        text: '▶',
                        click: this.moveForwardOneDay
                    },
                    myCustomButtonBack: {
                        text: '◀',
                        click: this.moveBackOneDay
                    }

                },
                headerToolbar: {
                    start: 'title', // will normally be on the left. if RTL, will be on the right
                    center: '',
                    end: 'myCustomButtonToday myCustomButtonBack myCustomButtonForward'
                },
                titleFormat: // will produce something like "Tuesday, September 18, 2018"
                {
                    weekday: 'short',
                    month: 'long',
                    year: 'numeric',
                    day: '2-digit',

                },
                locale: 'fr-FR',
                selectable: true,
                editable: true,
                timeZone: 'locale',
                slotMinTime: "07:00:00",
                slotMaxTime: "20:00:00",
                expandRows: true,
                select: this.handleSelect,
                eventDrop: this.handleEditEvent,
                eventResize: this.handleEditEvent,
                eventContent: this.formateEvent,
            }
        }
    },
    methods: {
        goToday: function () {
            this.startRange=new Date();
            this.endRange=new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            this.$refs.fullCalendar.getApi().setOption('visibleRange', {
                start: this.startRange,
                end: this.endRange
            });
        },
        moveBackOneDay: function () {
            console.log(this.startRange,this.endRange);
            this.startRange.setDate(this.startRange.getDate() - 1);
            this.endRange.setDate(this.endRange.getDate() - 1);
            this.$refs.fullCalendar.getApi().setOption('visibleRange', {
                start: this.startRange,
                end: this.endRange
            });
        },
        moveForwardOneDay: function (e) {
            console.log(this.startRange, this.endRange)
            this.startRange.setDate(this.startRange.getDate() + 1);
            this.endRange.setDate(this.endRange.getDate() + 1);

            this.$refs.fullCalendar.getApi().setOption('visibleRange', {
                start: this.startRange,
                end: this.endRange
            });
            //       this.$refs.fullCalendar.getApi().setOption('visibleRange', {
            //   start: this.$refs.fullCalendar.getApi().getOption('visibleRange').start+1,
            //   end: this.$refs.fullCalendar.getApi().getOption('visibleRange').end+1
            // });
        },
        formateEvent: function (arg) {
            var event = arg.event;
            // console.log(arg.event.extendedProps);
            let title = document.createElement('div')
            let description = document.createElement('div')
            let del = document.createElement('div')
            let edit = document.createElement('div')
            del.classList.add("btn-del");
            del.id = event.id;
            del.textContent = "❌";
            let projet = document.createElement('a');
            projet.classList.add("classLink");
            projet.setAttribute("href", "/project");
            projet.textContent = "lien vers le projet"
            // projet.href = "https://www.google.fr"
            edit.textContent = "✎";
            edit.classList.add("btn-edit");
            // projet.innerHTML = arg.event.extendedProps.projet
            edit.addEventListener("click",this.editInfoRdv);
            title.innerHTML = arg.event.title;
            description.innerHTML = arg.event.extendedProps.description;
            del.addEventListener("click", this.deleteRdv)
            let arrayOfDomNodes = [title, description, projet, del, edit]
            return {
                domNodes: arrayOfDomNodes
            }

        },
        editInfoRdv(e){
            this.$refs.formElm.style.display = "block";
        },
        deleteRdv(e) {//route :/api/pro/:idPro/rdv/:idRdv'
            console.log(e.target.id);
            this.$refs.fullCalendar.getApi().getEventById(e.target.id).remove();
            this.axios
                .delete(`http://localhost:3000/api/pro/${this.$store.state.user.id}/rdv/${e.target.id}`)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err)
                });

        },
        handleSelect(info) {
            this.calendar.apiCalendar = info.view.calendar;
            let isFree = true
            this.calendar.apiCalendar.getEvents().forEach(e => {
                isFree = !isFree ? false : this.free(new Date(this.calendar.apiCalendar.getEventById(e._def.publicId)._instance
                    .range.start), new Date(info.start), this.calendar.apiCalendar
                        .getEventById(e._def.publicId)._instance.range.end,
                    new Date(info.end));
            })
            if (!isFree)
                alert("chevauchement");
            this.$refs.formElm.style.display = "block"
            console.log(info)
            // this.$refs.formElm.style.top = info.jsEvent.y+ "px";
            // this.$refs.formElm.style.left = info.jsEvent.x+ "px";
            this.$refs.dataElm.textContent = `${this.format(info.start)} - ${this.format(info.end)}`
            this.rdv.beginning_hour = info.start
            this.rdv.ending_hour = info.end;
        },
        handleEditEvent(info) {

            console.log(info)
            let requestObj = {}
            requestObj.beginning_hour = new Date(info.event._instance.range.start);
            requestObj.ending_hour = new Date(info.event._instance.range.end);
            console.log("changement rdv")
            const idRdv = info.event._def.publicId
            const isOk=confirm("Voulez vous valider la modification de rdv?");
            if (isOk)
            {this.axios
                .patch(`http://localhost:3000/api/pro/${this.$store.state.user.id}/rdv/${idRdv}`, requestObj)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err)
                });}


        },
        free(dateStart, dateEventStart, dateEnd, dateEventEnd) {
            console.log(dateStart, dateEventEnd)
            if (dateEventEnd.getTime() > dateStart.getTime() && dateEventStart < dateEnd)
                return false

            return true
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
        cancel(e) {
            e.preventDefault();
            this.$refs.formElm.style.display = 'none';
            console.log("test")
        },

        async valid(e) {
            this.$refs.formElm.style.display = 'none';
            //!penser à dynamiser
            this.rdv.pro_id = this.$store.state.user.id;
            let idRdv;


            //enregistrement bdd
            try {
                const response = await this.axios.post(`http://localhost:3000/api/pro/${this.$store.state.user.id}/rdv`, this.rdv);
                console.log("rdv enregistré", response);
                this.rdv.id = response.data.id;

            } catch (error) {
               console.log(this.$store.state.user.id)
                console.log(error)
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
            this.rdv = {};
        },
        async getListRdv() {
          const userId=await this.user
          console.log(userId)
            try {
                let calendarApi = this.$refs.fullCalendar.getApi()
                const response = await this.axios.get(`http://localhost:3000/api/pro/${this.id}/rdv`, this.rdv);
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
                console.log(error)
                console.log(`${this.$store.state.user.id}`)
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

.form-rdv {
    display: none;
    padding: 2em;
    background-color: #fff;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.btn-del {
    width: 20px;
    height: 20px;
    background-color: crimson;
    position: absolute;
    right: 0;
    bottom: 0;
}

.classLink {
    color: #fff;

}

.btn-edit {
    width: 20px;
    height: 20px;
    background-color: rgb(24, 125, 10);
    position: absolute;
    right: 20px;
    bottom: 0;
}

.fc-timegrid-event-harness {
    overflow: auto;
}

body {
    font-size: large;
}

#calendar-listview {
    width: 30%;
}



</style>