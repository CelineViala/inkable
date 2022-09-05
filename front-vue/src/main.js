import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import createStore from './store';
import Cloudinary from "cloudinary-vue";
import breadcrumbs from 'vue-3-breadcrumbs';


createApp(App)
    .use(Cloudinary, {
        configuration: { 
            cloudName: "dmoacy4yl",
        },
    })
    .use(VueAxios,axios)
    .use(createStore)
    .use(router)
    .use(breadcrumbs, {
        includeComponent: false // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
    })
    .mount('#app');

import "bootstrap/dist/js/bootstrap.js";
