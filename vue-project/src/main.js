import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

// Импортируем готовый скомпилированный CSS Quasar, а не исходники sass
import 'quasar/dist/quasar.sass'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {}
})

app.mount('#app')
