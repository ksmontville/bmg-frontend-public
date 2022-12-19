<script setup>
import {ref} from "vue"
import axios from "axios"
import ButtonComponent from "../components/ButtonComponent.vue";

const props = defineProps({
  apiUrl: String,
})

const singlesUrl = import.meta.env.VITE_SINGLES_URL

const singlesBtnClick = () => {
  window.open(`${singlesUrl}`)
}

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  data.value = response.data
}

await getData()

</script>


<template>

  <div class="flex flex-row flex-wrap gap-16 text-white p-8" id="singlesPageWrapper">

    <div class="flex flex-col gap-12">

      <div id="singlesHeader">
        <span v-html="data.header"></span>
      </div>

      <span v-html="data.text"></span>

      <span class="" v-html="data.sub_text_one"></span>

      <div class="self-center" id="singlesPageButton">
        <ButtonComponent button-text="Shop Singles" button-class="bg-blue-900 p-4" @click="singlesBtnClick" />
      </div>

    </div>

    <div class="flex-1 flex flex-col gap-8" id="singlesPageTCGs">
      <div class="text-center" id="singlesPageSubTextTwo">
        <span v-html="data.sub_text_two"></span>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-8 p-8" id="singlesPageImages">
        <img class="rounded-lg" :src="data.logo_1.meta.download_url" height="256" width="256" :alt="data.logo_1.meta.title">
        <img class="rounded-lg" :src="data.logo_2.meta.download_url" height="256" width="256" :alt="data.logo_2.meta.title">
        <img class="rounded-lg" :src="data.logo_3.meta.download_url" height="256" width="256" :alt="data.logo_3.meta.title">
      </div>
    </div>

  </div>



</template>


<style scoped>

#singlesHeader, #singlesPageTCGs {
  font-family: Montserrat, sans-serif;
}

</style>
