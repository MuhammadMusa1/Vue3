import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, Dialog, Loading, Notify } from 'quasar';
import 'quasar/dist/quasar.sass';
import '@quasar/extras/material-icons/material-icons.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: { Dialog, Loading, Notify },
  config: {
    brand: {
      primary: '#5b7cff',
      secondary: '#37f0b3',
      accent: '#ffcc66',
      dark: '#07111f',
      positive: '#37f0b3',
      negative: '#ff6b8a',
      info: '#3abff8',
      warning: '#ffcc66'
    }
  }
});

app.mount('#app');
