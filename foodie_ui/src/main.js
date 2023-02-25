import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import FoundationCss from 'foundation-sites/dist/css/foundation.min.css?inline'
import FoundationJs from 'foundation-sites'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faList, faHeart, faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faList, faHeart, faGear, faGithub, faChevronLeft)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FoundationCss)
app.use(FoundationJs)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
