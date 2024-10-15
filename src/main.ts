import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import '@/styles/common.scss'
import 'tailwindcss/tailwind.css'
import '@/styles/tailwind.css'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(pinia)
app.use(ArcoVueIcon)

app.mount('#app')
