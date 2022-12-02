<script setup>
import {ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String
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

  <div class="hero flex flex-col p-8 gap-6 text-white">

    <div class="hero-text">
      <span v-html="data.hero_text" class=""></span>
    </div>

    <div class="hero-subtext-one mt-4">
      <p v-html="data.sub_text_one" class=""></p>
    </div>

    <div class="hero-subtext-two mt-6 italic">
      <p v-html="data.sub_text_two"></p>
    </div>

    <div class="btn hero-btn m-6">
      <Button button-text="Shop Black Moon" button-class="bg-blue-900 p-4" />
    </div>

    <div v-if="data.image" class="hero-img m-6">
      <img :src="data.image.url" :height="data.image.height" width="data.image.width" alt="Landing Page Image">
    </div>

  </div>


</template>

<style scoped>

.hero-text {
  font-family: Montserrat, sans-serif;
}

</style>
