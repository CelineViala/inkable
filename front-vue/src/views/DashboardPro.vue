
<template>
  <h1>Bienvenue sur votre dashboard {{this.pro.studio_name}}</h1>

    <section class=" gradient-custom">
    <div class="container py-5 h-10">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-8">

                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-4 text-center">
                            <div class="mb-3">
                                <label for="file" class="form-label">Ajouter une photo dans ma galerie </label>
                                <input @change="handleFile" ref="pictureInput" class="form-control" type="file">
                                <input @click="sendPicture" type="button" class="btn btn-primary" value="Ajouter"/>
                                <p class="text-success">{{this.successMessage}}</p>
                                <p class="text-danger">{{this.errorMessage}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div class="container py-5 h-10">

      <div class="container py-5 h-10">
        <div class="card" style="border-radius: 1rem;">
          <FullCalendar ref="list" :options="calendarOptions"/>
          <p> Si vous souhaitez modifier ou annuler un rendez-vous, rendez-vous sur la page du projet en question</p>
          <p> Pensez à prévenir votre client</p>
        </div>
      </div>
<!-- Lien ves le planning du pro -->
  
      <router-link :to="{name:'Planning'}" class="btn btn-primary">Vue d'ensemble de votre planning</router-link>

<!-- Première carte projet -->
      <div class="container py-5 h-10">
        <h4 class="text-white">Projets en cours</h4>
        <div v-for="projet in this.pro.projects"  class="container py-4">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-8">
              <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-4">
                  <h5>{{projet.title}}</h5>
                  <p>Zone de tatouage : {{projet.area}} </p>
                  <!-- ce boutton amène sur la page de projet modifiable ATTENTION Penser à dynamyser avec un params id du projet-->
                  <router-link :to="{name:'Project'}" class="btn btn-primary">Détail du projet</router-link>
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
    
    //récupération du pro en bdd;
    this.axios
        .get('http://localhost:3000/api/pro/1')
        .then((response) => {
          this.pro=response.data;   
          console.log(response.data);
        })
        .catch((err)=>{
          console.log(err);       
          return
        })

   },
   mounted(){
    this.getListRdv();
   },
  data() {
    return {
      successMessage:null,
      errorMessage:null,
      picture:false,
      pro:{},
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
    handleFile(e){
      this.$store.state.requestObj={};
      this.$store.dispatch('createRequestObjForCloudinary',e);
      this.picture=true;
    },
    sendPicture(){
      

      //si une photo a été ajoutée
      if(this.picture)
            {
              let instance = this.axios.create();
              delete instance.defaults.headers.common['Authorization'];
              //envoi photo cloudinary
              instance(this.$store.state.requestObj)
                .then((response) => {
                  this.axios
                    .post('http://localhost:3000/api/pro/1/tatouages',{pro_id:1,tattoo_picture_path:response.data.url})
                    .then((res)=>{
                       this.errorMessage=null;
                       this.successMessage="Votre photo a bien été envoyée";
                       this.$refs.pictureInput.value=null;
                       this.picture=false;
                    })
                    .catch((err)=>{
                      this.successMessage=null;
                       this.errorMessage="Erreur serveur";
                    })

                })
                .catch((err)=>{
                    this.successMessage=null;
                    this.errorMessage="Erreur envoi photo";
                    return;
                })

            }else{
              this.successMessage=null;
              this.errorMessage="Vous n'avez pas ajouté de photo";
            }

    },
    async getListRdv() {
      try {
        console.log(this.$refs)
        let calendarApi = this.$refs.list.getApi()
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