import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Carousel, initTWE } from 'tw-elements'

initTWE({ Carousel })

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
