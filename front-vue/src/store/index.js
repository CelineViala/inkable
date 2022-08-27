import {createStore, createstore} from 'vuex';
import axios from 'axios';
export default createStore({
    state:{
        responseUser:null,
        user:null,
        id:null,
        // message:null
        styles:[],
        cities:[],
        requestObj:{}
    },
    mutations:{
        async check(state,data){
          
            state.responseUser=await data;
        },
        getUser(state,user){
            state.user=user;
        },
        getAllStyles(state,styles){
            state.styles=styles;
        },
        getAllCities(state,cities){
            state.cities=cities;
        },
        createRequestObjForCloudinary(state,requestObj){
            state.requestObj=requestObj;
        }
    },
    actions:{
        async check({commit}){
            console.log("<<<<<<<<<<<<<<<<<<<<<")
            const response=await axios.get('http://localhost:3000/checkRole');
            commit('check',response.data)
                
        },
        async getUser({dispatch,commit}){
            await dispatch('check');
            const response=await axios.get(`http://localhost:3000/api/pro/${this.state.responseUser.id}`)
            console.log(response.data)
            commit('getUser',response.data)
        },
        
        
        getAllStyles({commit}){
            
            //récupération des styles a afficher dans les balises select
            axios
            .get('http://localhost:3000/api/styles')
            .then((response)=>{ 
                commit('getAllStyles',response.data.map((item)=> item.name).sort());

            })
            .catch(err=>{
                
            })
        },
        getAllCities({commit}){
            //récupération des styles a afficher dans les balises select
            axios
            .get('http://localhost:3000/api/cities')
            .then((response)=>{ 
                commit('getAllCities',this.cities=response.data[0].map((item)=> item.city).sort());

            })
            .catch(err=>{

            })
        },
        createRequestObjForCloudinary({commit},event){   
            let reader=new FileReader();
            let clientFile;
            reader.addEventListener("load", ()=>{
            clientFile=reader.result;
            
            let requestObj={
                url:'https://api.cloudinary.com/v1_1/dmoacy4yl/image/upload',
                method:"POST",
                data:{upload_preset:"preset",file:clientFile}
            }
            commit('createRequestObjForCloudinary',requestObj); 
            })

            reader.readAsDataURL(event.target.files[0]);
        },
        // handleUploadToCloudinary({commit}){
        //     let instance = axios.create();
        //     delete instance.defaults.headers.common['Authorization'];
        //     console.log(this.state.requestObj)
            
        //     const url=instance(this.state.requestObj)
        //         .then((response) => {
        //             url=response.data.url;
        //             return url
                    
                    
        //         })
        //         .catch(err=>{
        //             return err;
        //         })
        //     return url
            
        // }



    },
    modules:{

    }
})

