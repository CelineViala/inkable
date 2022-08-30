import {createStore, createstore} from 'vuex';
import axios from 'axios';
const router=require('../router')
export default createStore({
    state:{
        dataToken:null,
        user:{
            role:'anonyme'
        },
        styles:[],
        cities:[],
        requestObj:{}
    },
    mutations:{
        async check(state,data){
            
            state.dataToken=await data;
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
        },
        resetRequestObj(state){
            state.requestObj={};
        },
        deleteUser(state){
            state.user={};
        },
        setAnonymous(state){
            state.user.role="anonyme";
        }
    },
    actions:{
        async setAnonymous({commit}){
            commit('setAnonymous')
        },
        async check({commit}){
            const response=await axios.get('http://localhost:3000/checkRole');
            commit('check',response.data)        
        },
        async getUser({dispatch,commit}){
            try {           
                await dispatch('check');
                let response;
                if(this.state.dataToken.role==='pro')
                    response=await axios.get(`http://localhost:3000/api/pro/${this.state.dataToken.id}`);
                else if(this.state.dataToken.role==='consumer')
                    response=await axios.get(`http://localhost:3000/api/consumer/${this.state.dataToken.id}`);
                
                commit('getUser',response.data)
            } catch (error) {
                dispatch('setAnonymous');
                console.log(error)
            }
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
        deleteUser({commit}){
            commit('deleteUser');
        },
        resetRequestObj({commit}){
            commit('resetRequestObj');
        },
        async logout({dispatch,commit}){
            //suppression du Token
            localStorage.removeItem("token");
            //suppression du header Authorization(le back ne reconnaitra plus l'utilisateur )
            delete axios.defaults.headers.common['Authorization'];
            //mise à jour de user.role à anonyme
            await dispatch('deleteUser');
            await dispatch('setAnonymous');
            console.log(router)
            router.default.push('/'); 

        }
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

