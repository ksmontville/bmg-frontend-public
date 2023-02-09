<script setup>
import {ref, watch} from "vue";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
import MaintenancePage from "./MaintenancePage.vue"
import ModalComponent from "../components/ModalComponent.vue";

const aboutURL = import.meta.env.VITE_API_ABOUT

const data = ref("")
const showContactForm = ref(false)

const mouseX = ref(0)
const mouseY = ref(0)

const getMouseCoords = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const getData = async () => {
  const response = await axios.get(aboutURL)
  data.value = response.data
}

const toggleContactForm = () => {
  showContactForm.value = !showContactForm.value
}

const getBtnText = () => {
  if(showContactForm.value === true) {
    return "Close Form"
  }
  else {
    return "Contact Us"
  }
}

function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const timedOut = ref(null)

const timeout = async () => {
  await wait(1000)
}

try {
  await getData()
} catch (error) {
  timedOut.value = true
}

watch(timedOut, await timeout)
</script>


<template>

  <div v-if="timedOut" class="text-center text-5xl text-white">
    <MaintenancePage />
  </div>

  <div v-else class="flex flex-col" id="about-wrapper" @click="getMouseCoords">

    <div class="flex flex-col text-white gap-4" id="top">

      <div class="flex flex-col justify-center items-center p-4 m-8" id="header">
        <span v-html="data.page_header" class="text-center"></span>
      </div>

      <div class="flex flex-row flex-wrap justify-evenly bg-white text-black text-xl pt-8 pb-8" id="mid">
        <div class="flex flex-row flex-wrap justify-center">
         <div class="flex flex-col items-center gap-8 p-4" id="contact">
            <span v-html="data.location" class="text-center"></span>
            <ButtonComponent :button-text="getBtnText()" button-class="bg-blue-900 text-white p-4 m-8" @click="toggleContactForm"/>
            <Transition name="contact">
              <ContactForm v-if="showContactForm" class="mb-12"/>
            </Transition>

         </div>
        </div>

        <div class="flex flex-col items-center gap-24" id="google-map">
          <span v-html="data.hours" class="text-center p-4" id="hours"></span>
          <div>
            <p class="text-3xl text-center"><strong>Find us here!</strong></p>
            <iframe :src="data.map_widget_url" width="400" height="300" style="padding: 1.2rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </div>

    <div class="bg-blue-900 flex flex-col text-white text-lg border-2 border-white p-8 pt-8 pb-8 gap-8" id="bot">
      <div id="bottom-top-text">
        <span v-html="data.about_header" class="text-center"></span>
        <span v-html="data.about_text" class="text-lg"></span>
      </div>

      <div class="self-center bottom bot-img">
        <img :src="data.image.full_url" :height="data.image.height" :width="data.image.width" :alt="data.image.alt" class="rounded-full border-2 border-white">
      </div>

    </div>
  </div>


</template>


<style scoped>

#header {
  font-family: Montserrat, sans-serif;
}
</style>