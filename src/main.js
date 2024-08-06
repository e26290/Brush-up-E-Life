import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'

const app = createApp(App)
const vuetify = createVuetify({})

app.use(vuetify)
app.mount('#app')