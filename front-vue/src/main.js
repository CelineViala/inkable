import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import createStore from './store'

createApp(App)
.use(createStore)
.use(VueAxios,axios)
.use(router)
.mount('#app');
