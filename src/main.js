import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './css/base.css'
import './css/color.css'
import './css/font.css'
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import iconPlugin from './plugins/icons'

const app = createApp(App)
const vuetify = createVuetify({})

app.use(vuetify)
app.use(router)
app.use(iconPlugin)
app.mount('#app')