<script setup>
import NewProductView from "./NewProductView.vue"
import {ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String
})

const shopBtnClick = () => {
  window.open("https://www.shop-black-moon.com/")
}

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  console.log(response.data)
  data.value = response.data
}

await getData()


</script>

<template>

  <div class="landing-wrapper flex flex-row flex-wrap justify-evenly gap-8">

    <div class="hero flex flex-col p-8 justify-between items-start gap-6 text-white">
      <div class="hero-text">
        <span v-html="data.hero_text" class=""></span>
      </div>

      <div class="hero-subtext-one mt-4">
        <p v-html="data.sub_text_one" class=""></p>
      </div>

      <div class="hero-subtext-two mt-6 italic">
        <p v-html="data.sub_text_two"></p>
      </div>

      <div v-if="data.image" class="hero-img hero-btn flex flex-row items-center gap-x-6">
        <Button button-text="Shop Black Moon" button-class="bg-blue-900 p-4" @click="shopBtnClick" />
<!--        <img class="rounded-full border border-4 border-blue-900" :src="data.image.url" height="64" width="64" :alt="data.image.alt">-->
      </div>
    </div>

    <div class="new-product min-h-fit bg-blue-900 rounded-lg m-8 p-8">
      <NewProductView api-url="http://localhost:8000/api/v2/pages/9/" />
    </div>

  </div>



</template>

<style scoped>

.hero-text {
  font-family: Montserrat, sans-serif;
}

</style>
