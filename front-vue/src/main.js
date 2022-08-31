import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import createStore from './store';
import Cloudinary from "cloudinary-vue";



createApp(App)
.use(Cloudinary, {
    configuration: { 
      cloudName: "dmoacy4yl",
    },
})
.use(VueAxios,axios)
.use(createStore)
.use(router)
.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
