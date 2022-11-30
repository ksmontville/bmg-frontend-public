import { createApp } from "vue"
import App from "./App.vue"
import "./assets/main.css"
import router from "./router"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"

import NavbarComponent from "./components/NavbarComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import ButtonComponent from "./components/ButtonComponent.vue"

library.add(faFacebook, faDiscord, faTwitter)

const app = createApp(App)

app
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component("Navbar", NavbarComponent)
    .component("Footer", FooterComponent)
    .component("Button", ButtonComponent)
    .mount("#app")
