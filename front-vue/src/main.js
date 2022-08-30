import "bootstrap/dist/css/bootstrap.min.css"
import { createApp,h } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import createStore from './store';

import Cloudinary, { CldImage, CldVideo, CldTransformation, CldContext } from "cloudinary-vue";

createApp(App)
.use(VueAxios,axios)
.use(createStore)
.use(router)
.use(Cloudinary, {
    configuration: { 
      cloudName: "dmoacy4yl",
    },
    components:{
        CldContext,
        CldImage, 
        CldVideo, 
        CldTransformation,
    }
})
.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
