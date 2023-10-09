
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8087';
app.config.globalProperties.axios = axios;

app.use(ElementPlus)
app.use(router)
app.mount('#app')
