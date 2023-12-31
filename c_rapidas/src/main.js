import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* importar boostrap */
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'


const app = createApp(App)

app.use(router, bootstrap)

app.mount('#app')
