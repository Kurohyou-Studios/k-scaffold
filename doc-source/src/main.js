import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */

/* import specific icons */
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import './assets/social-icons.scss';

import * as data from '@/assets/data'

console.log('data',data);
/* add icons to the library */
library.add(faDiceD20);

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router)

app.mount('#app')
