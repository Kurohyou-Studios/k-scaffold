import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */

/* import specific icons */
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import * as data from '@/assets/data'

console.log('data',data);
/* add icons to the library */
library.add(faDiceD20);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
