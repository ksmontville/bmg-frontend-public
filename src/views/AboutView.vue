<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
import {ref} from "vue";
import axios from "axios";

const aboutURL = import.meta.env.VITE_API_ABOUT

const data = ref("")

const getData = async () => {
  const response = await axios.get(aboutURL)
  console.log(response.data)
  data.value = response.data
  console.log(data.value)
}

await getData()
</script>


<template>

  <div class="flex flex-col" id="about-wrapper">

    <div class="flex flex-col text-white gap-4" id="top">

      <div class="flex flex-col justify-center items-center p-4 m-8" id="header">
        <span v-html="data.page_header" class="text-center"></span>
      </div>

      <div class="flex flex-col bg-white text-black text-xl pt-8 pb-8" id="mid">
        <div class="flex flex-row flex-wrap items-start justify-evenly">
         <div class="flex flex-col items-center p-4" id="contact">
            <span v-html="data.location" class="text-center"></span>
            <ButtonComponent button-text="Contact" button-class="bg-blue-900 text-white p-4 m-8" />
         </div>

          <span v-html="data.hours" class="text-center p-4" id="hours"></span>

        </div>

        <div class="flex flex-col items-center mt-16 mb-8" id="google-map">
          <p class="text-3xl"><strong>Find us here!</strong></p>
          <iframe :src="data.map_widget_url" width="400" height="300" style="padding: 1.2rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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