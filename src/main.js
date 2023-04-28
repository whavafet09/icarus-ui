import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'
import store from './store/index'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



// import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(store);
app.use(vuetify);
app.use(router);


app.mount('#app');