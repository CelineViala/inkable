import {createStore, createstore} from 'vuex';
import axios from 'axios';
export default createStore({
    state:{
        user:'Anonyme'
    },
    mutations:{
        check(state,user){
            state.user=user;
        }
    },
    actions:{
        check({commit}){
            axios.get('http://localhost:3000/checkRole')
                .then((response) => {
                    console.log("afterConnect");
                    console.log(response.data);
                    commit('check',response.data)
                })
                .catch(err=>{
                    console.log("error after connect")
                    console.log(err)
                })
        }

    },
    modules:{

    }
})

