import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping, faLocationDot, faSquarePhone, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebookSquare, faWhatsappSquare, faInstagramSquare, faTwitterSquare, faLocationDot, faSquarePhone, faUser)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
