import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import router from "./router";
import App from './App.vue'

const app = createApp(App)

//app.use(createPinia()).use(router).mount('#app')
app.use(router).mount('#app')

//app.mount('#app')
