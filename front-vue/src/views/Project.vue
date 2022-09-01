<template>
  <h1>Project Pro</h1>

  <section class=" gradient-custom">

    <div class="container py-5 h-100">

      <div class="card bg-dark text-white" style="border-radius: 1rem;">

        <div class="card-body">
          <h3><strong>Client :</strong> {{this.first_name_client}} {{this.last_name_client}}</h3>
        </div>

        <form>

          <div class="card-body">
            <div class="form-outline form-white mb-4">
              <label class="form-label" for="typeText">Titre du projet</label>
              <input v-model="editProject.title" type="text" id="typeText" class="form-control form-control-lg" />
            </div>
          </div>

          <div class="card-body">
            <div class="form-outline form-white mb-4">
              <!-- <input v-model="editProject.description" type="text" id="typeText" class="form-control form-control-lg" />-->
              <label class="form-label" for="typeText">Description</label>
              <textarea v-model="editProject.description" type="text" id="typeText"
                class="form-control form-control-lg"></textarea>
            </div>
          </div>

        
          <div class="card-body">

            <!-- Division en 2 colonnes -->
            <div class="d-flex ">

              <!-- Côté gauche -->
              <div class="flex-grow-1 ms-3">

                <!-- Zone à tatouer -->
                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeText">Zone à tatouer</label>
                  <input v-model="editProject.area" type="text" id="typeText" class="form-control form-control-lg" />
                </div>

              </div>

              <!-- Côté droit -->
              <div class="flex-grow-1 ms-3">

                <label class="form-label" for="typeText">Coloration</label>

                <div class="flex-grow-1 ms-3">

                  <!-- Coloration -->
                  <div class="form-outline form-white mb-4 form-check-inline">
                    <input ref="inputTest" v-model="editProject.color" class="form-check-input m-1" type="radio"
                      name="flexRadioDefault" id="flexRadioDefault1" value="black_and_white">
                    <label class="form-check-label" for="flexRadioDefault"> Noir et blanc</label>
                  </div>

                  <div class="form-outline form-white mb-4 form-check-inline">
                    <input v-model="editProject.color" class="form-check-input m-1" type="radio" name="flexRadioDefault"
                      id="flexRadioDefault2" value="color">
                    <label class="form-check-label" for="flexRadioDefault">
                      Couleur
                    </label>
                  </div>

                </div> 
              </div>
            </div>
          </div>

          <div class="form-outline form-white mb-4">
            <label class="mr-sm-2" for="inlineFormCustomSelect">Statut : </label>
            <select v-model="editProject.status" class="custom - select mr - sm - 2" id="inlineFormCustomSelect">
              <option ref="accepted" style="background-color: lightgreen;" value="accepté">Accepté</option>
              <option ref="waiting" style="background-color:lightgray;" value="en attente">En attente</option>
              <option ref="refused" style="background-color:lightcoral;" value="refusé">Refusé</option>
            </select>
          </div>

          <!-- Bouton modifier -->
          <div class="form-outline form-white mb-4">
            <input @click="editProjectForm" class="btn btn-outline-light btn-lg px-5" value="Modifier" type="button"/>
          </div>
          <div class="form-outline form-white mb-4">
            <router-link :to="{name:'Planning',params:{projectId:editProject.id}}" class="btn btn-outline-light btn-lg px-5">Fixer un RDV</router-link>
          </div>

          <p class="text-success">{{ this.successMessage }}</p>
          <p class="text-danger">{{ this.errorMessage }}</p>
        </form>

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
          <FullCalendar ref="list" :options="calendarOptions"/>
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
        <div v-for="message in this.editProject.messages" lass="container_messages py-3 h-100">
          <div class="card-body">
 
            <div class="d-flex rounded-3 text-black" style="background-color: #efefef;">
              
              <div class="flex-grow-0 ms-3 mt-3" style="min-width:300px">
                <p class="text-start"> <strong> De : </strong> {{(message.consumer!==undefined && message.consumer!==null)?`${message.consumer?.last_name}  ${message.consumer?.first_name}`:message.pro.studio_name}}</p>

                <p class="text-start"><strong> Le : </strong>{{new Date(message.createdAt).toLocaleTimeString('fr-FR',{ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric',minute:'numeric'})}}</p>
              </div>

              
              <div class="flex-grow-1 ms-3 rounded-3" style="background-color:white;">
                <p class="text-start ms-3 mt-3">{{ message.content }} </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card-body">
          <form>
            <div class="form-outline form-white mb-4">
              <label for="exampleFormControlTextarea1" class="form-label">Nouveau message</label>
              <textarea v-model="this.newMessage.content" class="form-control" id="exampleFormControlTextarea1" rows="3">test</textarea>
            </div>
            
            <p class="text-success">{{this.messageOk}}</p>
           <p class="text-danger">{{this.messageNotOk}}</p>
            <input @click="validFormMessage" class="btn btn-primary btn-lg px-5" value="Envoyer" type="button"/>
          </form>
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
  name: 'Project',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {

      newMessage: {

      },
      messageOk:null,
      messageNotOk:null,
      successMessage: null,
      errorMessage: null,
      calendarApi: null,
      first_name_client:null,
      last_name_client:null,
      project_id:null,
      editProject: {},
      calendarOptions: {
        plugins: [listPlugin, dayGridPlugin, interactionPlugin],
        initialView: 'listYear',
        height: 300,
        headerToolbar: {
          start: '', // will normally be on the left. if RTL, will be on the right
          center: '',
          end:''
        },
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
    mounted() { 
      
      this.axios
        .get(`http://localhost:3000/api/projet/${this.$route.params.id}`)
        .then((response) => {
          console.log(">>>>>>>>>>>>>>>>>",response.data);
          this.project_id=response.data.id;
          this.first_name_client=response.data.consumer.first_name;
          this.last_name_client=response.data.consumer.last_name;
          this.editProject = response.data;
          if (response.data.color)
            this.editProject.color = "color";
          else
            this.editProject.color = "black_and_white";

          if (response.data.status === "accepté")
            this.$refs.accepted.setAttribute("selected", true);
          else if (response.data.status === "en attente")
            this.$refs.waiting.setAttribute("selected", true);
          if (response.data.status === "refusé")
            this.$refs.refused.setAttribute("selected", true);

          const rdvs = this.editProject.appointments;

          this.calendarApi = this.$refs.list.getApi();
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
        })
        .catch(err=>console.log(err));
       
  },
  methods: {
    
    validFormMessage() {
      console.log(this.newMessage);
      const idProject=this.$route.params.id;
      const proId=this.$store.state.user.id;
      console.log(idProject,proId);
      const requestObj={
        content: this.newMessage.content,
        project_id: idProject,
        pro_id: proId,
      };
       

      this.axios
      .post('http://localhost:3000/api/message', requestObj)
      .then((response) => {

        this.newMessage={};
        this.messageOk="Votre message a bien été envoyé";
        this.messageNotOk=null;
        response.data.pro=this.$store.state.user;
        console.log('response data', response.data)
        this.editProject.messages.push(response.data);
        
      })
      .catch((err)=>{
        console.log(err)
        this.messageOk=null;
        this.messageNotOk=err.response.data.message;
      })
    },

    editProjectForm() {

      //       area: "dos"
      // color: false
      // consumer_id: 1
      //description: "cover bras"
      // pro_id: 1
      // status: "accepté"
      // title: "Projet cover"
      console.log(this.editProject)
      const reqProject = {
        area: this.editProject.area,
        description: this.editProject.description,
        consumer_id: this.editProject.consumer_id,
        pro_id: this.editProject.pro_id,
        status: this.editProject.status,
        title: this.editProject.title,
      }
      reqProject.color = this.editProject.color === "color" ? true : false;

      this.axios
        .patch(`http://localhost:3000/api/projet/${this.project_id}`, reqProject)
        .then((response) => {
          console.log(response.data);
          this.errorMessage = null;
          this.successMessage = "Vos informations ont bien été modifiées.";
        })
        .catch((err) => {
          console.log(err);
          this.successMessage = null;
          this.errorMessage = err.response.data.message;
          return
        })
    },
  }
}




</script>
<style>
.gradient-custom {
  /* fallback for old browsers */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
};

.flex-row {
  padding-right:500px
}

;
</style>