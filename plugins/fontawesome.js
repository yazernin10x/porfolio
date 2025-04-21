import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faDownload, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faSun, faMoon, faDownload, faBars, faXmark)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
}) 