<script setup>
import {ref} from "vue"
import axios from "axios"
import ButtonComponent from "../components/ButtonComponent.vue";

const props = defineProps({
  apiUrl: String,
})

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  console.log(response.data)
  data.value = response.data
}

await getData()

</script>


<template>

  <div class="flex flex-col justify-center items-center gap-16 text-white p-8" id="singlesPageWrapper">

    <div class="flex flex-col gap-8">

      <div id="singlesHeader">
        <h2 v-html="data.header"></h2>
      </div>

      <span v-html="data.text"></span>

      <span class="" v-html="data.sub_text_one"></span>

      <div class="self-center" id="singlesPageButton">
        <ButtonComponent button-text="Shop Singles" button-class="bg-blue-900 p-4"/>
      </div>

    </div>

    <div class="flex flex-col justify-center items-center gap-8" id="singlesPageTCGs">
      <div id="singlesPageSubTextTwo">
        <span v-html="data.sub_text_two"></span>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-8 p-8" id="singlesPageImages">
        <img class="rounded-lg" :src="data.logo_1.meta.download_url" height="256" width="256" :alt="data.logo_1.meta.title">
        <img class="rounded-lg" :src="data.logo_2.meta.download_url" height="256" width="256" :alt="data.logo_2.meta.title">
        <img class="rounded-lg" :src="data.logo_3.meta.download_url" height="256" width="256" :alt="data.logo_3.meta.title">
<!--        <img class="rounded-lg" :src="data.image_2.full_url" :height="data.image_2.height" :width="data.image_2.width" :alt="data.image_2.alt">-->
<!--        <img class="rounded-lg" :src="data.image_3.full_url" :height="data.image_3.height" :width="data.image_3.width" :alt="data.image_3.alt">-->
      </div>
    </div>

  </div>



</template>


<style scoped>

#singlesHeader, #singlesPageTCGs {
  font-family: Montserrat, sans-serif;
}

</style>
